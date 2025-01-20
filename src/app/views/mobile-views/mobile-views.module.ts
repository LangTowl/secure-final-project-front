import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileManagerComponent} from './mobile-manager/mobile-manager.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MobileManagerComponent
  ],
  exports: [
    MobileManagerComponent
  ]
})
export class MobileViewsModule { }
