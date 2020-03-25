import { Component, OnInit, ElementRef, ViewChild, HostBinding} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
  }


  @HostBinding("attr.style")
  changeBackgroundColor(color:string){
    document.body.style.setProperty('background-color', color);
  }

  changeFontColor(color:string){
    document.body.style.setProperty('color', color);
  }

  changeFontSize(size:string){
    console.log(size)
    document.body.style.setProperty('font-size', size);
  }
}
