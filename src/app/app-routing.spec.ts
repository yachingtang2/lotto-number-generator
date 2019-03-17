import { TestBed, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { Component } from "@angular/compiler/src/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { WelcomeComponent } from "./welcome/welcome.component";
import { RouterTestingModule } from "@angular/router/testing";
import { routes } from "./app-routing.module";
import { TexasLottoComponent } from "./texas-lotto/texas-lotto.component";

describe('Router test', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        TexasLottoComponent,
        WelcomeComponent
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture.ngZone.run(() => router.initialNavigation());
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('should navigate to Welcome page', () => {
    fixture.ngZone.run(() => router.navigate(['welcome'])
      .then(() => expect(location.path()).toBe('/welcome')));
  });

  it('should navigate to Texas Lotto page', () => {
    fixture.ngZone.run(() => router.navigate(['texas-lotto'])
      .then(() => expect(location.path()).toBe('/texas-lotto')));
  });

  it('should navigate to default page - Welcome page', () => {
    fixture.ngZone.run(() => router.navigate([''])
      .then(() => expect(location.path()).toBe('/welcome')));
  });
});
