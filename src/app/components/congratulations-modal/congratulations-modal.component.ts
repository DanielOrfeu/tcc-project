import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  answeredCorrect: any;
  hourOut: any; 
  minOut: any;
  secOut: any;
  gameMode: any;
}

@Component({
  selector: 'app-congratulations-modal',
  templateUrl: './congratulations-modal.component.html',
  styleUrls: ['./congratulations-modal.component.css']
})
export class CongratulationsModalComponent implements OnInit {

  constructor(
    public router: Router,
    private dialogRef: MatDialogRef<CongratulationsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log(data)
  }
  
  ngOnInit(): void {
  }

  home() {
    this.dialogRef.close(
      this.router.navigateByUrl('/')
    );
  }

  

}
