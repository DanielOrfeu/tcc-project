import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { OthersRoutingModule } from './others-routing.module';

@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    OthersRoutingModule
  ],
  providers: [

  ],
})

export class OthersModule { }

