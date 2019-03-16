import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { routes } from "./app-routing.module";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TexasLottoComponent } from "./texas-lotto/texas-lotto.component";

describe('Router test', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TexasLottoComponent,
        WelcomeComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('should navigate to Welcome page', () => {
    fixture.ngZone.run(() => router.navigate(['welcome']))
      .then(() => expect(location.path()).toBe('/welcome'));
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
// import { AppComponent } from './app.component';
// import { routes } from './app-routing.module';
// import { Router } from "@angular/router";
// import { ComponentFixture, fakeAsync, tick, TestBed } from "@angular/core/testing";
// import { Location, CommonModule } from '@angular/common';
// import { RouterTestingModule } from '@angular/router/testing';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { TexasLottoComponent } from './texas-lotto/texas-lotto.component';

// describe('Router Test', () => {
//   let fixture: ComponentFixture<AppComponent>;
//   let router: Router;
//   let location: Location;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent,
//         TexasLottoComponent,
//         WelcomeComponent
//       ],
//       imports: [
//         RouterTestingModule.withRoutes(routes),
//         CommonModule
//       ]
//     });
//     router = TestBed.get(Router);
//     location = TestBed.get(Location);
//     fixture = TestBed.createComponent(AppComponent);
//     fixture.ngZone.run(() => {
//       router.initialNavigation();
//     });
//   });

//   it('canary test', () => {
//     expect(true).toBeTruthy();
//   });

//   it('should navigate to Home page', fakeAsync(() => {
//     fixture.ngZone.run(() => {
//       router.navigate(['welcome']).then(() => {
//         expect(location.path()).toBe('/welcome');
//       });
//       tick();
//     });
//   }));

//   it('should navigate to texas-lotto', fakeAsync(() => {
//     fixture.ngZone.run(() => {
//       router.navigate(['texas-lotto']).then(() => expect(location.path()).toBe('/texas-lotto'));
//       tick();
//     });
//   }));
// });
