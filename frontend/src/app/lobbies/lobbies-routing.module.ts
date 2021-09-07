import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyListComponent } from './lobby-list/lobby-list.component';

const routes: Routes = [
  {
    path: '',
    component: LobbyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbiesRoutingModule { }
