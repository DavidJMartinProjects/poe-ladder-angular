import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DelveLeaderboardModel } from '../models/DelveLeaderboardModel';
import { RaceTo100LeaderboardModel } from '../models/RaceTo100LeaderboardModel';
import { UberlabLeaderboardModel } from '../models/UberlabLeaderboardModel';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService{

  constructor(private http: HttpClient) { }

  public getDelveLeaderboards(): Observable<DelveLeaderboardModel[]> {
    const url = 'http://localhost:8080/leaderboard-delve';
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
}
