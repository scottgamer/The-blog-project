import { Component, OnInit, Input } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.css"]
})
export class UserItemComponent implements OnInit {
  showModal = false;
  @Input() user: User;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  onDeleteUser() {
    this.showModal = true;
    this.modalService.setStatus(this.showModal);
  }
}
