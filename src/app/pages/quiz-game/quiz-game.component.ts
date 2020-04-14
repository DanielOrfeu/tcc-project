import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.css']
})
export class QuizGameComponent implements OnInit {
  router: any;
  questionComp: any;
  arrayQuestions: any;
  passedIndex = [];

  constructor(router: Router) {
    this.arrayQuestions = router.getCurrentNavigation().extras.state
    this.chooseRandomQuestion(this.arrayQuestions)
  }

  ngOnInit(): void {
  }

  chooseRandomQuestion(questions: any){
    var questionsMax = questions.length;
    var random = Math.floor(Math.random() * questionsMax);
    this.passedIndex.push(random);
    this.questionComp = this.arrayQuestions[0];

  }

}
