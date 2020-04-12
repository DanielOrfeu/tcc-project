import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modes } from '../../constants/mode.constant'
import { MatDialog } from '@angular/material/dialog';
import { DifficultyDialogComponent } from 'src/app/components/difficulty-dialog/difficulty-dialog.component';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.css']
})
export class SelectModeComponent implements OnInit {
 router: any;
 modes = Modes;

  constructor(
    router: Router,
    public dialog: MatDialog
    ) { 
    this.router = router;    
  }

  ngOnInit(): void {
  }

  chooseGameMode(mode: any){
    if(mode.title !== "Expressão aritimética"){
      this.router.navigateByUrl('/quiz',{
        state: mode.specs
      })
    } else {
      this.openDialog(mode.title, mode)
    }

     
  }

  openDialog(title, mode): void {
    const dialogRef = this.dialog.open(DifficultyDialogComponent, {
      width: '400px',
      data: {title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'easy'){
        this.router.navigateByUrl('/math',{
          state: [mode.specs[0],mode.specs[1]]
        })
      }else if(result === 'medium'){
        this.router.navigateByUrl('/math',{
          state: [mode.specs[0],mode.specs[2]]
        })
       }else if (result === 'hard'){
        this.router.navigateByUrl('/math',{
          state: [mode.specs[0],mode.specs[3], true]
        })
       }
console.log("result",result)
console.log("mode",mode)

    });
  }

}
