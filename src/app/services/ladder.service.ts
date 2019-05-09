import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { topFiveData} from '../models/top-five-data-model';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           


@Injectable({
  providedIn: 'root'
})
export class LadderService {  
  tableData: topFiveData[] = [];
  title = 'app';
  restItems: any;
  restItemsUrl = 'https://immense-headland-50105.herokuapp.com/top-ten/delve';

  constructor(private http: HttpClient) {     
  }

  ngOnInit() {
    this.getRestItems();        
  }

  // try using an observable or leave it the way it is and use ngFor on the table page
  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log('completed rest call successfully.');
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
    console.log("getHcLeagueDelveData : " +this.restItems)
    
    // var results = data.map(e => {new topFiveData(
    //   e.character, e.name, e.depth, e.id, e.leagueDifficulty, e.leagueName, e.rank, e.theClass, e.timeStamp)
    // })

    // results.array.forEach(element => {
    //   console.log(element);
    // });
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

  // getHcLeagueRaceTo100Data() {
  //   return this.restItems.leagueHC.tableDataRaceTo100;
  // }

  // getScLeagueRaceTo100Data() {
  //   return this.restItems.leagueStd.tableDataRaceTo100;
  // }

  // getHcSsfLeagueRaceTo100Data() {
  //   return this.restItems.leagueHCSSF.tableDataRaceTo100;
  // }

  // getScSsfLeagueRaceTo100Data() {
  //   return this.restItems.leagueSSF.tableDataRaceTo100;
  // }

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
