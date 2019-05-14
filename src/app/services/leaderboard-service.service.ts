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
    const url = 'http://localhost:8080/leaderboards?leagueName='+leagueName+'&leaderboard=Top Delve Depths';
    console.log("service.getDelveLeaderboards() url call to : " + url);
    return this.http.get<DelveLeaderboardModel[]>(url);
  }

  public getRaceTo100Leaderboards(leagueName: string): Observable<RaceTo100LeaderboardModel[]> {
    const url = 'http://localhost:8080/leaderboards?leagueName='+leagueName+'&leaderboard=Top Race to 100';
    console.log("service.getRaceTo100Leaderboards() url call to : " + url);
    return this.http.get<RaceTo100LeaderboardModel[]>(url);
  }

  public getUberlabLeaderboards(leagueName: string): Observable<UberlabLeaderboardModel[]> {
    const url = 'http://localhost:8080/leaderboards?leagueName='+leagueName+'&leaderboard=Top UberLab Times';
    console.log("service.getUberlabLeaderboards() url call to : " + url);
    return this.http.get<UberlabLeaderboardModel[]>(url);
  }

  public getLeaderboardLadder(league: string, leaderboard: string): Observable<DelveLeaderboardModel[]> {
    const url = 'http://localhost:8080/leaderboard-ladder?leagueName='+league+'&leaderboard='+leaderboard;
    console.log('service recieved request for : '+url);
    return this.http.get<DelveLeaderboardModel[]>(url);
  }

  public getLeagueNames(): Observable<LeagueNameModel[]> {
    const url = 'http://localhost:8080/league-names';
    console.log("getLeagueNames() called");
    return this.http.get<LeagueNameModel[]>(url);
  }

}
