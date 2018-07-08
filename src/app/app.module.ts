import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoadableComponentModule } from 'ngx-loadable-component';

import { AppComponent } from './containers/app/app.component';

import { appLoadableManifests } from './app-loadable.manifests';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // default browser module for Angular bootstrapping
    BrowserModule,
    // components to load as seperate async
    LoadableComponentModule.forRoot(appLoadableManifests)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
