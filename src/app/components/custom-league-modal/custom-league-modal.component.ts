import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-custom-league-modal",
  templateUrl: "./custom-league-modal.component.html",
  styleUrls: ["./custom-league-modal.component.css"]
})
export class CustomLeagueModalComponent implements OnInit {
  leagueName: string;
  ngOnInit() {}

  closeResult: string;

  constructor(private modalService: NgbModal, private router: Router) {}

  open(content) {
    this.modalService.open(content);
  }

  getCustomLeague(leagueName: string) {
    if (leagueName != null || leagueName != "null") {
      console.log("++++++++++" + leagueName + "+++++++++");
      this.router.navigate(["/custom-league/", leagueName]);
      console.log("onClick /custom-league/" + leagueName);
      this.modalService.dismissAll();
    }
  }
}
