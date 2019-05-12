import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { RaceTo100LeaderboardModel } from "../../models/RaceTo100LeaderboardModel";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Subject } from 'rxjs';

declare var $;

@Component({
  selector: 'app-ladder-group-race',
  templateUrl: './ladder-group-race.component.html',
  styleUrls: ['./ladder-group-race.component.css']
})

export class LadderGroupRaceComponent implements OnInit {
  subscription: any;

  raceTo100LeaderboardModel = new Array<RaceTo100LeaderboardModel>();
  softcore = new Array<RaceTo100LeaderboardModel>();
  hardcore = new Array<RaceTo100LeaderboardModel>();
  softcoreSsf = new Array<RaceTo100LeaderboardModel>();
  hardcoreSsf = new Array<RaceTo100LeaderboardModel>();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(leaderboardService: LeaderboardService) {
    this.subscription = leaderboardService.getRaceTo100Leaderboards().subscribe(response => {
      this.raceTo100LeaderboardModel = response.map(item => {
        return new RaceTo100LeaderboardModel(
          item.rank,
          item.character,
          item.ascendancy,
          item.level,
          item.league,
          item.leaderboard
        );
      });

      for (var i = 0; i < this.raceTo100LeaderboardModel.length; i++) {
        if (
          this.raceTo100LeaderboardModel[i].league.includes("HC") && !this.raceTo100LeaderboardModel[i].league.includes("SSF") || this.raceTo100LeaderboardModel[i].league.includes("Hardcore") && !this.raceTo100LeaderboardModel[i].league.includes("SSF")) {
          this.hardcore.push(this.raceTo100LeaderboardModel[i]);
        } else if (this.raceTo100LeaderboardModel[i].league.includes("HC") && this.raceTo100LeaderboardModel[i].league.includes("SSF")) {
          this.hardcoreSsf.push(this.raceTo100LeaderboardModel[i]);
        } else if (!this.raceTo100LeaderboardModel[i].league.includes("SSF")) {
          this.softcore.push(this.raceTo100LeaderboardModel[i]);
        } else if (this.raceTo100LeaderboardModel[i].league.includes("SSF")) {
          this.softcoreSsf.push(this.raceTo100LeaderboardModel[i]);
        }
      }
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
