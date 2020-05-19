import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { resolve } from 'path';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export function pathImage() {
  if (environment.ambiente && environment.ambiente === "electron") {
    let url = resolve() + '/src';
    let securityUrl = url.split("\\").join("/");

    return window.location.protocol + securityUrl
  }
  return false;
} 
