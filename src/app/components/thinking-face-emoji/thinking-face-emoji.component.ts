import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-thinking-face-emoji',
  template: `
    <p>
      thinking-face-emoji works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThinkingFaceEmojiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
