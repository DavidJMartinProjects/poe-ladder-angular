import { LeagueNameModel } from './../../models/LeagueNameModel';
import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard-service.service';
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-top-five-league-panel',
  templateUrl: './top-five-league-panel.component.html',
  styleUrls: ['./top-five-league-panel.component.css']
})
export class TopFiveLeaguePanelComponent implements OnInit {
  leagueNames = new Array<LeagueNameModel>();
  subscription: any;
  selectedLeague: LeagueNameModel;

  constructor(leaderboardService: LeaderboardService) {
    this.subscription = leaderboardService
      .getLeagueNames()
      .subscribe(response => {
        this.leagueNames = response.map(item => {
          return new LeagueNameModel(item.leagueName);
        });
      });

      console.log("leagueNames : " + this.leagueNames);
  }


  ngOnInit() {
    $('.table').DataTable();
  }

  ngAfterViewInit() {
    $(".btn-group > .button").click(function(){
      $(".btn-group > .button").removeClass("active");
      console.log('clicked!');
      $(this).addClass("active");
    });
}



}





