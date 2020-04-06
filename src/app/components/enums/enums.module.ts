import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EnumsModule { 
  static Expressions: {
    "0": ["5*0", "0/6"],
    "1": ["1*1", "6/6"],
    "2": ["2*2", "2+2"],
    "3": ["4-1", "6/2"],
    "4": ["5*0", "16/4"],
    "5": ["5*1", "50/10"],
    "6": ["2*3", "12/2"],
    "7": ["10-3", "14/2"],
    "8": ["2*4", "40/5"],
    "9": ["79-70", "81/9"]
  }
}
