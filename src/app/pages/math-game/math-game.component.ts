import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { CongratulationsDialogComponent } from 'src/app/components/congratulations-dialog/congratulations-dialog.component';
import * as introJs from 'intro.js';


@Component({
  selector: "app-math-game",
  templateUrl: "./math-game.component.html",
  styleUrls: ["./math-game.component.css"]
})
export class MathGameComponent implements OnInit, OnDestroy {
  router: any;
  resp: any;
  expressions: any;
  respValue = [];
  squareComplete = [false,false,false,false,false,false,false,false,false];
  continueCompare = true;
  isHardLevel:boolean = false;
  clicks: number;
  introJs = introJs();

  constructor(
    router: Router,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) 
  {
    try {
      if (router.getCurrentNavigation().extras.state[2]){
        this.isHardLevel = true
      }
      this.resp = router.getCurrentNavigation().extras.state[0];
      this.expressions = router.getCurrentNavigation().extras.state[1];
    }catch{
      router.navigateByUrl("/select")
    }
    this.introJs.setOptions({ doneLabel : 'Fechar', nextLabel : 'Próximo', prevLabel : 'Anterior', skipLabel : 'Sair' })
    this.clicks = 0;
    this.createRandomValue();
    this.createValues();
    this.resp.forEach((element, i) => {
      this.clickRotation(i)
    });
  }

  ngOnInit(): void {
    this.startTimer()
  }

  ngOnDestroy():void {
    this.stopTimer()
  }

  getPosition(a: string){
    switch (a) {
      case "top":
        return "top"
        break;
      case "bottom":
        return "bottom"
        break;
      case "right":
        return "right"
        break;
      case "left":
        return "left"
        break;
      default:
        break;
    }
  }

  breakLine(strNum){
    return strNum.split(" ")
  }

  clickRotation(square: number) {
    this.clicks++;
    if ( !this.checkGameCompleted() ){
      this.rotate(square)
      .then( () => {
        this.compareSquare(this.resp[square], true);
      })
      .catch( () => {
        this.toastr.error('Erro inesperado. Voltando para a tela de seleção');
        this.router.navigateByUrl("/select")
      })
    } else {
      this.toastr.warning('Jogo já finalizado! Caso queira, inicie um novo jogo.');
    }
  }

  clickHelp(){
    this.introJs.start();
  }
  
  rotate = (square) => new Promise( (resolve, reject ) => {
    console.log("Rotate Init")
    console.log("Quadrado", square)
    console.log("Old Resp Square", this.resp[square])
    try {
      var oldTop = this.resp[square].values[0];
      var oldRight = this.resp[square].values[1];
      var oldBottom = this.resp[square].values[2];
      var oldLeft = this.resp[square].values[3];

      this.resp[square].values[1] = oldTop;
      this.resp[square].values[1].direction = "right";
      this.resp[square].values[2] = oldRight;
      this.resp[square].values[2].direction = "bottom";
      this.resp[square].values[3] = oldBottom;
      this.resp[square].values[3].direction = "left";
      this.resp[square].values[0] = oldLeft;
      this.resp[square].values[0].direction = "top";
      console.log("New Resp Square", this.resp[square])

      resolve()
    } catch {
      reject()
    }
  })
  
  test(a){
    console.log(a)
  }

  createValues() {
    for(var i = 0; i < 9; i++){
      for(var j = 0; j < 4; j++){
        this.resp[i].values[j].value = this.respValue[j];
        this.resp[i].values[j].image = this.takeRandomTitle(this.respValue[j]);
      }
    }
    
  }

