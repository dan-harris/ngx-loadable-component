import { LoadableManifest } from "ngx-loadable-component";

export const appLoadableManifests: Array<LoadableManifest> = [
    {
        componentId: 'ThinkingFaceEmojiComponent',
        loadChildren: 'src/app/components/thinking-face-emoji/thinking-face-emoji.module#ThinkingFaceEmojiComponentModule'
    }
]