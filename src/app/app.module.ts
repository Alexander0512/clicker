import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickComponent } from './click/click.component';
import { SaveGameService } from './save-game.service';
import { OptionsBarComponent } from './options-bar/options-bar.component';
import { OptionsScreenComponent } from './options-screen/options-screen.component';
import { GameStoreComponent } from './game-store/game-store.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
