import { Component, OnInit, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder-emoji',
  template: `
    <div class="card">
      <div class="placeholder--emoji"></div>
      <div class="placeholder--text"></div>
    </div>
  `,
  styles: [`
    /* layout spacing */
    :host {
      height: 12.5rem;
      width: 10.5rem;
      border: 2px solid darkgrey;
      margin-right: 1rem;
      opacity: 0.2;
    }
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }

    /* placeholder for the rendered emoji */
    .placeholder--emoji {
      border-radius: 50%;
      background-color: lightgrey;
      height: 7rem;
      width: 7rem;
    }

    /* placeholder for emoji descriptor text */
    .placeholder--text {
      width: 7rem;
      height: 1rem;
      background-color: lightgrey;
      margin-top: 1.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderEmojiComponent implements OnInit {

  @HostBinding('class.animation--load-fadein-fadeout')
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
