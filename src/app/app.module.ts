import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickComponent } from './click/click.component';
import { SaveGameService } from './save-game.service';

@NgModule({
  declarations: [
    AppComponent,
    ClickComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
