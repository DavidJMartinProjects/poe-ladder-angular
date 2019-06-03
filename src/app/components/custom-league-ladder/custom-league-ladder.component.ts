import { TableColumnModel } from './../../models/TableColumnModel';
import { ActivatedRoute } from "@angular/router";
import { Component, ChangeDetectorRef, OnDestroy} from "@angular/core";
import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { LeaderboardModel } from 'src/app/models/LeaderboardModel';

declare var $;

@Component({
  selector: 'app-custom-league-ladder',
  templateUrl: './custom-league-ladder.component.html',
  styleUrls: ['./custom-league-ladder.component.css']

})

export class CustomLeagueLadderComponent implements OnDestroy{
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.interval = null;
  }

  league: string;
  leaderboard: string;
  subscription: any;
  tableColumnSubscription: any;
  leaderboardModels = new Array<LeaderboardModel>();
  tableColumns = new Array<TableColumnModel>();
  displayTable: boolean = false;
  leaderboardService: LeaderboardService;
  interval:any;
  changeDetectorRef: ChangeDetectorRef;
  count = 1;

  now = new Date();

  dtOptions: DataTables.Settings = {
  };

  constructor(
    activatedRoute: ActivatedRoute,
    leaderboardService: LeaderboardService,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.league = activatedRoute.snapshot.paramMap.get("leagueName");
    console.log("leagueName : " + this.league);
    this.leaderboardService = leaderboardService;
    this.changeDetectorRef = changeDetectorRef;
  }

  ngOnInit() {
    // this.tableColumnSubscription = this.leaderboardService
    // .getLeaderboardTableColumns("Race")
    // .subscribe(response => {
    //   this.tableColumns = response.map(item => {
    //     return new TableColumnModel(
    //       item.column
    //     );
    //   });
    // });

    this.subscription = this.leaderboardService
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
          item.time,
          item.experience,
          item.progress,
          item.online,
          item.dead
        );
      });

    });

    this.refreshData();
    this.interval = setInterval(() => {
        this.refreshData();
    }, 10000);
  }

  refreshData(){
    this.now = new Date();
    console.log("refreshData() called@ : "+this.now);
    this.subscription = this.leaderboardService
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
          item.time,
          item.experience,
          item.progress,
          item.online,
          item.dead
        );
      });
      this.changeDetectorRef.detectChanges();

      this.displayTable = true;
      this.dtOptions = {
        searching: true, // Search Box will Be Disabled
        ordering: true, // Ordering (Sorting on Each Column)will Be Disabled
        info: false, // Will show "1 to n of n entries" Text at bottom
        lengthChange: false, // Will Disabled Record number per page
        paging: false,
        columnDefs: [ {
          targets: 3,
          orderable: false
          } ]
      };

    });
  }

}

