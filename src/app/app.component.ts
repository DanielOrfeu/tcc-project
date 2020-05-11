import { Component, OnInit } from '@angular/core';
import { pathImagem } from '../main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dirname: any;

  ngOnInit(): void {
    this.audio = document.getElementById('backgroundSound');
    this.audio.volume = 0.1;
  }

  constructor(){
    this.dirname = pathImagem();
  }

  title = 'tcc-project';
  audio: any;
}
