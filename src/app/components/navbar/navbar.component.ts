import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { TableColumnModel } from 'src/app/models/TableColumnModel';
import { LeaderboardModel } from 'src/app/models/LeaderboardModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  leagueName: string;
  subscription: any;
  tableColumnSubscription: any;
  tableColumns = new Array<TableColumnModel>();
  leaderboardModels = new Array<LeaderboardModel>();

  dtOptions: DataTables.Settings = {
    searching: true, // Search Box will Be Disabled
    ordering: true, // Ordering (Sorting on Each Column)will Be Disabled
    info: false, // Will show "1 to n of n entries" Text at bottom
    lengthChange: false, // Will Disabled Record number per page
    paging: false
  };

  constructor(activatedRoute: ActivatedRoute, leaderboardService: LeaderboardService) {
    this.leagueName = activatedRoute.snapshot.paramMap.get("leagueName");
    console.log("custom leagueName : " + this.leagueName);

    this.subscription = leaderboardService
    .getCustomLeagueLeaderboard(this.leagueName)
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
    });

    // this.tableColumnSubscription = leaderboardService
    // .getLeaderboardTableColumns(this.leaderboard)
    // .subscribe(response => {
    //   this.tableColumns = response.map(item => {
    //     return new TableColumnModel(
    //       item.column
    //     );
    //   });
    // });

  }

  ngOnInit() {
  }

}
