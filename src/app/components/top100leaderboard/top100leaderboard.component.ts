import { DelveLeaderboardModel } from "./../../models/DelveLeaderboardModel";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-top100leaderboard",
  templateUrl: "./top100leaderboard.component.html",
  styleUrls: ["./top100leaderboard.component.css"]
})
export class Top100leaderboardComponent implements OnInit {
  league: string;
  subscription: any;
  delveLeaderboard = new Array<DelveLeaderboardModel>();

  dtOptions: DataTables.Settings = {
    searching: true, // Search Box will Be Disabled
    ordering: true, // Ordering (Sorting on Each Column)will Be Disabled
    info: false, // Will show "1 to n of n entries" Text at bottom
    lengthChange: false, // Will Disabled Record number per page
    paging: false
  };

  constructor(
    activatedRoute: ActivatedRoute,
    leaderboardService: LeaderboardService
  ) {
    this.league = activatedRoute.snapshot.paramMap.get("league");
    console.log("league : " + this.league);

    this.subscription = leaderboardService
      .getDelveTop100Leaderboards(this.league)
      .subscribe(response => {
        this.delveLeaderboard = response.map(item => {
          return new DelveLeaderboardModel(
            item.rank,
            item.character,
            item.ascendancy,
            item.depth,
            item.league,
            item.leaderboard,
            item.account
          );
        });
      });
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
    console.log("no. of returned records : " + this.delveLeaderboard.length);
  }
}
