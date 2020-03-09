import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  statusSubject = new BehaviorSubject<boolean>(false);
  constructor() {}

  setStatus(status: boolean) {
    this.statusSubject.next(status);
  }
}