  compareSquare = (square: any, verifyAdjacents: boolean) => new Promise( (resolve, reject ) => {
    if (this.continueCompare) {
      switch (square.position) {
        case "one":
          if(
            square.values[1].value === this.resp[1].values[3].value &&
            square.values[2].value === this.resp[3].values[0].value
          ){
            this.toastr.success('Você combinou os valores do quadrado 1 corretamente!');
            this.squareComplete[0] = true;
          }else{
            this.squareComplete[0] = false
          }
          if (verifyAdjacents){
            this.compareSquare(this.resp[1], false).then(() => [
              this.compareSquare(this.resp[3], false)               
            ])
          }
          resolve()
          break;
        case "two":
          if(
            square.values[3].value === this.resp[0].values[1].value &&
            square.values[2].value === this.resp[4].values[0].value &&
            square.values[1].value === this.resp[2].values[3].value 
          ){
            this.toastr.success('Você combinou os valores do quadrado 2 corretamente!');
            this.squareComplete[1] = true;
          }else{
            this.squareComplete[1] = false
          }
          if (verifyAdjacents){
            this.compareSquare(this.resp[0], false).then(() => [
              this.compareSquare(this.resp[2], false).then(() => [
                this.compareSquare(this.resp[4], false)               
                ])
            ])
          }
          resolve()
          break;
        case "three":
          if(
            square.values[3].value === this.resp[1].values[1].value &&
            square.values[2].value === this.resp[5].values[0].value
          ){
            this.toastr.success('Você combinou os valores do quadrado 3 corretamente!');
            this.squareComplete[2] = true;
          }else{
            this.squareComplete[2] = false
          }
          if (verifyAdjacents){
            this.compareSquare(this.resp[1], false).then(() => [
              this.compareSquare(this.resp[5], false)               
            ])
          }
          resolve()
          break;
        case "four":
          if(
            square.values[0].value === this.resp[0].values[2].value &&
            square.values[1].value === this.resp[4].values[3].value &&
            square.values[2].value === this.resp[6].values[0].value 
          ){
            this.toastr.success('Você combinou os valores do quadrado 4 corretamente!');
            this.squareComplete[3] = true;
          }else{
            this.squareComplete[3] = false
          }
          if (verifyAdjacents){
            this.compareSquare(this.resp[0], false).then(() => [
              this.compareSquare(this.resp[4], false).then(() => [
                this.compareSquare(this.resp[6], false)               
                ])
            ])
          }
          resolve()
          break;
        case "five":
          if(
            square.values[0].value === this.resp[1].values[2].value &&
            square.values[1].value === this.resp[5].values[3].value &&
            square.values[2].value === this.resp[7].values[0].value &&
            square.values[3].value === this.resp[3].values[1].value
          ){
            this.toastr.success('Você combinou os valores do quadrado 5 corretamente!');
            this.squareComplete[4] = true;
          }else{
            this.squareComplete[4] = false
          }
          if (verifyAdjacents){
            this.compareSquare(this.resp[1], false).then(() => [
              this.compareSquare(this.resp[3], false).then(() => [
                this.compareSquare(this.resp[5], false).then(() => [
                  this.compareSquare(this.resp[7], false)               
                  ])
              ])
            ])
          }
          resolve()
          break;
        case "six":
          if(
            square.values[0].value === this.resp[2].values[2].value &&
            square.values[2].value === this.resp[8].values[0].value &&
            square.values[3].value === this.resp[4].values[1].value 
          ){
            this.toastr.success('Você combinou os valores do quadrado 6 corretamente!');
            this.squareComplete[5] = true;
          }else{
            this.squareComplete[5] = false
          }
          if (verifyAdjacents){
            this.compareSquare(this.resp[2], false).then(() => [
              this.compareSquare(this.resp[8], false).then(() => [
                this.compareSquare(this.resp[4], false)               
                ])
            ])
          }
          resolve()
          break;
        case "seven":
          if(
            square.values[0].value === this.resp[3].values[2].value &&
            square.values[1].value === this.resp[7].values[3].value
          ){
            this.toastr.success('Você combinou os valores do quadrado 7 corretamente!');
            this.squareComplete[6] = true;
          }else{
            this.squareComplete[6] = false
          }
          if (verifyAdjacents){
            this.compareSquare(this.resp[3], false).then(() => [
              this.compareSquare(this.resp[7], false)               
            ])
          }
          resolve()
          break;
        case "eight":
          if(
            square.values[0].value === this.resp[4].values[2].value &&
            square.values[1].value === this.resp[8].values[3].value &&
            square.values[3].value === this.resp[6].values[1].value
          ){
            this.toastr.success('Você combinou os valores do quadrado 8 corretamente!');
            this.squareComplete[7] = true;
          }else{
            this.squareComplete[7] = false
          }
          if (verifyAdjacents){
            this.compareSquare(this.resp[6], false).then(() => [
              this.compareSquare(this.resp[8], false).then(() => [
                this.compareSquare(this.resp[4], false)               
                ])
            ])
          }
          resolve()
          break;
        case "nine":
          if(
            square.values[0].value === this.resp[5].values[2].value &&
            square.values[3].value === this.resp[7].values[1].value
          ){
            this.toastr.success('Você combinou os valores do quadrado 9 corretamente!');
            this.squareComplete[8] = true;
          }else{
            this.squareComplete[8] = false
          }
          if (verifyAdjacents){
            this.compareSquare(this.resp[5], false).then(() => [
              this.compareSquare(this.resp[7], false)               
            ])
          }
          resolve()
          break;
        default:
          resolve()
          break;
      }
  
      if (this.checkGameCompleted()){
        this.continueCompare = false
        this.stopTimer();
        const dialogRef = this.dialog.open(CongratulationsDialogComponent, {
          disableClose: true,
          data: { 
            clicksRotation: (this.clicks - 9), 
            timePlayed: `${this.hourOut} horas, ${this.minOut} minutos, ${this.secOut} segundos e ${this.miliSecOut} milisegundos `, 
            gameMode: "math" 
          }
        });
      }
    }
  })

  checkGameCompleted(){
    let a = this.squareComplete.filter( square => {
      return square === true;
    })
    return a.length === 9 ? true : false
  }

  createRandomValue(){
    while (this.respValue.length < 4) {
      var random = Math.floor(Math.random() * 10);

      if (this.respValue.indexOf(random) == -1)
      this.respValue.push(random);
    }

  }

  takeRandomTitle(value:number): string{
    var valueString = value.toString();
    var enumMax = this.expressions[valueString].length;
    var random = Math.floor(Math.random() * enumMax);
    return this.expressions[valueString][random];
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

  stopwatch;

  startTimer(){
    this.stopwatch = setInterval(() => {
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
    
    },10);
  }

  
  checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  stopTimer(){
    clearInterval(this.stopwatch)
  }

}
