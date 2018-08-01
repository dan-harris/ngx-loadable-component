import { NgModule } from '@angular/core';
import { LoadableComponentModule } from 'ngx-loadable-component';

import { ThinkingFaceEmojiComponent } from './thinking-face-emoji.component';

@NgModule({
    imports: [
        // register as loadable component
        LoadableComponentModule.forChild(ThinkingFaceEmojiComponent)
    ],
    declarations: [
        ThinkingFaceEmojiComponent
    ]
})
export class ThinkingFaceEmojiComponentModule { }