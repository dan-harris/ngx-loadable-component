import { Component } from '@angular/core';
import { LoadableComponentIds } from '../../app-loadable.manifests';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <button (click)="onClick()">Load</button>
    <loadable-component [componentId]="STAR_STRUCK_FACE_COMPONENT_ID" [loadComponent]="loadStarStruckFaceComponent"></loadable-component>
    <loadable-component [componentId]="THINKING_FACE_COMPONENT_ID" [loadComponent]="loadThinkingFaceComponent"></loadable-component>
    <loadable-component [componentId]="UPSIDE_DOWN_FACE_COMPONENT_ID" [loadComponent]="loadUpsideDownFaceComponent"></loadable-component>
    </div>
  `,
  styles: []
})
export class AppComponent {

  // loadable component ids
  STAR_STRUCK_FACE_COMPONENT_ID = LoadableComponentIds.STAR_STRUCK_FACE;
  THINKING_FACE_COMPONENT_ID = LoadableComponentIds.THINKING_FACE;
  UPSIDE_DOWN_FACE_COMPONENT_ID = LoadableComponentIds.UPSIDE_DOWN_FACE;

  // flags to load components
  loadStarStruckFaceComponent: boolean = false;
  loadThinkingFaceComponent: boolean = false;
  loadUpsideDownFaceComponent: boolean = false;

  ngOnInit(): void {
  }

  onClick(): void {
    if (!this.loadStarStruckFaceComponent) this.loadStarStruckFaceComponent = true;
    else if (!this.loadThinkingFaceComponent) this.loadThinkingFaceComponent = true;
    else if (!this.loadUpsideDownFaceComponent) this.loadUpsideDownFaceComponent = true;
  }

  mockLoad(): void {

  }

}
