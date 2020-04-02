import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ConfigComponent } from './pages/config/config.component';
import { InGameComponent } from './pages/in-game/in-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConfigComponent,
    InGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
