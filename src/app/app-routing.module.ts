import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgModule } from "@angular/core";
import { TexasLottoComponent } from "./texas-lotto/texas-lotto.component";

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
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { TexasLottoComponent } from './texas-lotto/texas-lotto.component';
// import { WelcomeComponent } from './welcome/welcome.component';

// export const routes: Routes = [
//   {
//     path: 'welcome',
//     component: WelcomeComponent
//   },
//   {
//     path: 'texas-lotto',
//     component: TexasLottoComponent
//   },
//   {
//     path: '',
//     redirectTo: 'welcome',
//     pathMatch: 'full'
//   }
// ];

// @NgModule({
//   imports: [ RouterModule.forRoot(routes) ],
//   exports: [ RouterModule ]
// })
// export class AppRoutingModule { }
