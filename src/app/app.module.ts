import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ConfigComponent } from './pages/config/config.component';
import { InGameComponent } from './pages/in-game/in-game.component';
import { SquareComponent } from './components/square/square.component';
import { SelectModeComponent } from './pages/select-mode/select-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConfigComponent,
    InGameComponent,
    SquareComponent,
    SelectModeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
