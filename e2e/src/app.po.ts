import { browser, by, element, ElementFinder, promise } from 'protractor';

export class AppPage {
  LOADABLE_THINKING_FACE_CUSTOM_CSS_CLASS: string = 'my-custom--class--1';
  DISABLED_CUSTOM_CSS_CLASS: string = 'disabled';
  UPSIDE_DOWN_FACE_INPUT_TEXT_INITIAL: string = 'upside down';
  UPSIDE_DOWN_FACE_INPUT_TEXT_NEW: string = 'down upside';

  navigateTo(): promise.Promise<any> {
    return browser.get('/');
  }

  getLoadButton(): ElementFinder {
    return element(by.css('[data-test-id="load-button"]'));
  }

  clickLoadButton(): promise.Promise<void> {
    return this.getLoadButton().click();
  }

  getDisableButton(): ElementFinder {
    return element(by.css('[data-test-id="disable-button"]'));
  }

  clickDisableButton(): promise.Promise<void> {
    return this.getDisableButton().click();
  }

  getInputControl(): ElementFinder {
    return element(by.css('.app--buttons input'));
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

  getLoadableUpsideDownFaceText(): ElementFinder {
    return this.getLoadableUpsideDownFaceComponent().element(by.css('.emoji--text'));
  }

  setUpsideDownFaceInputValue(value: string): promise.Promise<void> {
    return this.getInputControl().sendKeys(value.toUpperCase());
  }

  clickUpsideDownFaceComponent(): promise.Promise<void> {
    return this.getLoadableUpsideDownFaceComponent().click();
  }

  getPlaceholder(): ElementFinder {
    return this.getLoadableComponent().element(by.css('app-placeholder-emoji'));
  }
}
