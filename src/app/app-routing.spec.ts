import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { Router } from "@angular/router";
import { ComponentFixture, fakeAsync, tick, TestBed } from "@angular/core/testing";
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from './app.module';

describe('Router Test', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        AppModule
      ]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    fixture.ngZone.run(() => {
      router.initialNavigation();
    });
  });

  it('canary test', () => {
    expect(true).toBeTruthy();
  });

  it('should navigate to Home page', fakeAsync(() => {
    fixture.ngZone.run(() => {
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/welcome');
      });
    });
  }));

  it('should navigate to texas-lotto', fakeAsync(() => {
    fixture.ngZone.run(() => {
      router.navigate(['texas-lotto']).then(() => expect(location.path()).toBe('/texas-lotto'));
      tick();
    });
  }));
});
