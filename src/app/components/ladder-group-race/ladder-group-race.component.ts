import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { LeaderboardModel } from "../../models/LeaderboardModel";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router} from '@angular/router';
import { Subject, from } from 'rxjs';

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

  raceTo100LeaderboardModel = new Array<LeaderboardModel>();
  softcore = new Array<LeaderboardModel>();
  hardcore = new Array<LeaderboardModel>();
  softcoreSsf = new Array<LeaderboardModel>();
  hardcoreSsf = new Array<LeaderboardModel>();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private leaderboardService: LeaderboardService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.league = params['league']; // (+) converts string 'id' to a number
      console.log("ngOnInit() league : " + this.league);

      this.raceTo100LeaderboardModel = new Array<LeaderboardModel>();
      this.softcore = new Array<LeaderboardModel>();
      this.hardcore = new Array<LeaderboardModel>();
      this.softcoreSsf = new Array<LeaderboardModel>();
      this.hardcoreSsf = new Array<LeaderboardModel>();

      this.subscription = this.leaderboardService.getRaceTo100Leaderboards(this.league).subscribe(response => {
        this.raceTo100LeaderboardModel = response.map(item => {
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

  onClick(league: string, leaderboard: string) {
    this.router.navigate(['/top-100/', league, leaderboard]);
    console.log('onClick /top-100/'+ leaderboard +'/'+ league);
  }


}
