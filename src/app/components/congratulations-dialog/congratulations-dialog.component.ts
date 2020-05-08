import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { resolve } from 'path';

@Component({
  selector: 'app-congratulations-dialog',
  templateUrl: './congratulations-dialog.component.html',
  styleUrls: ['./congratulations-dialog.component.css']
})
export class CongratulationsDialogComponent implements OnInit {
  audio: any;
  congratulationsAudio: any;
  dirname: string;

  constructor(
    public router: Router,
    private dialogRef: MatDialogRef<CongratulationsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.dirname = resolve() + '/src';
  }
  
  ngOnInit(): void {
    this.audio = document.getElementById('backgroundSound');
    this.congratulationsAudio = document.getElementById('congratularionsSound');
    this.congratulationsAudio.play();
    if (this.audio.duration > 0 && !this.audio.paused)
      this.audio.pause();
  }

  ngOnDestroy(): void {
    this.audio.play();
  }

  goToHome() {
    this.dialogRef.close(
      this.router.navigateByUrl('/')
    );
  }

  goToForm() {
    this.dialogRef.close(
      this.router.navigateByUrl('/form')
    );
  }

}
