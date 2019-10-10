import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-options-bar",
  templateUrl: "./options-bar.component.html",
  styleUrls: ["./options-bar.component.scss"]
})
export class OptionsBarComponent implements OnInit {
  @Output() save = new EventEmitter();
  @Output() load = new EventEmitter();
  @Output() openOptions = new EventEmitter();
  @Output() closeOptions = new EventEmitter();

  optionsOpen= false;;
  title = "Clicker";
  constructor() {}

  ngOnInit() {}

  saveGame() {
    this.save.emit();
  }
  loadGame() {
    this.load.emit();
  }
  options() {
    this.openOptions.emit();
    this.optionsOpen = true;
  }
  closeOptionsTab() {
    this.closeOptions.emit();
    this.optionsOpen = false;
    // options
  }
}
