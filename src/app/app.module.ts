import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// third-party modules
import { LoadableComponentModule } from 'ngx-loadable-component';

// components
import { PlaceholderEmojiComponent } from "./components/placeholder-emoji/placeholder-emoji.component";
// containers
import { AppComponent } from './containers/app/app.component';

// loadable components manifest
import { appLoadableManifests } from './app-loadable.manifests';

@NgModule({
  declarations: [
    // components
    PlaceholderEmojiComponent,
    // containers
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
