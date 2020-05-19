import { Component, OnInit } from '@angular/core';
import { pathImage } from 'src/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.backgroundSound = document.getElementById('backgroundSound');
    this.clickSound = document.getElementById('clickSound');
    this.questionSound = document.getElementById('questionSound');
    this.congratularionsSound = document.getElementById('congratularionsSound');
    this.backgroundSound.volume = 0.1;
    this.clickSound.volume = 0.2;
    this.questionSound.volume = 0.2;
    this.congratularionsSound.volume = 0.2;
  }

  constructor(){
    if (!pathImage()) {
      this.dirname = "../../.."
    } else {
      this.dirname = pathImage();
    }
  }

  title = 'tcc-project';
  dirname: any;
  backgroundSound: any;
  clickSound: any;
  questionSound: any;
  congratularionsSound: any;
}
