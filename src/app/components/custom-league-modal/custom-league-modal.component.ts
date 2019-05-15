import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-league-modal',
  templateUrl: './custom-league-modal.component.html',
  styleUrls: ['./custom-league-modal.component.css']
})

export class CustomLeagueModalComponent implements OnInit {
  ngOnInit(){
  }

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content);
  }


}
