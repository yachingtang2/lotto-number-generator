import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TexasLottoComponent } from './texas-lotto/texas-lotto.component';
import { MegaMillionLottoComponent } from './mega-million-lotto/mega-million-lotto.component';
import { TwoStepLottoComponent } from './two-step-lotto/two-step-lotto.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LottoOptionsComponent } from './lotto-options/lotto-options.component';

@NgModule({
  declarations: [
    AppComponent,
    TexasLottoComponent,
    MegaMillionLottoComponent,
    TwoStepLottoComponent,
    WelcomeComponent,
    LottoOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
