import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    NavComponent,
  ]
})
export class SharedModule { }
