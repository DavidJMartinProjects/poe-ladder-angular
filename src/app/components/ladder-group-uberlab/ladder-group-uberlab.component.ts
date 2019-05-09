import { Component, OnInit, ViewChild } from '@angular/core';

declare var $;

@Component({
  selector: 'app-ladder-group-uberlab',
  templateUrl: './ladder-group-uberlab.component.html',
  styleUrls: ['./ladder-group-uberlab.component.css']
})
export class LadderGroupUberlabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.table').DataTable();
  }

}
