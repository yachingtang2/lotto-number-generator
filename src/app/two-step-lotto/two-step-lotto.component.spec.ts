import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStepLottoComponent } from './two-step-lotto.component';
import { TwoStepLottoService } from '../two-step-lotto.service';
import { of, Observable, Subject } from 'rxjs';

class TwoStepLottoServiceStub {
    constructor(private result: Observable<number[]>) {}

    generate(): Observable<number[]> {
      return this.result;
    }
}

describe('TwoStepLottoComponent', () => {
  const expectedTwoStepLottoNumbers = [1,2,3,4,5];

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

  it('should have title', () => {
    expect(component.title).toEqual('Two Step Lotto Numbers');
  });

  it('should have two step lotto numbers', () => {
    expect(component.twoStepLottoNumbers).toEqual(null);
  });

  describe('HTML element', () => {
    it('should display title', () => {
      fixture.detectChanges();
      const title = fixture.nativeElement.querySelector('h1');
      expect(title.textContent).toEqual('Two Step Lotto Numbers');
    });

    it('should not display numbers when twoStepLottoNumbers is null', () => {
      const ulElement = fixture.nativeElement.querySelector('ul');
      expect(ulElement).toBeFalsy();
    });

    it('should display Two Step Lotto numbers when numbers exist', () => {
      component.twoStepLottoNumbers = expectedTwoStepLottoNumbers;
      fixture.detectChanges();
      const numbers = fixture.nativeElement.querySelectorAll('ul li');
      expect(numbers.length).toEqual(5);
    
      let count = 0;
      numbers.forEach(number => expect(number.textContent).toEqual((++count).toString()));
    });
  });

  describe('Two Step Lotto Service', () => {
    let serviceSpy;

    beforeEach(() => {
      serviceSpy = spyOn(service, 'generate').and.returnValue(of(expectedTwoStepLottoNumbers));
    });

    it('should have service', () => {
      expect(service).toBeTruthy();
    });

    it('should call service', () => {
      component.generateTwoStepLottoNumbers();
      expect(serviceSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Generate Two Step Lotto Numbers', () => {
    it('should generate lotto numbers', () => {
      fixture.detectChanges();
      subject.next(expectedTwoStepLottoNumbers);
      expect(component.twoStepLottoNumbers).toEqual(expectedTwoStepLottoNumbers);
    });
  });
});
