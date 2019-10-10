import { Component, NgModule, OnInit, HostListener } from "@angular/core";
import { SaveGameService } from "./save-game.service";
import { Save } from "src/models/saveModel";
import { OptionsScreenComponent } from "./options-screen/options-screen.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "clicker";
  saveGameService: SaveGameService;
  optionsScreen: OptionsScreenComponent;
  money: number;
  workers: number = 0;
  save: Save;
  optionsOpen = false;

  constructor(private SaveGame: SaveGameService) {
    this.saveGameService = SaveGame;
  }
  ngOnInit() {
    this.loadGame();
    setInterval(() => {
      this.autoClicker(this.workers);
    }, 1000);
  }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    this.saveGame();
  }
  getMoney(number) {
    this.money++;
  }
  autoClicker(num) {
    this.money = this.money + num;
  }
  addWorker(workerCost) {
    if (workerCost < this.money) {
      this.money = this.money - workerCost;
      console.log(workerCost);
      this.workers++;
    }
  }

  saveGame() {
    this.save = {
      money: this.money,
      workers: this.workers
    };
    console.log(this.save);
    this.saveGameService.saveGame(this.save);
  }

  loadGame() {
    this.save = this.saveGameService.loadGame();
    if (this.save.money !== undefined) {
      this.money = this.save.money;
    }
    if (this.save.workers !== undefined) {
      this.workers = this.save.workers;
    }
    console.log(this.save);
  }

  openOptions() {
    this.optionsOpen = true;
    console.log(this.optionsOpen);
  }
  closeOptions() {
    this.optionsOpen = false;
  }
  // onKeyUp($event: { which: number; ctrlKey: any; preventDefault: () => void; }): void {
  //   let charCode = String.fromCharCode($event.which).toLowerCase();
  //    if ($event.ctrlKey) {
  //      console.log("test");
  //       $event.preventDefault();
  //       this.saveGame();
  //   }
  // }
}
