import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app.routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { TexasLottoComponent } from './texas-lotto/texas-lotto.component';
import { MegaMillionLottoComponent } from './mega-million-lotto/mega-million-lotto.component';
import { TwoStepsLottoComponent } from './two-steps-lotto/two-steps-lotto.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Router test', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(routes) ],
      declarations: [ AppComponent, MegaMillionLottoComponent, TexasLottoComponent, TwoStepsLottoComponent, WelcomeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    });
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    // fixture.ngZone.run(() => router.initialNavigation());
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('should navigate to Welcome page', () => {
    fixture.ngZone.run(() => router.navigate(['welcome'])
      .then(() => expect(location.path()).toEqual('/welcome')));
  });

  it('should navigate to Texas Lotto page', () => {
    fixture.ngZone.run(() => router.navigate(['texas-lotto'])
      .then(() => expect(location.path()).toEqual('/texas-lotto')));
  });

  it('should navigate to Mega Million page', () => {
    fixture.ngZone.run(() => router.navigate(['mega-million'])
      .then(() => expect(location.path()).toEqual('/mega-million')));
  });

  it('should navigate to Two Steps page', () => {
    fixture.ngZone.run(() => router.navigate(['two-steps'])
      .then(() => expect(location.path()).toEqual('/two-steps')));
  });

  it('should navigate to Default page', () => {
    fixture.ngZone.run(() => router.navigate([''])
      .then(() => expect(location.path()).toEqual('/welcome')));
  });
});
