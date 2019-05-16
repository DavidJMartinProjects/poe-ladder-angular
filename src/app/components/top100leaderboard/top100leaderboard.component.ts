import { TableColumnModel } from './../../models/TableColumnModel';
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { LeaderboardModel } from 'src/app/models/LeaderboardModel';

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
  delveLeaderboard = new Array<LeaderboardModel>();
  tableColumns = new Array<TableColumnModel>();
  displayTable: boolean = false;
  dtOptions: any;

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
          return new LeaderboardModel(
            item.rank,
            item.account,
            item.character,
            item.ascendancy,
            item.league,
            item.leaderboard,
            item.level,
            item.depth,
            item.time,
            item.experience,
            item.progress
          );
        });
        this.displayTable = true;
        this.dtOptions = {
          searching: true, // Search Box will Be Disabled
          ordering: true, // Ordering (Sorting on Each Column)will Be Disabled
          info: false, // Will show "1 to n of n entries" Text at bottom
          lengthChange: false, // Will Disabled Record number per page
          paging: false
        };
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
