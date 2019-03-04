import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexasLottoComponent } from './texas-lotto.component';
import { TexasLottoService } from '../texas-lotto.service';

describe('TexasLottoComponent', () => {
  let component: TexasLottoComponent;
  let fixture: ComponentFixture<TexasLottoComponent>;
  let mockTexasLottoService: TexasLottoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexasLottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
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

  it('should invoke generateTexasLottoNumbers()', () => {
    expect(component.generateTexasLottoNumbers).toHaveBeenCalledTimes(1);
  });

  xit('should get a number array from generateTexasLottoNumbers()', () => {
    // mockTexasLottoService.generate.and.returnValue(null);
    
    fixture.detectChanges();

    expect(component.lottoNumbers).toEqual([1,2,3,4,5,6]);
  });
});
