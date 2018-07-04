import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableComponentModule } from 'ngx-loadable-component';

import { AppComponent } from './containers/app/app.component';

import { appLoadableManifests } from './app-loadable.manifests';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadableComponentModule.forRoot(appLoadableManifests)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
