import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DelveLeaderboardModel } from '../models/DelveLeaderboardModel';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService{

  constructor(private http: HttpClient) { }

  public getDelveLeaderboards(): Observable<DelveLeaderboardModel[]> {
    const url = 'http://localhost:8080/leaderboard-delve';
    return this.http.get<DelveLeaderboardModel[]>(url);
  }


}
