import { TwoStepLottoService } from './../two-step-lotto.service';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { TwoStepsLottoComponent } from './two-steps-lotto.component';
import { of, Subject, Observable } from 'rxjs';

describe('Two Steps lotto component', () => {
  const expectedNumbers = [1, 2, 3, 4, 5];

  class TwoStepLottoServiceStub {
    constructor(private result: Observable<number[]>) {
      this.result = result;
    }

    generate(): Observable<number[]> {
      return this.result;
    }
  }

  let service: TwoStepLottoService;
  let fixture: ComponentFixture<TwoStepsLottoComponent>;
  let component: TwoStepsLottoComponent;
  let subject: Subject<number[]>;
  let serviceStub: TwoStepLottoServiceStub;

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
    fixture = TestBed.createComponent(TwoStepsLottoComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TwoStepLottoService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(true).toBeTruthy();
  });

  it('should have service', () => {
    expect(service).toBeTruthy();
  });

  it('should have title', () => {
    expect(component.title).toEqual('Two Steps Lotto Numbers');
  });

  it('should have twoStepsLottoNumbers', () => {
    expect(component.twoStepsLottoNumbers).toBe(undefined);
  });

  describe('TwoStepLottoService', () => {
    let serviceSpy;

    it('should call service.generate()', () => {
      serviceSpy = spyOn(service, 'generate').and.returnValue(of([1, 2, 3, 4, 5]));
      component.generateTwoStepsLottoNumbers();
      expect(serviceSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('twoStepsLottoNumbers', () => {
    it('should generate twoStepsLottoNumbers', () => {
      subject.next(expectedNumbers);
      expect(component.twoStepsLottoNumbers).toEqual(expectedNumbers);
    });
  });

  describe('HTML element', () => {
    it('should display title', () => {
      const element = fixture.nativeElement.querySelector('h1');
      expect(element.textContent).toEqual('Two Steps Lotto Numbers');
    });

    it('should not display number when no number', () => {
      const element = fixture.nativeElement.querySelector('ul');
      expect(element).toBe(null);
      expect(component.twoStepsLottoNumbers).toBe(undefined);
    });

    it('should display numbers', () => {
      component.twoStepsLottoNumbers = [1, 2, 3, 4, 5];
      fixture.detectChanges();
      const numbers = fixture.nativeElement.querySelectorAll('li');
      expect(numbers.length).toEqual(5);
      let value = 0;
      numbers.forEach(number => {
        expect(number.textContent).toEqual((++value).toString());
      });
    });
  });
});

