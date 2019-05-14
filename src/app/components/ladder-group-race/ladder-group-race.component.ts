import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { RaceTo100LeaderboardModel } from "../../models/RaceTo100LeaderboardModel";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs';

declare var $;

@Component({
  selector: 'app-ladder-group-race',
  templateUrl: './ladder-group-race.component.html',
  styleUrls: ['./ladder-group-race.component.css']
})

export class LadderGroupRaceComponent implements OnInit, OnDestroy {
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  subscription: any;
  league: string;

  raceTo100LeaderboardModel = new Array<RaceTo100LeaderboardModel>();
  softcore = new Array<RaceTo100LeaderboardModel>();
  hardcore = new Array<RaceTo100LeaderboardModel>();
  softcoreSsf = new Array<RaceTo100LeaderboardModel>();
  hardcoreSsf = new Array<RaceTo100LeaderboardModel>();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private leaderboardService: LeaderboardService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.league = params['league']; // (+) converts string 'id' to a number
      console.log("ngOnInit() league : " + this.league);

      this.raceTo100LeaderboardModel = new Array<RaceTo100LeaderboardModel>();
      this.softcore = new Array<RaceTo100LeaderboardModel>();
      this.hardcore = new Array<RaceTo100LeaderboardModel>();
      this.softcoreSsf = new Array<RaceTo100LeaderboardModel>();
      this.hardcoreSsf = new Array<RaceTo100LeaderboardModel>();

      this.subscription = this.leaderboardService.getRaceTo100Leaderboards(this.league).subscribe(response => {
        this.raceTo100LeaderboardModel = response.map(item => {
          return new RaceTo100LeaderboardModel(
            item.rank,
            item.character,
            item.ascendancy,
            item.level,
            item.league,
            item.leaderboard,
            item.account
          );
        });

        for (var i = 0; i < this.raceTo100LeaderboardModel.length; i++) {
          if (this.raceTo100LeaderboardModel[i].league.includes("HC") && !this.raceTo100LeaderboardModel[i].league.includes("SSF") || this.raceTo100LeaderboardModel[i].league.includes("Hardcore") && !this.raceTo100LeaderboardModel[i].league.includes("SSF")) {
            this.hardcore.push(this.raceTo100LeaderboardModel[i]);
          } else if (this.raceTo100LeaderboardModel[i].league.includes("HC") && this.raceTo100LeaderboardModel[i].league.includes("SSF") || this.raceTo100LeaderboardModel[i].league.includes("Hardcore") && this.raceTo100LeaderboardModel[i].league.includes("SSF")) {
            this.hardcoreSsf.push(this.raceTo100LeaderboardModel[i]);
          } else if (!this.raceTo100LeaderboardModel[i].league.includes("SSF") || this.raceTo100LeaderboardModel[i].league.includes("Standard") && !this.raceTo100LeaderboardModel[i].league.includes("SSF")) {
            this.softcore.push(this.raceTo100LeaderboardModel[i]);
          } else if (this.raceTo100LeaderboardModel[i].league.includes("SSF")) {
            this.softcoreSsf.push(this.raceTo100LeaderboardModel[i]);
          }
        }
      });
    });
  }


}
