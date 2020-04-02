import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component'
import { ConfigComponent } from './pages/config/config.component';
import { InGameComponent } from './pages/in-game/in-game.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'config', component: ConfigComponent },
  { path: 'inGame', component: InGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
