import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoNumberRequestFormComponent } from './lotto-number-request-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LottoNumberRequestFormComponent', () => {
  let component: LottoNumberRequestFormComponent;
  let fixture: ComponentFixture<LottoNumberRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoNumberRequestFormComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoNumberRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have first name input field', () => {
    const input = fixture.nativeElement.querySelector('input[name="firstName"]');
    expect(input).toBeTruthy();
  });

  it('should pass first name value from HTML to form component', () => {
    const input = fixture.nativeElement.querySelector('input[name="firstName"]');
    const expectedValue = 'first name';
    input.value = expectedValue;
    input.dispatchEvent(new Event('input'));
    expect(component.lottoNumberRequestForm.get('firstName').value).toEqual(expectedValue);
  });

  it('should pass first name value from form component to HTML page', () => {
    const expectedValue = 'FirstName';
    component.lottoNumberRequestForm.get('firstName').setValue(expectedValue);
    const input = fixture.nativeElement.querySelector('input[name="firstName"]');
    expect(input.value).toEqual(expectedValue);
  });
});
