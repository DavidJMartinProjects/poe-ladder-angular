import { Component, OnInit } from '@angular/core';
import { LadderService } from './services/ladder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LadderService]

})
export class AppComponent implements OnInit {
  title = 'angular-poe-ladder';

  constructor(private ladderService: LadderService) { 
    ladderService.getRestItems();        
  }

  ngOnInit() {    
  }
}
