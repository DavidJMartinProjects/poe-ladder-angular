import { LeagueNameModel } from './../../models/LeagueNameModel';
import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-five-league-panel',
  templateUrl: './top-five-league-panel.component.html',
  styleUrls: ['./top-five-league-panel.component.css']
})
export class TopFiveLeaguePanelComponent implements OnInit {
  leagueNames = new Array<LeagueNameModel>();
  subscription: any;
  selectedLeague: any;
  radioSel:LeagueNameModel;
  radioSelected:string;
  radioSelectedString:string;


  constructor(private leaderboardService: LeaderboardService, private formsModule: FormsModule, private router: Router) {
    this.subscription = leaderboardService
      .getLeagueNames()
      .subscribe(response => {
        this.leagueNames = response.map(item => {
          return new LeagueNameModel(item.leagueName);
        });
        this.radioSelected = this.leagueNames[0].leagueName;
        this.getSelecteditem();
        this.router.navigate(['ladder/leaderboard-top-5-race/', this.radioSelected]);
      });
  }

  onClickRace(league: string) {
    this.router.navigate(['ladder/leaderboard-top-5-race/', league]);
    console.log('selectedLeague : '+ league);
  }

  onClickDelve(league: string) {
    this.router.navigate(['ladder/leaderboard-top-5-delve/', league]);
    console.log('selectedLeague : '+ league);
  }

  onClickUberlab( league: string) {
    this.router.navigate(['ladder/leaderboard-top-5-uberlab/', league]);
    console.log('selectedLeague : '+ league);
  }

  getSelecteditem(){
    this.radioSel = this.leagueNames.find(Item => Item.leagueName === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
    this.selectedLeague = this.radioSel;
  }

  onLeagueChange(entry) {
    this.getSelecteditem();
  }

  ngOnInit() {
    $('.table').DataTable();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}









