import { Component, OnInit, Input } from "@angular/core";
// import { User } from "src/models/user.model";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  // @Input() data: User;
  @Input() title: string;
  constructor() {}

  ngOnInit(): void {
    // console.log("modal", this.data);
  }
}
