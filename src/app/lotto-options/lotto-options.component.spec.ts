import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoOptionsComponent } from './lotto-options.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { TexasLottoComponent } from '../texas-lotto/texas-lotto.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app.routing.module';
import { WelcomeComponent } from '../welcome/welcome.component';
import { MegaMillionLottoComponent } from '../mega-million-lotto/mega-million-lotto.component';
import { TwoStepsLottoComponent } from '../two-steps-lotto/two-steps-lotto.component';

describe('LottoOptionsComponent', () => {
  let component: LottoOptionsComponent;
  let fixture: ComponentFixture<LottoOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoOptionsComponent, MegaMillionLottoComponent, TexasLottoComponent, TwoStepsLottoComponent, WelcomeComponent ],
      imports: [ RouterTestingModule.withRoutes(routes) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Display page links', () => {
    it('should display Texas Lotto', () => {
      const element = fixture.nativeElement.querySelector('a.texas-lotto');
      expect(element.textContent).toEqual('Texas Lotto');
    });

    it('should display Mega Million', () => {
      const element = fixture.nativeElement.querySelector('a.mega-million');
      expect(element.textContent).toEqual('Mega Million');
    });

    it('should display Two Steps', () => {
      const element = fixture.nativeElement.querySelector('a.two-steps');
      expect(element.textContent).toEqual('Two Steps');
    });
  });

  describe('go to pages', () => {
    it('should go to Texas Lotto page', () => {
      const linkDebugElement = fixture.debugElement.query(By.css('a.texas-lotto'));
      const routerLinkInstance = linkDebugElement.injector.get(RouterLinkWithHref);
      expect(routerLinkInstance['commands']).toEqual(['texas-lotto']);
      expect(routerLinkInstance.href).toEqual('/texas-lotto');
    });

    it('should go to Mega Million page', () => {
      const linkDebugElement = fixture.debugElement.query(By.css('a.mega-million'));
      const routerLinkInstance = linkDebugElement.injector.get(RouterLinkWithHref);
      expect(routerLinkInstance['commands']).toEqual(['mega-million']);
      expect(routerLinkInstance.href).toEqual('/mega-million');
    });

    it('should go to Two Steps page', () => {
      const linkDebugElement = fixture.debugElement.query(By.css('a.two-steps'));
      const routerLinkWithHref = linkDebugElement.injector.get(RouterLinkWithHref);
      expect(routerLinkWithHref['commands']).toEqual(['two-steps']);
      expect(routerLinkWithHref.href).toEqual('/two-steps');
    });
  });
});
