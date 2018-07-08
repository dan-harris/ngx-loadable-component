import { LoadableManifest } from "ngx-loadable-component";

export enum LoadableComponentIds {
    STAR_STRUCK_FACE = 'StarStruckFaceEmojiComponent',
    THINKING_FACE = 'ThinkingFaceEmojiComponent',
    UPSIDE_DOWN_FACE = 'UpsideDownFaceEmojiComponent',
}

export const appLoadableManifests: Array<LoadableManifest> = [
    {
        componentId: LoadableComponentIds.STAR_STRUCK_FACE,
        path: `loadable-${LoadableComponentIds.STAR_STRUCK_FACE}`,
        loadChildren: './components/star-struck-face-emoji/star-struck-face-emoji.module#StarStruckFaceEmojiComponentModule'
    },
    {
        componentId: LoadableComponentIds.THINKING_FACE,
        path: `loadable-${LoadableComponentIds.THINKING_FACE}`,
        loadChildren: './components/thinking-face-emoji/thinking-face-emoji.module#ThinkingFaceEmojiComponentModule'
    },
    {
        componentId: LoadableComponentIds.UPSIDE_DOWN_FACE,
        path: `loadable-${LoadableComponentIds.UPSIDE_DOWN_FACE}`,
        loadChildren: './components/upside-down-face-emoji/upside-down-face-emoji.module#UpsideDownFaceEmojiComponentModule'
    }
];   