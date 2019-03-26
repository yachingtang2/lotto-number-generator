import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TexasLottoComponent } from './texas-lotto/texas-lotto.component';
import { MegaMillionLottoComponent } from './mega-million-lotto/mega-million-lotto.component';
import { TwoStepsLottoComponent } from './two-steps-lotto/two-steps-lotto.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LottoOptionsComponent } from './lotto-options/lotto-options.component';
import { AppRoutingModule } from './app.routing.module';
import { TwoStepsComponent } from './two-steps/two-steps.component';


@NgModule({
  declarations: [
    AppComponent,
    TexasLottoComponent,
    MegaMillionLottoComponent,
    TwoStepsLottoComponent,
    WelcomeComponent,
    LottoOptionsComponent,
    TwoStepsLottoComponent,
    TwoStepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
