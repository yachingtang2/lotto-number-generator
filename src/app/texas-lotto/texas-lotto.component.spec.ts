import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexasLottoComponent } from './texas-lotto.component';
import { TexasLottoService } from '../texas-lotto.service';
import { of } from 'rxjs';

describe('TexasLottoComponent', () => {
  let component: TexasLottoComponent;
  let fixture: ComponentFixture<TexasLottoComponent>;
  let service: TexasLottoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexasLottoComponent ]
    })
    .compileComponents();
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
    expect(component.title).toEqual('Texas Lotto');
  });

  it('should display title - "Texas Lotto"', () => {
    const titleText = fixture.nativeElement.querySelector('h1');
    expect(titleText.textContent).toEqual('Texas Lotto');
  });

  fit('should display lotto numbers', () => {
    const numbers = fixture.nativeElement.querySelectorAll('li');
    let count = 0;

    expect(numbers.length).toEqual(6);
    numbers.forEach(lottoNumber => {
      expect(lottoNumber.textContent).toEqual((++count).toString());
    });
  });

  xit('should call texas lotto service', () => {
    const serviceSpy = spyOn(service, 'generate').and.callThrough();
    component.generateTexasLottoNumbers();
    expect(serviceSpy).toHaveBeenCalledTimes(10);
  });

  xit('should retrieve lotto numbers', () => {

  });

  // it('should get a number array from generateTexasLottoNumbers()', () => {


  //   service.generate().sub
  //   expect(component.lottoNumbers).toEqual([1,2,3,4,5,6]);
  // });
});
