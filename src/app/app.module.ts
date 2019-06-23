import { LottoNumberDisplayComponent } from './lotto-number-display/lotto-number-display.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TexasLottoComponent } from './texas-lotto/texas-lotto.component';
import { MegaMillionLottoComponent } from './mega-million-lotto/mega-million-lotto.component';
import { TwoStepsLottoComponent } from './two-steps-lotto/two-steps-lotto.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LottoOptionsComponent } from './lotto-options/lotto-options.component';
import { AppRoutingModule } from './app.routing.module';
import { LottoNumberParentComponent } from './lotto-number-parent/lotto-number-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    MegaMillionLottoComponent,
    TexasLottoComponent,
    WelcomeComponent,
    LottoOptionsComponent,
    TwoStepsLottoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
