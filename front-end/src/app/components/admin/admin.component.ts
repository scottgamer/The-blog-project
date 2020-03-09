import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  showModal = false;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  onDisableUser() {
    this.showModal = true;
    this.modalService.setStatus(this.showModal);
  }
}
