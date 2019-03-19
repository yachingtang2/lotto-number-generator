import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TexasLottoComponent } from "./texas-lotto/texas-lotto.component";
import { MegaMillionLottoComponent } from "./mega-million-lotto/mega-million-lotto.component";
import { TwoStepLottoComponent } from "./two-step-lotto/two-step-lotto.component";

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'texas-lotto',
    component: TexasLottoComponent
  },
  {
    path: 'mega-million',
    component: MegaMillionLottoComponent
  },
  {
    path: 'two-steps',
    component: TwoStepLottoComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
