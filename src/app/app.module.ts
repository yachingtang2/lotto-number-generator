import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TexasLottoComponent } from './texas-lotto/texas-lotto.component';
import { MegaMillionLottoComponent } from './mega-million-lotto/mega-million-lotto.component';

@NgModule({
  declarations: [
    AppComponent,
    TexasLottoComponent,
    MegaMillionLottoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
