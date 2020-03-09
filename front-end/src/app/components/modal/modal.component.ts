import { Component, OnInit, Input } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  isOpen: boolean;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.statusSubject.subscribe(status => (this.isOpen = status));
    console.log("modal component isOpen", this.isOpen);
  }

  closeModal() {
    this.isOpen = false;
  }
}
