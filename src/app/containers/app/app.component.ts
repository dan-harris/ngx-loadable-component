import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <loadable-component componentId="ThinkingFaceEmojiComponent" [loadComponent]="loadComponent"></loadable-component>
  `,
  styles: []
})
export class AppComponent {

  loadComponent: boolean = false;

  ngOnInit(): void {
    this.loadComponent = true;
  }

}
