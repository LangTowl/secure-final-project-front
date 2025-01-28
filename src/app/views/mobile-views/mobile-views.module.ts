import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileManagerComponent} from './mobile-manager/mobile-manager.component';
import {AuthenticationPageComponent} from './authentication-page/authentication-page.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MobileManagerComponent,
    AuthenticationPageComponent
  ],
  exports: [
    MobileManagerComponent,
    AuthenticationPageComponent
  ]
})
export class MobileViewsModule { }
