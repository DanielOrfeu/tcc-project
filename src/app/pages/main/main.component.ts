import { Component, OnInit } from '@angular/core';
import { pathImage } from 'src/main'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  viewInfo: boolean;
  dirname: any;

  constructor() {
    this.viewInfo = false;
    if (!pathImage()) {
      this.dirname = "../../.."
    } else {
      this.dirname = pathImage();
    }
  }

  ngOnInit(): void {
  }

  clickInfo() {
    if (this.viewInfo) {
      this.viewInfo = false;
    } else {
      this.viewInfo = true;
    }
  }

}
