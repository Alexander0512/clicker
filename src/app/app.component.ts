import { Component, NgModule, OnInit } from "@angular/core";
import { ClickComponent } from "./click/click.component";
import { ClickModule } from "./click/click.module";
import { SaveGameService } from "./save-game.service";
import { Save } from 'src/models/saveModel';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "clicker";
  saveGameService: SaveGameService;
  money: number;
  save: Save;

  constructor(private SaveGame: SaveGameService) {
    this.saveGameService = SaveGame;
  }
  ngOnInit() {
   this.loadGame();
  }
 
  getMoney(number) {
    this.money++;
    console.log(this.money);
  }
  saveGame() {
    this.save = {
      money: this.money
    };
    console.log(this.save);
    this.saveGameService.saveGame(this.save);
  }
  loadGame() {
    this.save = this.saveGameService.loadGame();
    if(this.save.money !== undefined) {this.money = this.save.money} 
    console.log(this.save);
    
  }
}
