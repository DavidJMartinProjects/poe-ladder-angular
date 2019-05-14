import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { UberlabLeaderboardModel } from "../../models/UberlabLeaderboardModel";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

declare var $;

@Component({
  selector: 'app-ladder-group-uberlab',
  templateUrl: './ladder-group-uberlab.component.html',
  styleUrls: ['./ladder-group-uberlab.component.css']
})
export class LadderGroupUberlabComponent implements OnInit {
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  subscription: any;
  league: string;

  uberlabLeaderboard = new Array<UberlabLeaderboardModel>();
  softcore = new Array<UberlabLeaderboardModel>();
  hardcore = new Array<UberlabLeaderboardModel>();
  softcoreSsf = new Array<UberlabLeaderboardModel>();
  hardcoreSsf = new Array<UberlabLeaderboardModel>();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private leaderboardService: LeaderboardService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.league = params['league']; // (+) converts string 'id' to a number
      console.log("ngOnInit() league : " + this.league);

      this.uberlabLeaderboard = new Array<UberlabLeaderboardModel>();
      this.softcore = new Array<UberlabLeaderboardModel>();
      this.hardcore = new Array<UberlabLeaderboardModel>();
      this.softcoreSsf = new Array<UberlabLeaderboardModel>();
      this.hardcoreSsf = new Array<UberlabLeaderboardModel>();

      this.subscription = this.leaderboardService.getUberlabLeaderboards(this.league).subscribe(response => {
        this.uberlabLeaderboard = response.map(item => {
          return new UberlabLeaderboardModel(
            item.rank,
            item.character,
            item.ascendancy,
            item.time,
            item.league,
            item.leaderboard,
            item.account
          );
        });

        console.log("uberlabLeaderboard : number of results returned : " + this.uberlabLeaderboard.length)
        for (var i = 0; i < this.uberlabLeaderboard.length; i++) {
          if (this.uberlabLeaderboard[i].league.includes("HC") && !this.uberlabLeaderboard[i].league.includes("SSF") || this.uberlabLeaderboard[i].league.includes("Hardcore") && !this.uberlabLeaderboard[i].league.includes("SSF")) {
            this.hardcore.push(this.uberlabLeaderboard[i]);
          } else if (this.uberlabLeaderboard[i].league.includes("HC") && this.uberlabLeaderboard[i].league.includes("SSF") || this.uberlabLeaderboard[i].league.includes("Hardcore") && this.uberlabLeaderboard[i].league.includes("SSF")) {
            this.hardcoreSsf.push(this.uberlabLeaderboard[i]);
          } else if (!this.uberlabLeaderboard[i].league.includes("SSF") || this.uberlabLeaderboard[i].league.includes("Standard") && !this.uberlabLeaderboard[i].league.includes("SSF")) {
            this.softcore.push(this.uberlabLeaderboard[i]);
          } else if (this.uberlabLeaderboard[i].league.includes("SSF")) {
            this.softcoreSsf.push(this.uberlabLeaderboard[i]);
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
