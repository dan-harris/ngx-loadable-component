![ngx-loadable-component](https://github.com/dan-harris/ngx-loadable-component/raw/master/logo.png)

Dynamically lazy load & code-split your Angular components.

![](https://badgen.net/github/license/dan-harris/ngx-loadable-component) ![](https://badgen.net/npm/v/ngx-loadable-component) ![](https://badgen.net/bundlephobia/minzip/ngx-loadable-component) ![](https://img.shields.io/badge/angular-%5E6.0.0-red.svg) ![](https://img.shields.io/badge/awesome-yes%20%F0%9F%91%8D-bb0073.svg)

(Supports Angular 6+)

Core functionality derived _heavily_ from [dynamically loading components with angular-cli](https://blog.angularindepth.com/dynamically-loading-components-with-angular-cli-92a3c69bcd28)

## Easily 💤 lazy load & ⚡ code-split, components in 🅰 Angular

🚧 no mucking around with seperate build processes

💤 lazy load components

🆓 free code splitting via Angular

⚡ [demo](https://ngx-loadable-component-app-chfnxlwwxx.now.sh/)

🤓 ingenious core pattern thought up by _[actual smart people](https://blog.angularindepth.com/dynamically-loading-components-with-angular-cli-92a3c69bcd28)_

👌 created for the use case of seperating large single components (such as wysiwg editors, charts .etc) from the rest of your app code.

# Installation

Install via npm;

```
npm i ngx-loadable-component
```

# Setup

Create a component you wish to dynamically load... e.g. **loadable component**

_upside-down-face-emoji.component.ts_

```typescript
@Component({
  selector: 'app-upside-down-face-emoji'
  ...
})
export class UpsideDownFaceEmojiComponent { }
```

_* its important that this component does not use `OnPush` changeDetection as this will interfere with the *loadable component\* setup_

Then create a module for the **loadable component**:

_upside-down-face-emoji.module.ts_

```typescript
import { LoadableComponentModule } from 'ngx-loadable-component';

import { UpsideDownFaceEmojiComponent } from './upside-down-face-emoji.component';

@NgModule({
  imports: [
    // register as loadable component
    LoadableComponentModule.forChild(UpsideDownFaceEmojiComponent)
  ],
  declarations: [UpsideDownFaceEmojiComponent]
})
export class UpsideDownFaceEmojiComponentModule {}
```

Create a **manifest** file which lists all your **loadable components**:

_app-loadable.manifests.ts_

```typescript
import { LoadableManifest } from 'ngx-loadable-component';

export enum LoadableComponentIds {
  UPSIDE_DOWN_FACE = 'UpsideDownFaceEmojiComponent'
}

export const appLoadableManifests: Array<LoadableManifest> = [
  {
    // used to retrieve the loadable component later
    componentId: LoadableComponentIds.UPSIDE_DOWN_FACE,
    // must be a unique value within the app...
    // but apart from that only used by angular when loading component
    path: `loadable-${LoadableComponentIds.UPSIDE_DOWN_FACE}`,
    // relative path to component module
    loadChildren: './components/upside-down-face-emoji/upside-down-face-emoji.module#UpsideDownFaceEmojiComponentModule'
  }
];
```

Add the **loadable component manifest** & **loadable component module** to root app module:

_app.module.ts_

```typescript
import { LoadableComponentModule } from 'ngx-loadable-component';

// loadable components manifest
import { appLoadableManifests } from './app-loadable.manifests';

@NgModule({
  declarations: [
      ...
  ],
  imports: [
    ...
    // components to load as seperate async
    LoadableComponentModule.forRoot(appLoadableManifests)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Be sure to import the **loadable component module** into any feature modules you use it in:

_my-feature.module.ts_

```typescript
import { LoadableComponentModule } from 'ngx-loadable-component';

@NgModule({
  declarations: [
      ...
  ],
  imports: [
    ...
    LoadableComponentModule.forFeature()
  ]
})
export class MyFeatureModule { }
```

# Usage (basic)

Add a **loadable component** where needed:

_app.component.html_

```html
<div class="app--emojis">

    <loadable-component [componentId]="UPSIDE_DOWN_FACE_COMPONENT_ID" [loadComponent]="loadUpsideDownFaceComponent">
        <!-- any element in the loadable component content area will only be shown whilst loadComponent is false -->
        <app-placeholder-emoji></app-placeholder-emoji>
    </loadable-component>

</div>
```

_app.component.ts_

```typescript
import { LoadableComponentIds } from '../../app-loadable.manifests';

@Component({ ... })
export class AppComponent {
  // loadable component ids
  UPSIDE_DOWN_FACE_COMPONENT_ID: string = LoadableComponentIds.UPSIDE_DOWN_FACE;

  // flags to load components
  // setting this to 'true' will cause the loadable component
  // to load the specified component id
  loadUpsideDownFaceComponent: boolean = false;
}
```

# Usage (with Inputs/Outputs)

If our **loadable component** has inputs/outputs - like so:

_upside-down-face-emoji.component.html_

```html
<a (click)="onClick()">
    <div>🙃</div>
    <div>{{ text }}</div>
</a>
```

_upside-down-face-emoji.component.ts_

```typescript
export class UpsideDownFaceEmojiComponent {
  @Input() text: string = 'upside down';

  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onClick(): void {
    this.clicked.emit(this.text);
  }
}
```

We then create a model representing the inputs/outputs (for some typing goodness 💯):

_upside-down-face-emoji.inputs.model.ts_

```typescript
import { LoadableComponentInputs } from 'ngx-loadable-component';

export interface UpsideDownFaceEmojiComponentInputs extends LoadableComponentInputs {
  text: string;
}
```

_upside-down-face-emoji.outputs.model.ts_

```typescript
import { LoadableComponentOutputs } from 'ngx-loadable-component';

export interface UpsideDownFaceEmojiComponentOutputs extends LoadableComponentOutputs {
  clicked: Function;
}
```

And add our inputs/outputs to the **loadable component** wherever its used:

_app.component.html_

```html
<div class="app--emojis">

    <loadable-component
        [componentId]="UPSIDE_DOWN_FACE_COMPONENT_ID"
        [loadComponent]="loadUpsideDownFaceComponent"
        [componentInputs]="upsideDownFaceInputs"
        [componentOutputs]="upsideDownFaceOutputs">
        <!-- any element in the loadable component content area will only be shown whilst loadComponent is false -->
        <app-placeholder-emoji></app-placeholder-emoji>
    </loadable-component>

</div>
```

_app.component.ts_

```typescript
import { LoadableComponentIds } from '../../app-loadable.manifests';
import { UpsideDownFaceEmojiComponentInputs } from '../../components/upside-down-face-emoji/models/upside-down-face-emoji.inputs.model';
import { UpsideDownFaceEmojiComponentOutputs } from '../../components/upside-down-face-emoji/models/upside-down-face-emoji.outputs.model';

@Component({ ... })
export class AppComponent {
  // loadable component ids
  UPSIDE_DOWN_FACE_COMPONENT_ID: string = LoadableComponentIds.UPSIDE_DOWN_FACE;

  // flags to load components
  // setting this to 'true' will cause the loadable component
  // to load the specified component id
  loadUpsideDownFaceComponent: boolean = false;

  // inputs for loadable component
  get upsideDownFaceInputs(): UpsideDownFaceEmojiComponentInputs {
    return {
      text: 'not upside down'
    }
  }

  // outputs for loadable component
  get upsideDownFaceOutputs(): UpsideDownFaceEmojiComponentOutputs {
    return {
      clicked: (text: string) => this.onClickedUpsideDownFace(text)
    }
  }

  onClickedUpsideDownFace(text: string): void {
    console.log('🖱', text);
  }
}
```

And voila! we now have input/output binding 👌.
_\* note that the inputs in the parent component (of the loadable component - e.g. `upsideDownFaceInputs()`) have to be within a getter or function for change detection to apply correctly_

# Usage (add custom css classes)

Custom css classes can be passed via the _loadable component_ `componentCssClasses` input.
These will be added to the host element of the provided loadable component. e.g.

_app.component.html_

```html
<div class="app--emojis">

    <loadable-component ... [componentCssClasses]="customCssClasses" >
        ...
    </loadable-component>

</div>
```

_app.component.ts_

```typescript
@Component({ ... })
export class AppComponent {
  ...
  // custom css classes
  customCssClasses: Array<string> = ['my-custom--class--1', 'my-custom--class--2']
  ...
}
```

# Author

🤔 created by Dan Harris

👨‍💻 website: [danharris.io](https://danharris.io)

🐤 twitter: [@danharris_io](http://twitter.com/danharris_io)

☕ made with love and late nights

🤷‍ this package works well for my use case... no guarantees made to its general use

# Odds & Ends

👀 MIT License

💖 if you've read this far... thanks for the star

😎 title font courtesy of the awesome [lazer84 font](http://sunrise-digital.net/lazer84/)

😡 please send all abusive letters via handwritten note to [this address](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

📫 all constructive feedback welcome.
