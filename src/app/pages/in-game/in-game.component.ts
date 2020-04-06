import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-in-game",
  templateUrl: "./in-game.component.html",
  styleUrls: ["./in-game.component.css"]
})
export class InGameComponent implements OnInit {
  top = {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: "",
      nine: "",
    }
  right = {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: "",
      nine: "",
    }
  bottom = {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: "",
      nine: "",
    }
  left = {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: "",
      nine: "",
    }
  respValue = [];

  constructor() {
    this.createRandomValue();
    this.createValues();
  }

  ngOnInit(): void {
    
  }

  clickRotation(square: string) {
    var oldTop = this.top[square];
    var oldRight = this.right[square];
    var oldBottom = this.bottom[square];
    var oldLeft = this.left[square];

    this.right[square] = oldTop;
    this.bottom[square] = oldRight;
    this.left[square] = oldBottom;
    this.top[square] = oldLeft;

    this.compareSquare(square);
  }

  createValues() {
    this.top = {
      one: this.respValue[0],
      two: this.respValue[0],
      three: this.respValue[0],
      four: this.respValue[0],
      five: this.respValue[0],
      six: this.respValue[0],
      seven: this.respValue[0],
      eight: this.respValue[0],
      nine: this.respValue[0],
    };
    this.right = {
      one: this.respValue[1],
      two: this.respValue[1],
      three: this.respValue[1],
      four: this.respValue[1],
      five: this.respValue[1],
      six: this.respValue[1],
      seven: this.respValue[1],
      eight: this.respValue[1],
      nine: this.respValue[1],
    };
    this.bottom = {
      one: this.respValue[2],
      two: this.respValue[2],
      three: this.respValue[2],
      four: this.respValue[2],
      five: this.respValue[2],
      six: this.respValue[2],
      seven: this.respValue[2],
      eight: this.respValue[2],
      nine: this.respValue[2],
    };
    this.left = {
      one: this.respValue[3],
      two: this.respValue[3],
      three: this.respValue[3],
      four: this.respValue[3],
      five: this.respValue[3],
      six: this.respValue[3],
      seven: this.respValue[3],
      eight: this.respValue[3],
      nine: this.respValue[3],
    };
  }

  compareSquare(square: string){
    switch (square) {
      case "one":
        if(this.right["one"] === this.left["two"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["one"] === this.top["four"]){
          alert("parabéns você uniu os quadrados");
        }
        break;
      
      case "two":
        if(this.right["one"] === this.left["two"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["two"] === this.left["three"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["two"] === this.top["five"]){
          alert("parabéns você uniu os quadrados");
        }
        break;

      case "three":
        if(this.right["two"] === this.left["three"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["three"] === this.top["six"]){
          alert("parabéns você uniu os quadrados");
        }
        break;
      
      case "four":
        if(this.bottom["one"] === this.top["four"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["four"] === this.left["five"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["four"] === this.top["seven"]){
          alert("parabéns você uniu os quadrados");
        }
        break;

      case "five":
        if(this.bottom["two"] === this.top["five"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["four"] === this.left["five"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["five"] === this.left["six"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["five"] === this.top["eight"]){
          alert("parabéns você uniu os quadrados");
        }
        break;
      
      case "six":
        if(this.bottom["three"] === this.top["six"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["five"] === this.left["six"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["six"] === this.top["nine"]){
          alert("parabéns você uniu os quadrados");
        }
        break;

      case "seven":
        if(this.bottom["four"] === this.top["seven"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["seven"] === this.left["eight"]){
          alert("parabéns você uniu os quadrados");
        }
        break;

      case "eight":
        if(this.bottom["five"] === this.top["eight"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["seven"] === this.left["eight"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["eight"] === this.left["nine"]){
          alert("parabéns você uniu os quadrados");
        }
        break;

      case "nine":
        if(this.bottom["six"] === this.top["nine"]){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["eight"] === this.left["nine"]){
          alert("parabéns você uniu os quadrados");
        }
        break;
    
      default:
        break;
    }
  }

  createRandomValue(){

    while (this.respValue.length < 4) {
      var random = Math.floor(Math.random() * (10 + 0));

      if (this.respValue.indexOf(random) == -1)
      this.respValue.push(random);
    }
    console.log("respValue", this.respValue);
  }

}
