import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Save } from "src/models/saveModel";

@Injectable({
  providedIn: "root"
})
export class SaveGameService {
  save: Save;
  constructor() {}
  saveGame(save) {
    localStorage.setItem("gameSave", JSON.stringify(save));
  }
  loadGame() {
    return JSON.parse(localStorage.getItem("gameSave"));
  }
  deleteSave() {
    localStorage.removeItem("gameSave");
  }
}
