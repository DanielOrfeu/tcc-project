import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  viewInfo: boolean;

  constructor() { 
    this.viewInfo = false
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
