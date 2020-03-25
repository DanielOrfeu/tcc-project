import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'main',
                loadChildren: () => import('./main/main.module').then(mod => mod.MainModule)
            },
            {
                path: 'others',
                loadChildren: () => import('./others/others.module').then(mod => mod.OthersModule)
            },
            {
                path: '',
                redirectTo: 'main/welcome',
                pathMatch: 'full'
            }
        ]
     
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule]
})
export class PagesRoutingModule { }
