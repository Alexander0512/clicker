import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-game-store",
  templateUrl: "./game-store.component.html",
  styleUrls: ["./game-store.component.scss"]
})
export class GameStoreComponent implements OnInit {
  @Input() moneyCount;
  @Input() workerCount;
  @Output() addWorker = new EventEmitter();
  localWorkerCount: number;
  nextCost: number;
  constructor() {}

  ngOnInit() {
    this.localWorkerCount = this.workerCount;
    this.nextCost = Math.floor(10 * Math.pow(1.1, this.localWorkerCount));
  }
  addAWorker() {
    console.log(this.moneyCount);

    var workerCost = Math.floor(10 * Math.pow(1.1, this.workerCount));
    if (this.moneyCount >= workerCost) {
      this.localWorkerCount = this.workerCount + 1;
    }
    // document.getElementById('worker').style.color = 'grey';
    // let workerTotal = workers;
    this.nextCost = Math.floor(10 * Math.pow(1.1, this.localWorkerCount));
    this.addWorker.emit(workerCost);
  }
}
