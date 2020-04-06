import { Component, OnInit } from "@angular/core";
import { EnumsModule } from "../../components/enums/enums.module";

@Component({
  selector: "app-in-game",
  templateUrl: "./in-game.component.html",
  styleUrls: ["./in-game.component.css"]
})
export class InGameComponent implements OnInit {
  top = {
      one: {title:"", value:""},
      two: {title:"", value:""},
      three: {title:"", value:""},
      four: {title:"", value:""},
      five: {title:"", value:""},
      six: {title:"", value:""},
      seven: {title:"", value:""},
      eight: {title:"", value:""},
      nine: {title:"", value:""}
    }
  right = {
      one: {title:"", value:""},
      two: {title:"", value:""},
      three: {title:"", value:""},
      four: {title:"", value:""},
      five: {title:"", value:""},
      six: {title:"", value:""},
      seven: {title:"", value:""},
      eight: {title:"", value:""},
      nine: {title:"", value:""},
    }
  bottom = {
      one: {title:"", value:""},
      two: {title:"", value:""},
      three: {title:"", value:""},
      four: {title:"", value:""},
      five: {title:"", value:""},
      six: {title:"", value:""},
      seven: {title:"", value:""},
      eight: {title:"", value:""},
      nine: {title:"", value:""},
    }
  left = {
      one: {title:"", value:""},
      two: {title:"", value:""},
      three: {title:"", value:""},
      four: {title:"", value:""},
      five: {title:"", value:""},
      six: {title:"", value:""},
      seven: {title:"", value:""},
      eight: {title:"", value:""},
      nine: {title:"", value:""},
    }
  respValue = [];
  respTitle = [];

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
      one: {title: "this.takeRandomTitle(this.respValue[0])",value:this.respValue[0]},
      two: {title: "this.takeRandomTitle(this.respValue[0])",value:this.respValue[0]},
      three: {title: "this.takeRandomTitle(this.respValue[0])",value:this.respValue[0]},
      four: {title: "this.takeRandomTitle(this.respValue[0])",value:this.respValue[0]},
      five: {title: "this.takeRandomTitle(this.respValue[0])",value:this.respValue[0]},
      six: {title: "this.takeRandomTitle(this.respValue[0])",value:this.respValue[0]},
      seven: {title: "this.takeRandomTitle(this.respValue[0])",value:this.respValue[0]},
      eight: {title: "this.takeRandomTitle(this.respValue[0])",value:this.respValue[0]},
      nine: {title: "this.takeRandomTitle(this.respValue[0])",value:this.respValue[0]},
    };
    this.right = {
      one: {title: "this.takeRandomTitle(this.respValue[1])",value:this.respValue[1]},
      two: {title: "this.takeRandomTitle(this.respValue[1])",value:this.respValue[1]},
      three: {title: "this.takeRandomTitle(this.respValue[1])",value:this.respValue[1]},
      four: {title: "this.takeRandomTitle(this.respValue[1])",value:this.respValue[1]},
      five: {title: "this.takeRandomTitle(this.respValue[1])",value:this.respValue[1]},
      six: {title: "this.takeRandomTitle(this.respValue[1])",value:this.respValue[1]},
      seven: {title: "this.takeRandomTitle(this.respValue[1])",value:this.respValue[1]},
      eight: {title: "this.takeRandomTitle(this.respValue[1])",value:this.respValue[1]},
      nine: {title: "this.takeRandomTitle(this.respValue[1])",value:this.respValue[1]},
    };
    this.bottom = {
      one: {title: "this.takeRandomTitle(this.respValue[2])",value:this.respValue[2]},
      two: {title: "this.takeRandomTitle(this.respValue[2])",value:this.respValue[2]},
      three: {title: "this.takeRandomTitle(this.respValue[2])",value:this.respValue[2]},
      four: {title: "this.takeRandomTitle(this.respValue[2])",value:this.respValue[2]},
      five: {title: "this.takeRandomTitle(this.respValue[2])",value:this.respValue[2]},
      six: {title: "this.takeRandomTitle(this.respValue[2])",value:this.respValue[2]},
      seven: {title: "this.takeRandomTitle(this.respValue[2])",value:this.respValue[2]},
      eight: {title: "this.takeRandomTitle(this.respValue[2])",value:this.respValue[2]},
      nine: {title: "this.takeRandomTitle(this.respValue[2])",value:this.respValue[2]},
    };
    this.left = {
      one: {title: "this.takeRandomTitle(this.respValue[3])",value:this.respValue[3]},
      two: {title: "this.takeRandomTitle(this.respValue[3])",value:this.respValue[3]},
      three: {title: "this.takeRandomTitle(this.respValue[3])",value:this.respValue[3]},
      four: {title: "this.takeRandomTitle(this.respValue[3])",value:this.respValue[3]},
      five: {title: "this.takeRandomTitle(this.respValue[3])",value:this.respValue[3]},
      six: {title: "this.takeRandomTitle(this.respValue[3])",value:this.respValue[3]},
      seven: {title: "this.takeRandomTitle(this.respValue[3])",value:this.respValue[3]},
      eight: {title: "this.takeRandomTitle(this.respValue[3])",value:this.respValue[3]},
      nine: {title: "this.takeRandomTitle(this.respValue[3])",value:this.respValue[3]},
    };
  }

  compareSquare(square: string){
    switch (square) {
      case "one":
        if(this.right["one"].value === this.left["two"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["one"].value === this.top["four"].value){
          alert("parabéns você uniu os quadrados");
        }
        break;
      
      case "two":
        if(this.right["one"].value === this.left["two"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["two"].value === this.left["three"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["two"].value === this.top["five"].value){
          alert("parabéns você uniu os quadrados");
        }
        break;

      case "three":
        if(this.right["two"].value === this.left["three"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["three"].value === this.top["six"].value){
          alert("parabéns você uniu os quadrados");
        }
        break;
      
      case "four":
        if(this.bottom["one"].value === this.top["four"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["four"].value === this.left["five"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["four"].value === this.top["seven"].value){
          alert("parabéns você uniu os quadrados");
        }
        break;

      case "five":
        if(this.bottom["two"].value === this.top["five"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["four"].value === this.left["five"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["five"].value === this.left["six"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["five"].value === this.top["eight"].value){
          alert("parabéns você uniu os quadrados");
        }
        break;
      
      case "six":
        if(this.bottom["three"].value === this.top["six"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["five"].value === this.left["six"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.bottom["six"].value === this.top["nine"].value){
          alert("parabéns você uniu os quadrados");
        }
        break;

      case "seven":
        if(this.bottom["four"].value === this.top["seven"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["seven"].value === this.left["eight"].value){
          alert("parabéns você uniu os quadrados");
        }
        break;

      case "eight":
        if(this.bottom["five"].value === this.top["eight"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["seven"].value === this.left["eight"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["eight"].value === this.left["nine"].value){
          alert("parabéns você uniu os quadrados");
        }
        break;

      case "nine":
        if(this.bottom["six"].value === this.top["nine"].value){
          alert("parabéns você uniu os quadrados");
        }
        if(this.right["eight"].value === this.left["nine"].value){
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

  }

  takeRandomTitle(value:number): string{
    var valueString = value.toString();
    var enumMax = EnumsModule.Expressions[valueString].length - 1;
    var random = Math.floor(Math.random() * (enumMax + 0));

    return EnumsModule.Expressions[valueString][random];
  }

}
