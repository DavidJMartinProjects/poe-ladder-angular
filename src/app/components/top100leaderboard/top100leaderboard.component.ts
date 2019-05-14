import { TableColumnModel } from './../../models/TableColumnModel';
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
  leaderboard: string;
  subscription: any;
  tableColumnSubscription: any;
  delveLeaderboard = new Array<DelveLeaderboardModel>();
  tableColumns = new Array<TableColumnModel>();

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
    this.leaderboard = activatedRoute.snapshot.paramMap.get("leaderboard");
    console.log("league : " + this.league);
    console.log("leaderboard : " + this.leaderboard);


    this.subscription = leaderboardService
      .getLeaderboardLadder(this.league, this.leaderboard)
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

    this.tableColumnSubscription = leaderboardService
    .getLeaderboardTableColumns(this.leaderboard)
    .subscribe(response => {
      this.tableColumns = response.map(item => {
        return new TableColumnModel(
          item.column
        );
      });
    });

  }

  ngOnInit() {
  }
}
