import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page/index-page.component';



@NgModule({
  declarations: [
    IndexPageComponent
  ],
  imports: [
    CommonModule,
    IndexModule
  ]
})
export class IndexModule { }
