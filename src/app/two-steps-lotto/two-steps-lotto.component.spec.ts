import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStepsLottoComponent } from './two-steps-lotto.component';
import { TwoStepLottoService } from '../two-step-lotto.service';
import { of, Subject, Observable } from 'rxjs';

describe('TwoStepsLottoComponent', () => {
  const expectedNumbers = [1,2,3,4,5];
  class TwoStepLottoServiceStub {
    constructor(private result: Observable<number[]>) {
      this.result = result;
    }

    generate(): Observable<number[]> {
      return this.result;
    }
  }

  let component: TwoStepsLottoComponent;
  let fixture: ComponentFixture<TwoStepsLottoComponent>;
  let service: TwoStepLottoService;
  let serviceStub: TwoStepLottoServiceStub;
  let subject: Subject<number[]>;

  beforeEach(async(() => {
    subject = new Subject();
    serviceStub = new TwoStepLottoServiceStub(subject);

    TestBed.configureTestingModule({
      declarations: [ TwoStepsLottoComponent ],
      providers: [
        { provide: TwoStepLottoService, useValue: serviceStub }
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

  it('should have title - Two Steps Lotto numbers', () => {
    expect(component.title).toEqual('Two Steps Lotto numbers');
  });

  it('should have two steps lotto numbers', () => {
    expect(component.twoStepsLottoNumbers).toEqual(undefined);
  });

  describe('call service', () => {
    let serviceSpy;

    beforeEach(() => {
      serviceSpy = spyOn(service, 'generate').and.returnValue(of(null));
    });

    it('should call TwoStepLottoService', () => {
      component.generateTwoStepsLottoNumbers();
      expect(serviceSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('generate two steps lotto numbers', () => {
    it('should generate two steps numbers', () => {
      subject.next(expectedNumbers);
      expect(component.twoStepsLottoNumbers).toEqual(expectedNumbers);
    });
  });
});
