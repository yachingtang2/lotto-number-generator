import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMillionLottoComponent } from './mega-million-lotto.component';
import { MegaMillionLottoService } from '../mega-million-lotto.service';
import { of, Subject, Observable } from 'rxjs';

const expectedMegaMillionLottoNumbers = [2, 12, 22, 32, 42, 52];

describe('MegaMillionLottoComponent', () => {
  let component: MegaMillionLottoComponent;
  let fixture: ComponentFixture<MegaMillionLottoComponent>;
  let service: MegaMillionLottoService;
  let subject: Subject<number[]>;
  let serviceStub: MegaMillionLottoService;

  class MegaMillionLottoServiceStub {
    constructor(private result: Observable<number[]>) {}

    generate(): Observable<number[]> {
      return this.result;
    }
  }

  beforeEach(async(() => {
    subject = new Subject();
    serviceStub = new MegaMillionLottoServiceStub(subject);

    TestBed.configureTestingModule({
      declarations: [ MegaMillionLottoComponent ],
      providers: [
        { provide: MegaMillionLottoService, useValue: serviceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(MegaMillionLottoService);
    fixture = TestBed.createComponent(MegaMillionLottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have MegaMillionService', () => {
    expect(service).toBeTruthy();
  });

  it('should have title - Mega Million Lotto numbers', () => {
    expect(component.title).toEqual('Mega Million Lotto numbers');
  });

  it('should retrieve Mega Million Lotto numbers', () => {
    subject.next(expectedMegaMillionLottoNumbers);
    expect(component.megaMillionLottoNumbers).toEqual(expectedMegaMillionLottoNumbers);
  });

  describe('Page display', () => {
    it('should display title - Mega Million Lotto numbers', () => {
      const title = fixture.nativeElement.querySelector('h1');
      expect(title.textContent).toEqual('Mega Million Lotto numbers');
    });

    it('should display Mega Million Lotto numbers', () => {
      let count = 0;
      const li = fixture.nativeElement.querySelectorAll('li');
      expect(li.length).toEqual(6);

      li.forEach(number =>
        expect(number.textContent).toEqual((count++ * 10 + 2).toString()));
    });
  });

  describe('MegaMillionService', () => {
    let serviceSpy;

    beforeEach(() => {
      serviceSpy = spyOn(service, 'generate').and.returnValue(of(expectedMegaMillionLottoNumbers));
    });

    it('should call generate method', () => {
      component.generateMegaMillionLottoNumbers();
      fixture.detectChanges();
      expect(serviceSpy).toHaveBeenCalledTimes(1);
    });
  });
});
