import { NgModule } from '@angular/core';
import { LoadableComponentModule } from 'ngx-loadable-component';

import { UpsideDownFaceEmojiComponent } from './upside-down-face-emoji.component';

@NgModule({
    imports: [
        // register as loadable component
        LoadableComponentModule.forChild(UpsideDownFaceEmojiComponent)
    ],
    declarations: [
        UpsideDownFaceEmojiComponent
    ]
})
export class UpsideDownFaceEmojiComponentModule { }