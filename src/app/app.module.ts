import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClickComponent } from "./click/click.component";
import { OptionsBarComponent } from "./options-bar/options-bar.component";
import { OptionsScreenComponent } from "./options-screen/options-screen.component";
import { GameStoreComponent } from "./game-store/game-store.component";
import { FormsModule } from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from "ngx-toastr";
@NgModule({
  declarations: [
    AppComponent,
    ClickComponent,
    OptionsBarComponent,
    OptionsScreenComponent,
    GameStoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
