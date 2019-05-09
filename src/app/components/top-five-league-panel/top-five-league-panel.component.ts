import { Component, OnInit, ViewChild } from '@angular/core';

declare var $;

@Component({
  selector: 'app-top-five-league-panel',
  templateUrl: './top-five-league-panel.component.html',
  styleUrls: ['./top-five-league-panel.component.css']
})
export class TopFiveLeaguePanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.table').DataTable();
  }


}
