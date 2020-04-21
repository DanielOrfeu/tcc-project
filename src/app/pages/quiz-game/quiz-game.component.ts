import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CongratulationsDialogComponent } from 'src/app/components/congratulations-dialog/congratulations-dialog.component';
import * as introJs from 'intro.js';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.css']
})

export class QuizGameComponent implements OnInit {
  @ViewChildren('btn') buttons: QueryList<HTMLElement>;
  questionComp: any;
  arrayQuestions: any;
  totalQuestions: number;
  lastIndex: number;
  clicked: boolean;
  answeredCorrect: number;
  introJs = introJs();


  constructor(public router: Router, public dialog: MatDialog) {
    try {
      this.arrayQuestions = router.getCurrentNavigation().extras.state;
      this.chooseRandomQuestion(this.arrayQuestions);
      this.totalQuestions = this.arrayQuestions.length
      this.answeredCorrect = 0;
    } catch{
      router.navigateByUrl("/select")
    }
    this.introJs.setOptions({ doneLabel : 'Fechar', nextLabel : 'Próximo', prevLabel : 'Anterior', skipLabel : 'Sair' })
  }

  ngOnInit(): void {
    this.startTimer()
  }

  ngOnDestroy(): void {
    this.stopTimer()
  }

  clickHelp(){
    this.introJs.start();
  }

  async verifyAnswer(answer: string) {
    this.paused = true;
    if(answer === this.questionComp.correctAnswer){
      this.answeredCorrect++;
    }
    await this.delay();
    this.paused = false;
    this.arrayQuestions.splice(this.lastIndex, 1);
    this.chooseRandomQuestion(this.arrayQuestions);
    if(this.arrayQuestions.length === 0){
      this.stopTimer()
      console.log("Quiz Completo");
      const dialogRef = this.dialog.open(CongratulationsDialogComponent, {
        disableClose: true,
        data: { 
          questions: `${this.answeredCorrect} de ${this.totalQuestions}`, 
          timePlayed: `${this.hourOut} horas, ${this.minOut} minutos, ${this.secOut} segundos e ${this.miliSecOut} milisegundos `, 
          gameMode: "quiz" }
      });

    }

  }

  private delay(): Promise<boolean> {
    return new Promise(resolve => {
      this.clicked = true;
      setTimeout(() => {
        resolve(true);
      }, 2000);
    })
  }
  chooseRandomQuestion(questions: any) {
    var questionsMax = questions.length;
    if (questionsMax === 0) {
      return;
    }
    var random = Math.floor(Math.random() * questionsMax);
    this.lastIndex = random;
    this.questionComp = this.arrayQuestions[random];
    this.clicked = false;
    return;
  }

  /*
 *
 * Timer
 * 
 */
  fullTimeMS = 0;

  milisec = 0;
  sec = 0;
  min = 0;
  hour = 0;

  miliSecOut = 0;
  secOut = 0;
  minOut = 0;
  hourOut = 0;
  
  paused: boolean = false;

  stopwatch;

  startTimer() {
    this.stopwatch = setInterval(() => {
      if (!this.paused){
        this.fullTimeMS = this.fullTimeMS++;
        this.miliSecOut = this.checkTime(this.milisec);
        this.secOut = this.checkTime(this.sec);
        this.minOut = this.checkTime(this.min);
        this.hourOut = this.checkTime(this.hour);
  
        this.milisec = ++this.milisec;
  
        if (this.milisec === 100) {
          this.milisec = 0;
          this.sec = ++this.sec;
        }
  
        if (this.sec == 60) {
          this.min = ++this.min;
          this.sec = 0;
        }
  
        if (this.min == 60) {
          this.min = 0;
          this.hour = ++this.hour;
        }
      }
    }, 10);
  }


  checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  stopTimer() {
    clearInterval(this.stopwatch)
  }

}