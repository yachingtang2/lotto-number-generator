import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexasLottoComponent } from './texas-lotto.component';
import { TexasLottoService } from '../texas-lotto.service';
import { Observable, Subject, of } from "rxjs";

describe('TexasLottoComponent', () => {
  let component: TexasLottoComponent;
  let fixture: ComponentFixture<TexasLottoComponent>;
  let service: TexasLottoService;
  let subject: Subject<number[]>;
  let serviceStub: TexasLottoService;

  class TexasLottoServiceStub {
    constructor(private result: Observable<number[]>) {}

    generate(): Observable<number[]> {
      return this.result;
    }
  }

  beforeEach(async(() => {
    subject = new Subject();
    serviceStub = new TexasLottoServiceStub(subject);

    TestBed.configureTestingModule({
      declarations: [TexasLottoComponent],
      providers: [
        {
          provide: TexasLottoService,
          useValue: serviceStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(TexasLottoService);
    fixture = TestBed.createComponent(TexasLottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title - "Texas Lotto"', () => {
    expect(component.title).toEqual("Texas Lotto");
  });

  it('should display title - "Texas Lotto"', () => {
    const titleText = fixture.nativeElement.querySelector("h1");
    expect(titleText.textContent).toEqual("Texas Lotto");
  });

  it('should display lotto numbers', () => {
    const numbers = fixture.nativeElement.querySelectorAll("li");
    let count = 0;

    expect(numbers.length).toEqual(6);
    numbers.forEach(lottoNumber => {
      expect(lottoNumber.textContent).toEqual((++count).toString());
    });
  });

  describe('Texas Lotto service', () => {
    let expectedTexasLottoNumbers = [10, 20, 30, 40, 50, 60];

    it('should have texas lotto service', () => {
      expect(service).toBeTruthy();
    });

    it('should retrieve lotto numbers', () => {
      subject.next(expectedTexasLottoNumbers);
      expect(component.lottoNumbers).toEqual(expectedTexasLottoNumbers);
    });
  });

  describe('Texas Lotto service - generate()', () => {
    let expectedTexasLottoNumbers;
    let serviceSpy;

    beforeEach(() => {
      expectedTexasLottoNumbers = [5,10,15,25,30,35];
      serviceSpy = spyOn(service, 'generate').and.returnValue(
        of(expectedTexasLottoNumbers)
      );
      component.lottoNumbers = expectedTexasLottoNumbers;
      fixture.detectChanges();
    });

    it('should call generate method', () => {
      component.generateTexasLottoNumbers();
      expect(serviceSpy).toHaveBeenCalledTimes(1);
    });
  });
});
