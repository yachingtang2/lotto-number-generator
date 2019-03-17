import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStepLottoComponent } from './two-step-lotto.component';
import { TwoStepLottoService } from '../two-step-lotto.service';
import { of, Subject, Observable } from 'rxjs';

describe('TwoStepLottoComponent', () => {
  const expectedTitle = 'Two Step Lotto Numbers';
  const expectedTwoStepLottoNumbers = [1,2,3,4,5];
  
  class TwoStepLottoServiceStub {
    constructor(private result: Observable<number[]>) {}

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
    fixture = TestBed.createComponent(TwoStepLottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have service', () => {
    expect(service).toBeTruthy();
  });

  it('should have property title', () => {
    expect(component.title).toEqual(expectedTitle);
  });

  it('should have property twoStepLottoNumbers', () => {
    expect(component.twoStepLottoNumbers).toEqual(undefined);
  });

  describe('HTML element', () => {
    it('should display title', () => {
      fixture.detectChanges();
      const title = fixture.nativeElement.querySelector('h1');
      expect(title.textContent).toBe(expectedTitle);
    });

    it('should display two step lotto numbers', () => {
      const numbers = fixture.nativeElement.querySelectorAll('li');
      let matchingNumber = 0;
      numbers.forEach(number => expect(number.textContent).toEqual((++matchingNumber).toString()));
    });
  });

  describe('Two Step Lotto service', () => {
    let serviceSpy;

    beforeEach(() => {
      serviceSpy = spyOn(service, 'generate').and.returnValue(of(expectedTwoStepLottoNumbers));
    });

    it('should invoke service', () => {
      component.generateTwoStepLottoNumbers();
      expect(serviceSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('generate two step lotto numbers', () => {
    it('should generate', () => {
      subject.next(expectedTwoStepLottoNumbers);
      expect(component.twoStepLottoNumbers).toEqual(expectedTwoStepLottoNumbers);
    });
  });
});
