import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upside-down-face-emoji',
  template: `
  <a class="card" (click)="onClick()">
    <div class="emoji--emoji">🙃</div>
    <div class="emoji--text">{{ text }}</div>
  </a>
`,
  styles: [
    `
      /* layout spacing */
      :host {
        height: 12.5rem;
        width: 10.5rem;
        border: 2px solid black;
        margin-right: 1rem;
        animation: emojifadein 1s;
      }
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        transition: opacity 0.2s ease-out;
      }
      :host(.disabled) {
        opacity: 0.4;
      }

      /* fadein animation */
      @keyframes emojifadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      /* placeholder for the rendered emoji */
      .emoji--emoji {
        height: 7rem;
        width: 7rem;
        font-size: 5rem;
      }

      /* placeholder for emoji descriptor text */
      .emoji--text {
        width: 8rem;
        height: 1rem;
        text-align: center;
        text-transform: uppercase;
        font-weight: 600;
        color: black;
        margin-top: 1.5rem;
      }
    `
  ]
})
export class UpsideDownFaceEmojiComponent {
  @Input() text: string = 'no text';

  @Input()
  @HostBinding('class.disabled')
  isDisabled: boolean = false;

  @Output() readonly clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onClick(): void {
    this.clicked.emit(this.text);
  }
}
