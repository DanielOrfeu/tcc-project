import { Component, OnInit, ElementRef, ViewChild, HostBinding} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { backgroundColor, fontColor, fontSize } from '../../constants/config.constant'

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  background = backgroundColor
  color = fontColor
  size = fontSize
  music: any;
  playing: boolean;
  
  ngOnInit(): void {
    this.music = document.getElementById('backgroundSound');
  }

  changeBackgroundColor(color:string){
    document.body.style.backgroundColor = color;
  }

  stateMusic(state:string){
    if(state === 'on'){
      this.music.volume = 0.1;
    } else {
      this.music.volume = 0;
    }
  }
}
