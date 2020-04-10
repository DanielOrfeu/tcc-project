import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumbersEXP, Expressions } from 'src/app/constants/numbers.constant';
import { Modes } from '../../constants/mode.constant'

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.css']
})
export class SelectModeComponent implements OnInit {
 router: any;
 modes = Modes;
  constructor(router: Router) { 
    this.router = router;    
  }

  ngOnInit(): void {
  }

  chooseGameMode(specs: any){
      this.router.navigateByUrl('/ingame',{
        state: specs
      })
  }

}
