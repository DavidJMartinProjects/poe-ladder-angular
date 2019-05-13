import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DelveLeaderboardModel } from '../models/DelveLeaderboardModel';
import { RaceTo100LeaderboardModel } from '../models/RaceTo100LeaderboardModel';
import { UberlabLeaderboardModel } from '../models/UberlabLeaderboardModel';
import { LeagueNameModel } from '../models/LeagueNameModel';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService{

  constructor(private http: HttpClient) { }

  public getDelveLeaderboards(leagueName: string): Observable<DelveLeaderboardModel[]> {
    const url = 'http://localhost:8080/leaderboard?leagueName='+leagueName+'&leaderboard=Top Delve Depths';
    console.log("service.getDelveLeaderboards() url call to : " + url);
    return this.http.get<DelveLeaderboardModel[]>(url);
  }

  public getRaceTo100Leaderboards(): Observable<RaceTo100LeaderboardModel[]> {
    const url = 'http://localhost:8080/leaderboard-raceto100';
    return this.http.get<RaceTo100LeaderboardModel[]>(url);
  }

  public getUberlabLeaderboards(): Observable<UberlabLeaderboardModel[]> {
    const url = 'http://localhost:8080/leaderboard-uberlab';
    return this.http.get<UberlabLeaderboardModel[]>(url);
  }

  getDelveTop100Leaderboards(league: string): Observable<DelveLeaderboardModel[]> {
    const url = 'http://localhost:8080/leaderboard-delve';
    console.log('service recieved request for : http://localhost:8080/leaderboard-delve/'+league);
    return this.http.get<DelveLeaderboardModel[]>(url);
  }

  public getLeagueNames(): Observable<LeagueNameModel[]> {
    const url = 'http://localhost:8080/league-names';
    console.log("getLeagueNames() called");
    return this.http.get<LeagueNameModel[]>(url);
  }

}
