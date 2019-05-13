import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { LadderGroupDelveComponent } from './components/ladder-group-delve/ladder-group-delve.component';
import { LadderGroupRaceComponent } from './components/ladder-group-race/ladder-group-race.component';
import { LadderGroupUberlabComponent } from './components/ladder-group-uberlab/ladder-group-uberlab.component';
import { Top100leaderboardComponent } from './components/top100leaderboard/top100leaderboard.component';

const routes: Routes = [
  {path: 'leaderboard-top-5-delve/:league', component: LadderGroupDelveComponent},
  {path: 'leaderboard-top-5-race/:league', component: LadderGroupRaceComponent},
  {path: 'leaderboard-top-5-uberlab/:league', component: LadderGroupUberlabComponent},
  {path: 'top-100/:league/:leaderboard', component: Top100leaderboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LadderGroupDelveComponent,
  LadderGroupRaceComponent,
  LadderGroupUberlabComponent,
  Top100leaderboardComponent
];
