import { Component, OnInit, ViewChild } from '@angular/core';

declare var $;

@Component({
  selector: 'app-ladder-group-delve',
  templateUrl: './ladder-group-delve.component.html',
  styleUrls: ['./ladder-group-delve.component.css']
})
export class LadderGroupDelveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.table').DataTable(
      {
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": false,
        "searching": false
      }
    );
  }


}
