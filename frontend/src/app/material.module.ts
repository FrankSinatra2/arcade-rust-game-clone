import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'; 


const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule
];


@NgModule({
  exports: [
    materialModules
  ],
  imports: [
    materialModules
  ]
})
export class MaterialModule { }
