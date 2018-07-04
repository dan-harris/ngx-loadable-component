import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-star-struck-face-emoji',
  template: `
    <p>
      star-struck-face-emoji works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarStruckFaceEmojiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
