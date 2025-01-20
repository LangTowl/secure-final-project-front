import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DesktopManagerComponent} from './desktop-manager/desktop-manager.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DesktopManagerComponent
  ],
  exports: [
    DesktopManagerComponent
  ]
})
export class DesktopViewsModule { }
