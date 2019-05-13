import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LadderGroupDelveComponent } from './components/ladder-group-delve/ladder-group-delve.component';
import { TopFiveLeaguePanelComponent } from './components/top-five-league-panel/top-five-league-panel.component';
import { LadderGroupRaceComponent } from './components/ladder-group-race/ladder-group-race.component';
import { LadderGroupUberlabComponent } from './components/ladder-group-uberlab/ladder-group-uberlab.component';
import { DataTablesModule } from 'angular-datatables';
import { Top100leaderboardComponent } from './components/top100leaderboard/top100leaderboard.component';
import { SelectLeagueButtonsComponent } from './components/select-league-buttons/select-league-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopFiveLeaguePanelComponent,
    routingComponents, LadderGroupDelveComponent, LadderGroupRaceComponent, LadderGroupUberlabComponent, Top100leaderboardComponent, SelectLeagueButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
