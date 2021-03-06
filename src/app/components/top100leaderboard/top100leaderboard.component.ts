import { TableColumnModel } from './../../models/TableColumnModel';
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { LeaderboardModel } from 'src/app/models/LeaderboardModel';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

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
  now = new Date();
  laddertype: string;

  constructor(
    activatedRoute: ActivatedRoute,
    leaderboardService: LeaderboardService
  ) {
    this.league = activatedRoute.snapshot.paramMap.get("league");
    this.leaderboard = activatedRoute.snapshot.paramMap.get("leaderboard");
    this.subscription = leaderboardService
      .getLeaderboardLadder(this.league, this.leaderboard)
      .subscribe(response => {
        this.delveLeaderboard = response.map(item => {
          return new LeaderboardModel(
            item.rank,
            item.rankDifference,
            item.account,
            item.character,
            item.ascendancy,
            item.league,
            item.leaderboard,
            item.level,
            item.depth,
            item.time,
            item.timeFormatted,
            item.experience,  
            item.experienceDifference,          
            item.progress,
            item.online,
            item.dead,
            item.timeStamp
          );
        });
        this.laddertype = this.delveLeaderboard[0].leaderboard;
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

  getXpphFontColor(experienceDifference) {   
    if(experienceDifference != null && experienceDifference != "" && experienceDifference!="undefined")  {
      if(experienceDifference.includes("-")) {
        return "red";
      } 
    }
    return "#90ee90";
  }

  isDead(isDead) {
    if(isDead != null && isDead != "" && isDead!="undefined")  {
      if(isDead.includes("true")) {
        return true;
      }
    }
  }

  deadCharRowStyling(isDead) {
    if(isDead != null && isDead != "" && isDead!="undefined")  {
      if(isDead.includes("true")) {
        return "deadCharRow";
      }
    }    
  }

  ngOnInit() {
  }

}
