import { browser, by, element, ElementFinder, promise } from 'protractor';

export class AppPage {
  LOADABLE_THINKING_FACE_CUSTOM_CSS_CLASS: string = 'my-custom--class--1';
  UPSIDE_DOWN_FACE_INPUT_TEXT: string = 'upside down';

  navigateTo(): promise.Promise<any> {
    return browser.get('/');
  }

  getLoadButton(): ElementFinder {
    return element(by.css('.app--buttons button'));
  }

  clickLoadButton(): promise.Promise<void> {
    return this.getLoadButton().click();
  }

  getLoadableComponent(): ElementFinder {
    return element(by.css('loadable-component:first-of-type'));
  }

  getLoadableStarStruckFaceComponent(): ElementFinder {
    return element(by.css('app-star-struck-face-emoji'));
  }

  getLoadableThinkingFaceComponent(): ElementFinder {
    return element(by.css('app-thinking-face-emoji'));
  }

  getLoadableUpsideDownFaceComponent(): ElementFinder {
    return element(by.css('app-upside-down-face-emoji'));
  }

  clickUpsideDownFaceComponent(): promise.Promise<void> {
    return this.getLoadableUpsideDownFaceComponent().click();
  }

  getPlaceholder(): ElementFinder {
    return this.getLoadableComponent().element(by.css('app-placeholder-emoji'));
  }
}
