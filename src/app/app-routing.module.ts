import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LadderGroupDelveComponent } from './components/ladder-group-delve/ladder-group-delve.component';
import { LadderGroupRaceComponent } from './components/ladder-group-race/ladder-group-race.component';
import { LadderGroupUberlabComponent } from './components/ladder-group-uberlab/ladder-group-uberlab.component';

const routes: Routes = [
  {path: 'ladder-group-delve', component: LadderGroupDelveComponent},
  {path: 'ladder-group-race', component: LadderGroupRaceComponent},
  {path: 'ladder-group-uberlab', component: LadderGroupUberlabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LadderGroupDelveComponent, 
  LadderGroupRaceComponent, 
  LadderGroupUberlabComponent
];
