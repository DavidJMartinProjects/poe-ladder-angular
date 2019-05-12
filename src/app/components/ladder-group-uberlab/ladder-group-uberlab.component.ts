import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { UberlabLeaderboardModel } from "../../models/UberlabLeaderboardModel";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Subject } from 'rxjs';

declare var $;

@Component({
  selector: 'app-ladder-group-uberlab',
  templateUrl: './ladder-group-uberlab.component.html',
  styleUrls: ['./ladder-group-uberlab.component.css']
})
export class LadderGroupUberlabComponent implements OnInit {

  subscription: any;

  uberlabLeaderboardModel = new Array<UberlabLeaderboardModel>();
  softcore = new Array<UberlabLeaderboardModel>();
  hardcore = new Array<UberlabLeaderboardModel>();
  softcoreSsf = new Array<UberlabLeaderboardModel>();
  hardcoreSsf = new Array<UberlabLeaderboardModel>();
  leagueName: string;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(leaderboardService: LeaderboardService) {
    this.subscription = leaderboardService.getUberlabLeaderboards().subscribe(response => {
      this.uberlabLeaderboardModel = response.map(item => {
        return new UberlabLeaderboardModel(
          item.rank,
          item.character,
          item.ascendancy,
          item.time,
          item.league,
          item.leaderboard
        );
      });

      // for (var i = 0; i < this.uberlabLeaderboardModel.length; i++) {
      //   if (
      //     this.uberlabLeaderboardModel[i].league.includes("Hardcore") && !this.uberlabLeaderboardModel[i].league.includes("SSF")) {
      //     this.hardcore.push(this.uberlabLeaderboardModel[i]);
      //   } else if (this.uberlabLeaderboardModel[i].league.includes("HC") && this.uberlabLeaderboardModel[i].league.includes("SSF")) {
      //     this.hardcoreSsf.push(this.uberlabLeaderboardModel[i]);
      //   } else if (!this.uberlabLeaderboardModel[i].league.includes("SSF")) {
      //     this.softcore.push(this.uberlabLeaderboardModel[i]);
      //   } else if (this.uberlabLeaderboardModel[i].league.includes("SSF")) {
      //     this.softcoreSsf.push(this.uberlabLeaderboardModel[i]);
      //   }
      // }

      for (var i = 0; i < this.uberlabLeaderboardModel.length; i++) {
        if (
          this.uberlabLeaderboardModel[i].league.includes("HC") && !this.uberlabLeaderboardModel[i].league.includes("SSF") || this.uberlabLeaderboardModel[i].league.includes("Hardcore") && !this.uberlabLeaderboardModel[i].league.includes("SSF")) {
          this.hardcore.push(this.uberlabLeaderboardModel[i]);
        } else if (this.uberlabLeaderboardModel[i].league.includes("HC") && this.uberlabLeaderboardModel[i].league.includes("SSF")) {
          this.hardcoreSsf.push(this.uberlabLeaderboardModel[i]);
        } else if (!this.uberlabLeaderboardModel[i].league.includes("SSF")) {
          this.softcore.push(this.uberlabLeaderboardModel[i]);
        } else if (this.uberlabLeaderboardModel[i].league.includes("SSF")) {
          this.softcoreSsf.push(this.uberlabLeaderboardModel[i]);
        }
      }
      this.leagueName = this.uberlabLeaderboardModel[0].league;
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    $('datatable').DataTable({
      bPaginate: false,
      bLengthChange: true,
      bFilter: false,
      bInfo: false,
      bAutoWidth: false,
      searching: false
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
