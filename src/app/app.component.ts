import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'angular-poe-ladder';

  API_HEROKU_URL = 'https://poe-ladder-db.herokuapp.com/';
  API = this.API_HEROKU_URL;

  interval:any;

  constructor(private router: Router,private http: HttpClient) {
    this.router.navigate(['/ladder/']);
  }

  ngOnInit() {    
    this.interval = setInterval(() => {
        this.preventbackendFromSleeping();
    }, 600000); 
  }

  preventbackendFromSleeping() {
    const url = this.API;
    console.log("service.getDelveLeaderboards() url call to : " + url);
    return this.http.get(url);
  }
}
