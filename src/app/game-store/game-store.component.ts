import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-game-store",
  templateUrl: "./game-store.component.html",
  styleUrls: ["./game-store.component.scss"]
})
export class GameStoreComponent implements OnInit {
  @Input() moneyCount;
  @Input() workerCount;
  @Input() grandmaCount;

  @Output() addWorker = new EventEmitter();
  @Output() addGrandma = new EventEmitter();

  localWorkerCount: number;
  localGrandmaCount: number;

  nextCostWorker: number;
  nextCostGrandma: number;
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.localWorkerCount = this.workerCount;
    this.localGrandmaCount = this.grandmaCount;

    this.nextCostWorker = Math.floor(10 * Math.pow(1.1, this.localWorkerCount));
    this.nextCostGrandma = Math.floor(100 * Math.pow(1.2, this.localGrandmaCount));
  }
  addAWorker() {
    var workerCost = Math.floor(10 * Math.pow(1.1, this.workerCount));
    if (this.moneyCount >= workerCost) {
      this.localWorkerCount = this.workerCount + 1;
    } else {
      this.toastr.error("Not enough money!", "Error");
    }
    this.nextCostWorker = Math.floor(10 * Math.pow(1.1, this.localWorkerCount));
    this.addWorker.emit(workerCost);
  }
  addAGrandma() {
    var grandmaCost = Math.floor(100 * Math.pow(1.2, this.workerCount));
    if (this.moneyCount >= grandmaCost) {
      this.localWorkerCount = this.grandmaCount + 1;
    } else {
      this.toastr.error("Not enough money!", "Error");
    }
    this.nextCostGrandma = Math.floor(10 * Math.pow(1.1, this.localWorkerCount));
    this.addGrandma.emit(grandmaCost);
  }
}
