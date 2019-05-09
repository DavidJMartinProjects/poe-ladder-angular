import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TopFiveDataModel } from '../models/top-five-data-model';


@Injectable({
  providedIn: 'root'
})
export class LadderService {
  model = new TopFiveDataModel();
  title = 'app';
  restItems: any;
  restItemsUrl = 'https://immense-headland-50105.herokuapp.com/top-ten/delve';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
          console.log(this.restItems.leagueHC);
          console.log(this.getHcLeagueDelveData());
          console.log(this.getScLeagueDelveData());          
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

  testHcLeagueDelveData() {
    // return this.restItems.leagueHC.tableDataDelve;
    var results = new Map(this.restItems.leagueHC.tableDataDelve.map(i => [i.key, i.val]));

    return results;
  }

  getHcLeagueDelveData() {
    return this.restItems.leagueHC.tableDataDelve;
  }

  getScLeagueDelveData() {
    return this.restItems.leagueStd.tableDataDelve;
  }

  getHcSsfLeagueDelveData() {
    return this.restItems.leagueHCSSF.tableDataDelve;
  }

  getScSsfLeagueDelveData() {
    return this.restItems.leagueSSF.tableDataDelve;
  }

  getHcLeagueRaceTo100Data() {
    return this.restItems.leagueHC.tableDataRaceTo100;
  }

  getScLeagueRaceTo100Data() {
    return this.restItems.leagueStd.tableDataRaceTo100;
  }

  getHcSsfLeagueRaceTo100Data() {
    return this.restItems.leagueHCSSF.tableDataRaceTo100;
  }

  getScSsfLeagueRaceTo100Data() {
    return this.restItems.leagueSSF.tableDataRaceTo100;
  }

  getHcLeagueUberLabTopTenData() {
    return this.restItems.leagueHC.tableDataUberLabTopTen;
  }

  getScLeagueUberLabTopTenData() {
    return this.restItems.leagueStd.tableDataUberLabTopTen;
  }

  getHcSsfLeagueUberLabTopTenData() {
    return this.restItems.leagueHCSSF.tableDataUberLabTopTen;
  }

  getScSsfLeagueUberLabTopTenData() {
    return this.restItems.leagueSSF.tableDataUberLabTopTen;
  }
  
}
