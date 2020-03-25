import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [

  ],
})

export class MainModule { }

