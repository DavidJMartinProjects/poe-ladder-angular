import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { DelveLeaderboardModel } from "./../../models/DelveLeaderboardModel";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Subject } from 'rxjs';

declare var $;

@Component({
  selector: "app-ladder-group-delve",
  templateUrl: "./ladder-group-delve.component.html",
  styleUrls: ["./ladder-group-delve.component.css"]
})
export class LadderGroupDelveComponent implements OnInit {
  title = "app";
  delveLeaderboard = new Array<DelveLeaderboardModel>();
  softcore = new Array<DelveLeaderboardModel>();
  hardcore = new Array<DelveLeaderboardModel>();
  softcoreSsf = new Array<DelveLeaderboardModel>();
  hardcoreSsf = new Array<DelveLeaderboardModel>();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(leaderboardService: LeaderboardService) {
    leaderboardService.getDelveLeaderboards().subscribe(response => {
      this.delveLeaderboard = response.map(item => {
        return new DelveLeaderboardModel(
          item.rank,
          item.character,
          item.ascendancy,
          item.depth,
          item.league,
          item.leaderboard
        );
      });

      for (var i = 0; i < this.delveLeaderboard.length; i++) {
        if (
          this.delveLeaderboard[i].league.includes("Hardcore") && !this.delveLeaderboard[i].league.includes("SSF")) {
          this.hardcore.push(this.delveLeaderboard[i]);
        } else if (this.delveLeaderboard[i].league.includes("HC") && this.delveLeaderboard[i].league.includes("SSF")) {
          this.hardcoreSsf.push(this.delveLeaderboard[i]);
        } else if (!this.delveLeaderboard[i].league.includes("SSF")) {
          this.softcore.push(this.delveLeaderboard[i]);
        } else if (this.delveLeaderboard[i].league.includes("SSF")) {
          this.softcoreSsf.push(this.delveLeaderboard[i]);
        }
      }

      console.log(this.delveLeaderboard.length);
      console.log("hardcore : " + this.hardcore.length);
      console.log("hardcoreSsf : " + this.hardcoreSsf.length);
      console.log("softcore : " + this.softcore.length);
      console.log("softcoreSsf : " + this.softcoreSsf.length);
    });
  }

  ngOnInit() {}


  ngAfterViewInit() {
    $('datatable').DataTable({
      bPaginate: false,
      bLengthChange: false,
      bFilter: false,
      bInfo: false,
      bAutoWidth: false,
      searching: false
    });
  }
}
