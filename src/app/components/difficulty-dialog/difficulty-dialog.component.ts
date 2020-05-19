import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-difficulty-dialog',
  templateUrl: './difficulty-dialog.component.html',
  styleUrls: ['./difficulty-dialog.component.css']
})
export class DifficultyDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DifficultyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
  }

  changeDifficulty(difficulty){
    if(difficulty === 'easy'){
      this.onClose('easy')
    }else if (difficulty === 'medium'){
      this.onClose('medium')
    } else {
      this.onClose('hard')
    }
  }

  onClose(action): void {
    this.dialogRef.close(action);
  }
}