import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableComponentModule } from 'ngx-loadable-component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadableComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
