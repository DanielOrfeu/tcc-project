import { Component, OnInit } from "@angular/core";
import { EnumsModule } from "../../components/enums/enums.module";
import { NumbersEXP } from "../../constants/numbers.constant"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-in-game",
  templateUrl: "./in-game.component.html",
  styleUrls: ["./in-game.component.css"]
})
export class InGameComponent implements OnInit {
  router: any;
  resp: any;
  expressions: any;
  respValue = [];
  squareComplete = [false,false,false,false,false,false,false,false,false];
  continueCompare = true;
  
  constructor(
    router: Router,
    private toastr: ToastrService
  ) 
  {
    try {
      this.resp = router.getCurrentNavigation().extras.state[0];
      this.expressions = router.getCurrentNavigation().extras.state[1];
    }catch{
      router.navigateByUrl("/select")
    }
    this.createRandomValue();
    this.createValues();
    this.resp.forEach((element, i) => {
      this.clickRotation(i)
    });
  }

  ngOnInit(): void {

  }

  async clickRotation(square: number) {
    await this.rotate(square)
    .then( () => {
      this.compareSquare(this.resp[square], true);
    })
    .catch( () => {
      this.toastr.error('Erro inesperado. Voltando para a tela de seleção');
      this.router.navigateByUrl("/select")
    })
  }

  rotate = (square) => new Promise( (resolve, reject ) => {
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
      resolve()
    } catch {
      reject()
    }
  })
  
  createValues() {
    for(var i = 0; i < 9; i++){
      for(var j = 0; j < 4; j++){
        this.resp[i].values[j].value = this.respValue[j];
        this.resp[i].values[j].image = this.takeRandomTitle(this.respValue[j]);
      }
    }
    
  }

  async compareSquare(square: any, verifyAdjacents: boolean){
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
            await this.compareSquare(this.resp[1], false);
            await this.compareSquare(this.resp[3], false);
          }
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
            await this.compareSquare(this.resp[0], false);
            await this.compareSquare(this.resp[2], false);
            await this.compareSquare(this.resp[4], false);
          }
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
            await this.compareSquare(this.resp[1], false);
            await this.compareSquare(this.resp[5], false);
          }
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
            await this.compareSquare(this.resp[0], false);
            await this.compareSquare(this.resp[4], false);
            await this.compareSquare(this.resp[6], false);
          }
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
            await this.compareSquare(this.resp[1], false);
            await this.compareSquare(this.resp[3], false);
            await this.compareSquare(this.resp[5], false);
            await this.compareSquare(this.resp[7], false);
          }
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
            await this.compareSquare(this.resp[2], false);
            await this.compareSquare(this.resp[8], false);
            await this.compareSquare(this.resp[4], false);
          }
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
            await this.compareSquare(this.resp[3], false);
            await this.compareSquare(this.resp[7], false);
          }
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
            await this.compareSquare(this.resp[6], false);
            await this.compareSquare(this.resp[8], false);
            await this.compareSquare(this.resp[4], false);
          }
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
            await this.compareSquare(this.resp[5], false);
            await this.compareSquare(this.resp[7], false);
          }
          break;
        default:
          break;
      }
  
      if (this.checkGameCompleted()){
        this.toastr.info('Você concluiu a fase. Parabéns!');
        this.continueCompare = false
      }
    }
  }

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

}
