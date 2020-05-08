import { Component, OnInit } from '@angular/core';
import { resolve } from 'path'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  viewInfo: boolean;
  dirname: string;

  constructor() { 
    this.viewInfo = false;
    this.dirname = resolve() + '/src';
  }

  ngOnInit(): void {
  }

  clickInfo(){
    if(this.viewInfo){
      this.viewInfo = false;
    }else{
      this.viewInfo = true;
    }
  }

}
