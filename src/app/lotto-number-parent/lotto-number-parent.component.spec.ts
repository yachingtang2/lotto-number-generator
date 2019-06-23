import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoNumberParentComponent } from './lotto-number-parent.component';
import { LottoNumberDisplayComponent } from '../lotto-number-display/lotto-number-display.component';

describe('LottoNumberParentComponent', () => {
  let component: LottoNumberParentComponent;
  let fixture: ComponentFixture<LottoNumberParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LottoNumberParentComponent,
        LottoNumberDisplayComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoNumberParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title', () => {
    component.title = 'title';
    expect(component.title).toBeDefined();
  });

  it('should have numbers', () => {
    component.lottoNumbers = [ 1, 2, 3, 4, 5, 6 ];
    expect(component.lottoNumbers).toBeDefined();
  });

  it('should have lotto-number-display', () => {
    const element = fixture.nativeElement.querySelector('app-lotto-number-display');
    expect(element).toBeTruthy();
  });
});
