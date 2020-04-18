import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ConfigComponent } from './pages/config/config.component';

import { SelectModeComponent } from './pages/select-mode/select-mode.component';
import { MathGameComponent } from './pages/math-game/math-game.component';
import { QuizGameComponent } from './pages/quiz-game/quiz-game.component';
import { DifficultyDialogComponent } from './components/difficulty-dialog/difficulty-dialog.component';
import { FormComponent } from './pages/form/form.component';
import { CongratulationsDialogComponent } from './components/congratulations-dialog/congratulations-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConfigComponent,
    SelectModeComponent,
    MathGameComponent,
    QuizGameComponent,
    DifficultyDialogComponent,
    FormComponent,
    CongratulationsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule
  ],
  entryComponents: [
    DifficultyDialogComponent,
    CongratulationsDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
