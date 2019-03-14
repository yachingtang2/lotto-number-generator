import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStepLottoComponent } from './two-step-lotto.component';
import { TwoStepLottoService } from '../two-step-lotto.service';
import { Subject, of, Observable } from 'rxjs';

describe('TwoStepLottoComponent', () => {
  const expectTWoStepLottoNumbers = [1,2,3,4,5];

  class TwoStepLottoServiceStub {
    constructor(private result: Observable<number[]>) { }

    generate(): Observable<number[]> {
      return this.result;
    }
  }

  let component: TwoStepLottoComponent;
  let fixture: ComponentFixture<TwoStepLottoComponent>;
  let service: TwoStepLottoService;
  let subject: Subject<number[]>;
  let serviceStub: TwoStepLottoServiceStub;

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

  it('should have service', () => {
    expect(service).toBeTruthy();
  });

  describe('component properties', () => {
    it('should have title', () => {
      expect(component.title).toEqual('Two Step Lotto Numbers');
    });

    it('should have Two Step Lotto Numbers', () => {
      expect(component.twoStepLottoNumbers).toEqual(undefined);
    });
  });

  describe('HTML elements', () => {
    it('should display title', () => {
      fixture.detectChanges();
      const title = fixture.nativeElement.querySelector('h1');
      expect(title.textContent).toEqual('Two Step Lotto Numbers');
    });

    it('should not display Two Step Lotto Numbers', () => {
      const li = fixture.nativeElement.querySelectorAll('li');
      expect(li.length).toEqual(0);
    })
  });

  describe('Component calls Two Step Lotto Service', () => {
    let serviceSpy;

    beforeEach(() => {
      serviceSpy = spyOn(service, 'generate').and.returnValue(of(expectTWoStepLottoNumbers));
    });

    it('should call Two Setp Lotto Service', () => {
      component.generateTwoStepLottoNumbers();
      expect(serviceSpy).toHaveBeenCalledTimes(1);
    })
  });

  describe('Two Step Lotto Numbers in component', () => {
    it('should retrieve Two Step Lotto Numbers from service', () => {
      fixture.detectChanges();
      subject.next(expectTWoStepLottoNumbers);
      expect(component.twoStepLottoNumbers).toEqual(expectTWoStepLottoNumbers);
    });
  });
});
