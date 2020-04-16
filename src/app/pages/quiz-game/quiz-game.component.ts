import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.css']
})

export class QuizGameComponent implements OnInit {
  @ViewChildren('btn') buttons: QueryList<HTMLElement>;
  router: any;
  questionComp: any;
  arrayQuestions: any;
  lastIndex: number;
  clicked: boolean;

  // verde #3adc23 :: vermelho #dc2323 :: default #1d6a8e


  constructor(router: Router) {
    this.arrayQuestions = router.getCurrentNavigation().extras.state;
    this.chooseRandomQuestion(this.arrayQuestions);
  }

  ngOnInit(): void {
  }

  async verifyAnswer(answer: string){
    await this.delay();
    this.arrayQuestions.splice(this.lastIndex, 1);
    this.chooseRandomQuestion(this.arrayQuestions);
    if(this.arrayQuestions.length === 0){
      console.log("Quiz Completo");
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
  chooseRandomQuestion(questions: any){
    var questionsMax = questions.length;
    if(questionsMax === 0){
      return;
    }
    var random = Math.floor(Math.random() * questionsMax);
    this.lastIndex = random;
    this.questionComp = this.arrayQuestions[random];
    this.clicked = false;
    return;
  }

}
