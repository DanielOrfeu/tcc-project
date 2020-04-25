import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.audio = document.getElementById('backgroundSound');
    this.audio.volume = 0.1;
  }

  constructor(){
    
  }

  title = 'tcc-project';
  audio: any;
}
