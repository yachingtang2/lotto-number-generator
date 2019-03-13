import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStepLottoComponent } from './two-step-lotto.component';
import { TwoStepLottoService } from '../two-step-lotto.service';
import { of, Subject, Observable } from 'rxjs';

describe('TwoStepLottoComponent', () => {

  class TwoStepLottoServiceStub {
    constructor(private results) {
      this.results = results;
    }

    generate(): Observable<number[]> {
      return this.results;
    }
  }

  const expectedNumbers = [1,2,3,4,5];
  let component: TwoStepLottoComponent;
  let fixture: ComponentFixture<TwoStepLottoComponent>;
  let service: TwoStepLottoService;
  let subject: Subject<number[]>;
  let serviceStub: TwoStepLottoService;

  beforeEach(async(() => {
    subject = new Subject();
    serviceStub = new TwoStepLottoServiceStub(subject);

    TestBed.configureTestingModule({
      declarations: [ TwoStepLottoComponent ],
      providers: [{
        provide: TwoStepLottoService, useValue: serviceStub
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(TwoStepLottoService);
    fixture = TestBed.createComponent(TwoStepLottoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title - Two Step Lotto Numbers', () => {
    expect(component.title).toEqual('Two Step Lotto Numbers');
  });

  describe('Two Step service', () => {
    let serviceSpy;

    beforeEach(() => {
      serviceSpy = spyOn(service, 'generate').and.returnValue(of(null));
    });

    it('should have service', () => {
      expect(service).toBeTruthy();
    });

    it('should call service', () => {
      component.generateTwoStepLottoNumbers();
      expect(serviceSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('service sets Two Step Lotto numbers', () => {
    it('should generate Two Step Lotto Numbers', () => {
      fixture.detectChanges();
      subject.next(expectedNumbers);
      expect(component.twoStepLottoNumbers).toEqual(expectedNumbers);
    })
  });

  describe('HTML element', () => {
    it('should display title - "Two Step Lotto Numbers"', () => {
      fixture.detectChanges();
      const title = fixture.nativeElement.querySelector('h1');
      expect(title.textContent).toEqual('Two Step Lotto Numbers');
    });

    it('should display Two Step Lotto numbers', () => {
      component.twoStepLottoNumbers = expectedNumbers;
      fixture.detectChanges();

      const numbers = fixture.nativeElement.querySelectorAll('li');
      expect(numbers.length).toEqual(5);
      let count = 0;
      numbers.forEach(number => {
        ++count;
        expect(number.textContent).toEqual(count.toString());
      });
    });
  });
});
