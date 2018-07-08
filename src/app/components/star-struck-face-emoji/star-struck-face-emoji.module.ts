import { NgModule } from '@angular/core';
import { LoadableComponentModule } from 'ngx-loadable-component';

import { StarStruckFaceEmojiComponent } from './star-struck-face-emoji.component';

@NgModule({
    imports: [
        // register as loadable component
        LoadableComponentModule.forChild(StarStruckFaceEmojiComponent)
    ],
    declarations: [
        StarStruckFaceEmojiComponent
    ]
})
export class StarStruckFaceEmojiComponentModule { }