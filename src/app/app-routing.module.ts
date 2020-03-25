import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module'

const routes: Routes = [
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule'},
  { path: '', redirectTo: 'pages', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
