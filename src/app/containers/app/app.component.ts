import { ChangeDetectorRef, Component } from '@angular/core';
import { LoadableComponentIds } from '../../app-loadable.manifests';
import { UpsideDownFaceEmojiComponentInputs } from '../../components/upside-down-face-emoji/models/upside-down-face-emoji.inputs.model';
import { UpsideDownFaceEmojiComponentOutputs } from '../../components/upside-down-face-emoji/models/upside-down-face-emoji.outputs.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="app--container">
      <!-- content container -->
      <div class="app--container--inner">

        <!-- action buttons -->
        <div class="app--buttons">
          <button (click)="onClickLoad()" data-test-id="load-button">Load</button>
          <button (click)="onClickDisable()" data-test-id="disable-button">Disable</button>
          <input #dynamicInput (keyup)="onInputChange(dynamicInput.value)"/>
        </div>

        <!-- emoji cards -->
        <div class="app--emojis">
          <loadable-component [componentId]="STAR_STRUCK_FACE_COMPONENT_ID" [loadComponent]="loadStarStruckFaceComponent"  class="app--emoji--component">
            <app-placeholder-emoji [isLoading]="loadStarStruckFaceComponent"></app-placeholder-emoji>
          </loadable-component>
          <loadable-component [componentId]="THINKING_FACE_COMPONENT_ID" [loadComponent]="loadThinkingFaceComponent"  [componentCssClasses]="customCssClasses" class="app--emoji--component">
            <app-placeholder-emoji [isLoading]="loadThinkingFaceComponent"></app-placeholder-emoji>
          </loadable-component>
          <loadable-component [componentId]="UPSIDE_DOWN_FACE_COMPONENT_ID" [loadComponent]="loadUpsideDownFaceComponent" [componentInputs]="upsideDownFaceInputs" [componentOutputs]="upsideDownFaceOutputs" class="app--emoji--component">
            <app-placeholder-emoji [isLoading]="loadUpsideDownFaceComponent"></app-placeholder-emoji>
          </loadable-component>
        </div>

      </div>
    </div>
  `,
  styles: [
    `
      /* layout containers */
      .app--container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .app--container--inner {
        display: flex;
        flex-direction: column;
      }
      .app--buttons button:not(:first-of-type) {
        margin-left: 0.5rem;
      }
      .app--emojis {
        display: flex;
        margin-top: 1rem;
      }
      .app--emoji--component {
        display: flex;
      }
      input {
        margin-left: 1rem;
      }
    `
  ]
})
export class AppComponent {
  /**
   * loadable component ids
   */
  STAR_STRUCK_FACE_COMPONENT_ID: string = LoadableComponentIds.STAR_STRUCK_FACE;
  THINKING_FACE_COMPONENT_ID: string = LoadableComponentIds.THINKING_FACE;
  UPSIDE_DOWN_FACE_COMPONENT_ID: string = LoadableComponentIds.UPSIDE_DOWN_FACE;

  /**
   * flags to load components
   */
  loadStarStruckFaceComponent: boolean = false;
  loadThinkingFaceComponent: boolean = false;
  loadUpsideDownFaceComponent: boolean = false;

  /**
   * custom css classes
   */
  customCssClasses: Array<string> = ['my-custom--class--1', 'my-custom--class--2'];

  /**
   * input text
   */
  private _inputText: string = 'upside down';

  /**
   * disabled flag
   */
  private _isDisabled: boolean = false;

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  get upsideDownFaceInputs(): UpsideDownFaceEmojiComponentInputs {
    return {
      text: this._inputText,
      isDisabled: this._isDisabled
    };
  }

  get upsideDownFaceOutputs(): UpsideDownFaceEmojiComponentOutputs {
    return {
      clicked: (text: string) => this.onClickedUpsideDownFace(text)
    };
  }

  onClickedUpsideDownFace(text: string): void {
    // tslint:disable-next-line:no-console
    console.log(`🖱 ${text}`);
  }

  onInputChange(text: string): void {
    this._inputText = text;
  }

  onClickLoad(): void {
    if (!this.loadStarStruckFaceComponent) this.loadStarStruckFaceComponent = true;
    else if (!this.loadThinkingFaceComponent) this.loadThinkingFaceComponent = true;
    else if (!this.loadUpsideDownFaceComponent) this.loadUpsideDownFaceComponent = true;
  }

  onClickDisable(): void {
    this._isDisabled = !this._isDisabled;
    this.cdRef.detectChanges();
  }
}
