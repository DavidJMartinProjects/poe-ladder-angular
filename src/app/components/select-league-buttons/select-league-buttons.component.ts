import { LeagueNameModel } from "./../../models/LeagueNameModel";
import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-select-league-buttons",
  templateUrl: "./select-league-buttons.component.html",
  styleUrls: ["./select-league-buttons.component.css"]
})
export class SelectLeagueButtonsComponent implements OnInit {
  leagueNames = new Array<LeagueNameModel>();
  subscription: any;

  constructor(leaderboardService: LeaderboardService) {
    this.subscription = leaderboardService
      .getLeagueNames()
      .subscribe(response => {
        this.leagueNames = response.map(item => {
          return new LeagueNameModel(item.leagueName);
        });
      });
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
