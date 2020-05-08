import { Component, OnInit } from '@angular/core';
import { resolve } from 'path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dirname: string;

  ngOnInit(): void {
    this.audio = document.getElementById('backgroundSound');
    this.audio.volume = 0.1;
  }

  constructor(){
    this.dirname = resolve() + '/src';
  }

  title = 'tcc-project';
  audio: any;
}
