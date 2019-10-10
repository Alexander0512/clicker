import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-click",
  templateUrl: "./click.component.html",
  styleUrls: ["./click.component.scss"]
})
export class ClickComponent implements OnInit {
  @Input() moneys: number;
  @Output() getMoney = new EventEmitter<number>();
  money: number = 0;
  constructor() {}

  ngOnInit() {}
  addMoney() {
    this.money++;
    this.getMoney.emit(this.money);
    // this.appComponent.console.log(this.money);
  }
  
}
