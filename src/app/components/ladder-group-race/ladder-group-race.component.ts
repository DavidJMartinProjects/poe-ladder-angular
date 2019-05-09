import { Component, OnInit, ViewChild } from '@angular/core';

declare var $;

@Component({
  selector: 'app-ladder-group-race',
  templateUrl: './ladder-group-race.component.html',
  styleUrls: ['./ladder-group-race.component.css']
})
export class LadderGroupRaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.table').DataTable();
  }


}
