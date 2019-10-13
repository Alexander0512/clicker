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
  money: number = 0;
  workers: number = 0;
  grandmas: number = 0;
  save: Save;
  toSave = true;
  optionsOpen = false;
  submitted = false;
  mps: number = 0;
  constructor(private SaveGame: SaveGameService) {
    this.saveGameService = SaveGame;
  }
  ngOnInit() {
    localStorage.setItem("password", "12345678");
    this.loadGame();
    setInterval(() => {
      this.autoClicker();
    }, 1000);
    this.addMps();
  }
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    if (this.toSave) {
      this.saveGame();
    }
  }

  getMoney(number) {
    this.money++;
  }
  autoClicker() {
    this.money = this.money + this.workers + (this.grandmas * 4);
  }
  addMps() {
    this.mps = this.workers + (this.grandmas * 4);
    // this.mps = this.workers + (this.workers *5) ;
  }
  addWorker(workerCost) {
    if (workerCost < this.money) {
      this.money = this.money - workerCost;
      console.log(workerCost);
      this.workers++;
      this.addMps();
    }
  }
  addGrandma(grandmaCost) {
    if (grandmaCost <= this.money) {
      this.money = this.money - grandmaCost;
      console.log(this.money);
      this.grandmas++;
      this.addMps();
    }
  }
  deleteWorkers() {
    this.workers = 0;
  }
  deleteSave() {
    this.saveGameService.deleteSave();
    this.toSave = false;
  }
  saveGame() {
    this.save = {
      money: this.money,
      workers: this.workers,
      grandmas: this.grandmas
    };
    console.log(this.save);
    this.saveGameService.saveGame(this.save);
  }

  loadGame() {
    this.save = this.saveGameService.loadGame();
    if (this.save !== null) {
      if (this.save.money !== null || this.save.money !== undefined) {
        this.money = this.save.money;
      }
      if (this.save.workers !== undefined) {
        this.workers = this.save.workers;
      }
      if (this.save.grandmas !== undefined) {
        this.grandmas = this.save.grandmas;
      }
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
