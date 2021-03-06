import { TableColumnModel } from './../models/TableColumnModel';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeagueNameModel } from '../models/LeagueNameModel';
import { LeaderboardModel } from '../models/LeaderboardModel';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService{

  constructor(private http: HttpClient) { }

  API_HEROKU_URL = 'https://poe-ladder-db.herokuapp.com/';
  API_LOCALHOST_URL = 'http://localhost:8080/';
  API = this.API_HEROKU_URL;

  public getDelveLeaderboards(leagueName: string): Observable<LeaderboardModel[]> {
    const url = this.API + 'leaderboards?leagueName='+leagueName+'&leaderboard=Top Delve Depths';
    console.log("service.getDelveLeaderboards() url call to : " + url);
    return this.http.get<LeaderboardModel[]>(url);
  }

  public getRaceTo100Leaderboards(leagueName: string): Observable<LeaderboardModel[]> {
    const url = this.API + 'leaderboards?leagueName='+leagueName+'&leaderboard=Top Race to 100';
    console.log("service.getRaceTo100Leaderboards() url call to : " + url);
    return this.http.get<LeaderboardModel[]>(url);
  }

  public getUberlabLeaderboards(leagueName: string): Observable<LeaderboardModel[]> {
    const url = this.API + 'leaderboards?leagueName='+leagueName+'&leaderboard=Top UberLab Times';
    console.log("service.getUberlabLeaderboards() url call to : " + url);
    return this.http.get<LeaderboardModel[]>(url);

  }

  public getLeaderboardLadder(league: string, leaderboard: string): Observable<LeaderboardModel[]> {
    const url = this.API + 'leaderboard-ladder?leagueName='+league+'&leaderboard='+leaderboard;
    console.log('service recieved request for : '+url);
    return this.http.get<LeaderboardModel[]>(url);
  }

  public getLeagueNames(): Observable<LeagueNameModel[]> {
    const url = this.API + 'league-names';
    console.log("getLeagueNames() called");
    return this.http.get<LeagueNameModel[]>(url);
  }

  public getLeaderboardTableColumns(league: string) {
    console.log("getLeaderboardTableColumns() league : " + league);
    let url = "";
    if(league.includes("Delve")) {
      url = this.API + 'leaderboard-columns-delve';
    } else if(league.includes("UberLab")){
      url = this.API + 'leaderboard-columns-uberlab';
    } else {
      url = this.API + 'leaderboard-columns-raceto100';
    }
    console.log("getLeaderboardTableColumns() url : " + url);
    return this.http.get<TableColumnModel[]>(url);
  }

  public getCustomLeagueLeaderboard(customLeagueName: string): Observable<LeaderboardModel[]> {
    const url = this.API + 'custom-league?leagueName='+customLeagueName;
    console.log("service.getCustomLeagueLeaderboard() url call to : " + url);
    return this.http.get<LeaderboardModel[]>(url);
  }

}
