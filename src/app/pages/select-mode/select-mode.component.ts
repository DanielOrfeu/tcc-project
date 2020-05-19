import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modes } from '../../constants/mode.constant'
import { MatDialog } from '@angular/material/dialog';
import { pathImage } from 'src/main';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.css']
})
export class SelectModeComponent implements OnInit {
  router: any;
  modes = Modes;
  dirname: any;
  selectMode: boolean

  constructor(
    router: Router,
    public dialog: MatDialog
  ) {
    if (!pathImage()) {
      this.dirname = "../../.."
    } else {
      this.dirname = pathImage();
    }
    this.router = router;
    this.selectMode = true;
  }

  ngOnInit(): void {
  }

  chooseGameMode(mode: any) {
    if (mode.title !== "Expressão aritimética") {
      this.router.navigateByUrl('/quiz', {
        state: mode.specs
      })
    } else {
      this.selectMode = false;
    }
  }

  changeDifficulty(difficulty: string){
    if(difficulty === 'easy'){
      this.router.navigateByUrl('/math', {
        state: [this.modes[0].specs[0], this.modes[0].specs[1]]
      })
    }else if (difficulty === 'medium'){
      this.router.navigateByUrl('/math', {
        state: [this.modes[0].specs[0], this.modes[0].specs[2]]
      })
    } else {
      this.router.navigateByUrl('/math', {
        state: [this.modes[0].specs[0], this.modes[0].specs[3], true]
      })
    }
  }

}
