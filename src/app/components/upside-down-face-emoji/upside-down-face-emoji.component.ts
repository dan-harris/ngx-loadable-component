import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-upside-down-face-emoji',
  template: `
    <p>
      upside-down-face-emoji works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpsideDownFaceEmojiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
