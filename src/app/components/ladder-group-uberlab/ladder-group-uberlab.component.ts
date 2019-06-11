import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaderboardModel } from 'src/app/models/LeaderboardModel';

declare var $;

@Component({
  selector: 'app-ladder-group-uberlab',
  templateUrl: './ladder-group-uberlab.component.html',
  styleUrls: ['./ladder-group-uberlab.component.css']
})
export class LadderGroupUberlabComponent implements OnInit {
  ngOnDestroy(){
    this.subscription.unsubscribe();
    clearInterval(this.interval);
  }
  subscription: any;
  league: string;

  uberlabLeaderboard = new Array<LeaderboardModel>();
  softcore = new Array<LeaderboardModel>();
  hardcore = new Array<LeaderboardModel>();
  softcoreSsf = new Array<LeaderboardModel>();
  hardcoreSsf = new Array<LeaderboardModel>();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  changeDetectorRef: ChangeDetectorRef;
  interval:any;

  constructor(private leaderboardService: LeaderboardService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.league = this.activatedRoute.snapshot.paramMap.get("leagueName");
    console.log("Loading UberLab ranks for " + this.league + " league.");
    this.leaderboardService = this.leaderboardService;
    this.changeDetectorRef = this.changeDetectorRef;

    this.refreshData();
    this.interval = setInterval(() => {
        this.refreshData();
    }, 600000); 
    
  }

  refreshData() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.league = params['league']; // (+) converts string 'id' to a number
      console.log("Loading UberLab ranks for " + this.league + " league.");

      this.uberlabLeaderboard = new Array<LeaderboardModel>();
      this.softcore = new Array<LeaderboardModel>();
      this.hardcore = new Array<LeaderboardModel>();
      this.softcoreSsf = new Array<LeaderboardModel>();
      this.hardcoreSsf = new Array<LeaderboardModel>();

      this.subscription = this.leaderboardService.getUberlabLeaderboards(this.league).subscribe(response => {
        this.uberlabLeaderboard = response.map(item => {
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
            item.dead
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
    this.router.navigate(['ladder/top-100/', league, leaderboard]);
    console.log('onClick ladder/top-100/'+ leaderboard +'/'+ league);
  }

}
