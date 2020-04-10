import { Component, OnInit } from "@angular/core";
import { EnumsModule } from "../../components/enums/enums.module";
import { NumbersEXP } from "../../constants/numbers.constant"
import { Router } from '@angular/router';

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
  
  constructor(router: Router) {
    this.resp = router.getCurrentNavigation().extras.state[0];
    this.expressions = router.getCurrentNavigation().extras.state[1];
    this.createRandomValue();
    this.createValues();
  }

  ngOnInit(): void {
    
  }

  clickRotation(square: number) {
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

    console.log(this.resp[square])

    //this.compareSquare(square);
  }

  createValues() {
    for(var i = 0; i < 9; i++){
      for(var j = 0; j < 4; j++){
        this.resp[i].values[j].value = this.respValue[j];
        console.log("resp: ",this.respValue[j]);
        console.log("title: ",this.takeRandomTitle(this.respValue[j]));
        this.resp[i].values[j].image = this.takeRandomTitle(this.respValue[j]);
      }
    }
    
  }

  // compareSquare(square: string){
  //   switch (square) {
  //     case "one":
  //       if(this.right["one"].value === this.left["two"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.bottom["one"].value === this.top["four"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       break;
      
  //     case "two":
  //       if(this.right["one"].value === this.left["two"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.right["two"].value === this.left["three"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.bottom["two"].value === this.top["five"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       break;

  //     case "three":
  //       if(this.right["two"].value === this.left["three"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.bottom["three"].value === this.top["six"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       break;
      
  //     case "four":
  //       if(this.bottom["one"].value === this.top["four"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.right["four"].value === this.left["five"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.bottom["four"].value === this.top["seven"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       break;

  //     case "five":
  //       if(this.bottom["two"].value === this.top["five"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.right["four"].value === this.left["five"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.right["five"].value === this.left["six"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.bottom["five"].value === this.top["eight"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       break;
      
  //     case "six":
  //       if(this.bottom["three"].value === this.top["six"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.right["five"].value === this.left["six"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.bottom["six"].value === this.top["nine"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       break;

  //     case "seven":
  //       if(this.bottom["four"].value === this.top["seven"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.right["seven"].value === this.left["eight"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       break;

  //     case "eight":
  //       if(this.bottom["five"].value === this.top["eight"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.right["seven"].value === this.left["eight"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.right["eight"].value === this.left["nine"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       break;

  //     case "nine":
  //       if(this.bottom["six"].value === this.top["nine"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       if(this.right["eight"].value === this.left["nine"].value){
  //         alert("parabéns você uniu os quadrados");
  //       }
  //       break;
    
  //     default:
  //       break;
  //   }
  // }

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

    console.log("random: ", random)
    return this.expressions[valueString][random];
  }

}
