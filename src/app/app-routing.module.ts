import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component'
import { ConfigComponent } from './pages/config/config.component';
import { InGameComponent } from './pages/in-game/in-game.component';
import { SelectModeComponent } from './pages/select-mode/select-mode.component';


const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'config', component: ConfigComponent },
  { path: 'select', component:  SelectModeComponent},
  { path: 'ingame', component: InGameComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: '**', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
