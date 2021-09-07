import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyListComponent } from './lobby-list/lobby-list.component';
import { LobbiesRoutingModule } from './lobbies-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    LobbyListComponent
  ],
  imports: [
    CommonModule,
    LobbiesRoutingModule,
    MatCardModule
  ],
  exports: [
    LobbiesRoutingModule
  ]
})
export class LobbiesModule { }
