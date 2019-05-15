import { TableColumnModel } from './../../models/TableColumnModel';
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { LeaderboardModel } from 'src/app/models/LeaderboardModel';

declare var $;

@Component({
  selector: 'app-custom-league-ladder',
  templateUrl: './custom-league-ladder.component.html',
  styleUrls: ['./custom-league-ladder.component.css']
})
export class CustomLeagueLadderComponent {

  league: string;
  leaderboard: string;
  subscription: any;
  tableColumnSubscription: any;
  leaderboardModels = new Array<LeaderboardModel>();
  tableColumns = new Array<TableColumnModel>();
  displayTable: boolean = false;

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
    this.league = activatedRoute.snapshot.paramMap.get("leagueName");

    console.log("leagueName : " + this.league);

    this.subscription = leaderboardService
      .getCustomLeagueLeaderboard(this.league)
      .subscribe(response => {
        this.leaderboardModels = response.map(item => {
          return new LeaderboardModel(
            item.rank,
            item.account,
            item.character,
            item.ascendancy,
            item.league,
            item.leaderboard,
            item.level,
            item.depth,
            item.time
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
    .getLeaderboardTableColumns("Race")
    .subscribe(response => {
      this.tableColumns = response.map(item => {
        return new TableColumnModel(
          item.column
        );
      });
    });




    $('datatable').DataTable();
  }


}

