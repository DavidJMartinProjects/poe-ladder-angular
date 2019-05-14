import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { DelveLeaderboardModel } from "./../../models/DelveLeaderboardModel";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

declare var $;

@Component({
  selector: "app-ladder-group-delve",
  templateUrl: "./ladder-group-delve.component.html",
  styleUrls: ["./ladder-group-delve.component.css"]
})
export class LadderGroupDelveComponent implements OnInit, OnDestroy {
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  subscription: any;
  league: string;

  delveLeaderboard = new Array<DelveLeaderboardModel>();
  softcore = new Array<DelveLeaderboardModel>();
  hardcore = new Array<DelveLeaderboardModel>();
  softcoreSsf = new Array<DelveLeaderboardModel>();
  hardcoreSsf = new Array<DelveLeaderboardModel>();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private leaderboardService: LeaderboardService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.league = params['league']; // (+) converts string 'id' to a number
      console.log("ngOnInit() league : " + this.league);

      this.delveLeaderboard = new Array<DelveLeaderboardModel>();
      this.softcore = new Array<DelveLeaderboardModel>();
      this.hardcore = new Array<DelveLeaderboardModel>();
      this.softcoreSsf = new Array<DelveLeaderboardModel>();
      this.hardcoreSsf = new Array<DelveLeaderboardModel>();

      this.subscription = this.leaderboardService.getDelveLeaderboards(this.league).subscribe(response => {
        this.delveLeaderboard = response.map(item => {
          return new DelveLeaderboardModel(
            item.rank,
            item.character,
            item.ascendancy,
            item.depth,
            item.league,
            item.leaderboard,
            item.account
          );
        });

        for (var i = 0; i < this.delveLeaderboard.length; i++) {
          if (this.delveLeaderboard[i].league.includes("HC") && !this.delveLeaderboard[i].league.includes("SSF") || this.delveLeaderboard[i].league.includes("Hardcore") && !this.delveLeaderboard[i].league.includes("SSF")) {
            this.hardcore.push(this.delveLeaderboard[i]);
          } else if (this.delveLeaderboard[i].league.includes("HC") && this.delveLeaderboard[i].league.includes("SSF") || this.delveLeaderboard[i].league.includes("Hardcore") && this.delveLeaderboard[i].league.includes("SSF")) {
            this.hardcoreSsf.push(this.delveLeaderboard[i]);
          } else if (!this.delveLeaderboard[i].league.includes("SSF") || this.delveLeaderboard[i].league.includes("Standard") && !this.delveLeaderboard[i].league.includes("SSF")) {
            this.softcore.push(this.delveLeaderboard[i]);
          } else if (this.delveLeaderboard[i].league.includes("SSF")) {
            this.softcoreSsf.push(this.delveLeaderboard[i]);
          }
        }
    });
  });

  }
  onClick(league: string, leaderboard: string) {
    this.router.navigate(['/top-100/', league, leaderboard]);
    console.log('onClick /top-100/'+ leaderboard +'/'+ league);
  }

  // ngAfterViewInit() {
  //     $('datatable').DataTable({
  //     bPaginate: false,
  //     bLengthChange: true,
  //     bFilter: false,
  //     bInfo: false,
  //     bAutoWidth: false,
  //     searching: false
  //   });
  // }

}
