import { Component, OnInit, ViewChild } from '@angular/core';
import { LadderService } from 'src/app/services/ladder.service';
import { topFiveData } from 'src/app/models/top-five-data-model';



declare var $;

@Component({
  selector: 'app-ladder-group-delve',
  templateUrl: './ladder-group-delve.component.html',
  styleUrls: ['./ladder-group-delve.component.css'],  
})
export class LadderGroupDelveComponent implements OnInit {

  constructor(private ladderService: LadderService) {    
    var data = []; // create arrays for each table and then use ngFor on the html to loop thru them and print the data
    data = ladderService.getHcLeagueDelveData();
    console.log(data);
  }

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
