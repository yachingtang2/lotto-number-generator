import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgModule } from "@angular/core";
import { TexasLottoComponent } from "./texas-lotto/texas-lotto.component";
import { MegaMillionLottoComponent } from "./mega-million-lotto/mega-million-lotto.component";
import { TwoStepsLottoComponent } from "./two-steps-lotto/two-steps-lotto.component";

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
    component: TwoStepsLottoComponent
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
