import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-custom-league-modal',
  templateUrl: './custom-league-modal.component.html',
  styleUrls: ['./custom-league-modal.component.css']
})

export class CustomLeagueModalComponent implements OnInit {
  leagueName: string;
  ngOnInit(){
  }

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content);
  }

  getCustomLeague(leagueName: string) {
    console.log("++++++++++"+leagueName+"+++++++++");
    this.modalService.dismissAll();
  }


}
