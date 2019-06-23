import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoNumberDisplayComponent } from './lotto-number-display.component';

describe('LottoNumberDisplayComponent', () => {
  let component: LottoNumberDisplayComponent;
  let fixture: ComponentFixture<LottoNumberDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoNumberDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoNumberDisplayComponent);
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

  it('should display title', () => {
    component.title = 'title';
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('h1');
    expect(element.textContent).toEqual('title');
  });

  it('should display lotto numbers', () => {
    component.lottoNumbers = [ 5, 6, 7, 8, 9 , 10 ];
    fixture.detectChanges();
    const numbers = fixture.nativeElement.querySelectorAll('li');
    expect(numbers.length).toEqual(6);
  });

  it('should not display lotto numbers', () => {
    const element = fixture.nativeElement.querySelector('ul');
    expect(element).toBeNull();
  });
});
