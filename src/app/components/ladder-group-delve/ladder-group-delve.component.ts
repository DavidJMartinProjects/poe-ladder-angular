import { LeagueNameModel } from './../../models/LeagueNameModel';
import { LeaderboardService } from "./../../services/leaderboard-service.service";
import { DelveLeaderboardModel } from "./../../models/DelveLeaderboardModel";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

declare var $;

@Component({
  selector: "app-ladder-group-delve",
  templateUrl: "./ladder-group-delve.component.html",
  styleUrls: ["./ladder-group-delve.component.css"]
})
export class LadderGroupDelveComponent implements OnInit {
  subscription: any;

  league: string;
  delveLeaderboard = new Array<DelveLeaderboardModel>();
  softcore = new Array<DelveLeaderboardModel>();
  hardcore = new Array<DelveLeaderboardModel>();
  softcoreSsf = new Array<DelveLeaderboardModel>();
  hardcoreSsf = new Array<DelveLeaderboardModel>();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private leaderboardService: LeaderboardService, private router: Router, activatedRoute: ActivatedRoute) {
    this.league = activatedRoute.snapshot.paramMap.get('league');
    console.log("passed in league parameter : " + this.league);

    this.subscription = leaderboardService.getDelveLeaderboards(this.league).subscribe(response => {
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
          this.delveLeaderboard[i].league.includes("HC") && !this.delveLeaderboard[i].league.includes("SSF") || this.delveLeaderboard[i].league.includes("Hardcore") && !this.delveLeaderboard[i].league.includes("SSF")) {
          this.hardcore.push(this.delveLeaderboard[i]);
        } else if (this.delveLeaderboard[i].league.includes("HC") && this.delveLeaderboard[i].league.includes("SSF")) {
          this.hardcoreSsf.push(this.delveLeaderboard[i]);
        } else if (!this.delveLeaderboard[i].league.includes("SSF") || this.delveLeaderboard[i].league.includes("Standard")) {
          this.softcore.push(this.delveLeaderboard[i]);
        } else if (this.delveLeaderboard[i].league.includes("SSF")) {
          this.softcoreSsf.push(this.delveLeaderboard[i]);
        }
      }
    });
  }

  ngOnInit() {}

  onClick(league: string, leaderboard: string) {
    this.router.navigate(['/top-100/delve/', league]);
    const theLeague = league.replace(/ /g, '').toLowerCase();
    const theLeaderboard= leaderboard.replace(/ /g, '').toLowerCase();
    console.log('/top-100/'+ theLeaderboard +'/'+ theLeague);
  }

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
