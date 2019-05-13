import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { LadderGroupDelveComponent } from './components/ladder-group-delve/ladder-group-delve.component';
import { LadderGroupRaceComponent } from './components/ladder-group-race/ladder-group-race.component';
import { LadderGroupUberlabComponent } from './components/ladder-group-uberlab/ladder-group-uberlab.component';
import { Top100leaderboardComponent } from './components/top100leaderboard/top100leaderboard.component';

const routes: Routes = [
  {path: 'ladder-group-delve', component: LadderGroupDelveComponent},
  {path: 'ladder-group-race', component: LadderGroupRaceComponent},
  {path: 'ladder-group-uberlab', component: LadderGroupUberlabComponent},
  {path: 'top-100/delve/:league', component: Top100leaderboardComponent},
  {path: 'top-100/race-to-100/:league', component: Top100leaderboardComponent},
  {path: 'top-100/uberlab/:league', component: Top100leaderboardComponent}
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
