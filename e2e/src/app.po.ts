import { browser, by, element, ElementFinder, promise } from 'protractor';

export class AppPage {
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

  getLoadableChildComponent(): ElementFinder {
    return element(by.css('app-star-struck-face-emoji'));
  }

  getPlaceholder(): ElementFinder {
    return this.getLoadableComponent().element(by.css('app-placeholder-emoji'));
  }
}
