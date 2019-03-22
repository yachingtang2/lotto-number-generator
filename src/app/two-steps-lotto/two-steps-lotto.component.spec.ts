import { TwoStepLottoService } from './../two-step-lotto.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStepsLottoComponent } from './two-steps-lotto.component';
import { of, Subject, Observable } from 'rxjs';

describe('TwoStepsLottoComponent', () => {
  class TwoStepLottoServiceStub {
    constructor(private result: Observable<number[]>) {
      this.result = result;
    }

    generate(): Observable<number[]> {
      return this.result;
    }
  }
  const expectedTwoStepsLottoNumbers = [1,2,3,4,5];

  let component: TwoStepsLottoComponent;
  let fixture: ComponentFixture<TwoStepsLottoComponent>;
  let service: TwoStepLottoService;
  let subject: Subject<number[]>;
  let serviceStub: TwoStepLottoServiceStub;

  beforeEach(async(() => {
    subject = new Subject();
    serviceStub = new TwoStepLottoServiceStub(subject);
    
    TestBed.configureTestingModule({
      declarations: [ TwoStepsLottoComponent ],
      providers: [
        {
          provide: TwoStepLottoService,
          useValue: serviceStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(TwoStepLottoService);
    fixture = TestBed.createComponent(TwoStepsLottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have service', () => {
    expect(service).toBeTruthy();
  });

  it('should have title', () => {
    expect(component.title).toEqual('Two Steps Lotto Numbers');
  });

  it('should have two steps lotto numbers', () => {
    expect(component.twoStepsLottoNumbers).toBe(undefined);
  });

  describe('should call service', () => {
    let serviceSpy;

    beforeEach(() => {
      serviceSpy = spyOn(service, 'generate').and.returnValue(of(expectedTwoStepsLottoNumbers));
    });

    it('should call service', () => {
      component.generateTwoStepsLottoNumbers();
      expect(serviceSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Generate Two Step Lotto Numbers', () => {
    it('should generate', () => {
      subject.next(expectedTwoStepsLottoNumbers);
      expect(component.twoStepsLottoNumbers).toEqual(expectedTwoStepsLottoNumbers);
    });
  });

  describe('display page elements', () => {
    it('should display title', () => {
      const element = fixture.nativeElement.querySelector('h1');
      expect(element.textContent).toEqual('Two Steps Lotto Numbers');
    });

    it('should not display Two Steps Lotto Numbers if numbers do not exist', () => {
      const element = fixture.nativeElement.querySelector('ul');
      expect(element).toBeFalsy();
    });

    it('should display Two Steps Lotto Numbers', () => {
      component.twoStepsLottoNumbers = [1,2,3,4,5];
      fixture.detectChanges();
      const numbers = fixture.nativeElement.querySelectorAll('ul li');
      let count = 0;
      numbers.forEach(number => expect(number.textContent).toEqual((++count).toString()));
    });
  });
});
