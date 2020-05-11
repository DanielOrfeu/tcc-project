import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { resolve } from 'path';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



export function pathImagem(){
  let url = resolve() + '/src';
  let securityUrl = url.split("\\").join("/");
  
  return window.location.protocol + securityUrl
}