import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumbersEXP, Expressions } from 'src/app/constants/numbers.constant';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.css']
})
export class SelectModeComponent implements OnInit {
 router: any;
  constructor(router: Router) { 
    this.router = router;    
  }

  ngOnInit(): void {
  }

  chooseGameMode(mode:string){
    switch (mode) {
      case "NumbersEXP":
        console.log("aqui")
        this.router.navigateByUrl('/ingame',{
          state: [NumbersEXP, Expressions]
        })
        break;
    
      default:
        break;
    }
  }

}
