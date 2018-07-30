import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('ngx-loadable-component test app', async () => {
  let page: AppPage;
  browser.waitForAngularEnabled(true);

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should contain loadable component', () => {
    expect(page.getLoadableComponent()).toBeTruthy();
  });

  describe('when no component loaded', () => {
    it('should show transcluded content', () => {
      expect(page.getPlaceholder()).toBeTruthy();
    });

    it('should hide loadable components', () => {
      expect(page.getLoadableChildComponent().isPresent()).toBeFalsy();
    });
  });

  describe('when component loaded', async () => {
    it('should hide transcluded content', () => {
      page.clickLoadButton();
      expect(page.getPlaceholder().isPresent()).toBeFalsy();
    });

    it('should show loadable components', () => {
      page.clickLoadButton();
      expect(page.getLoadableChildComponent()).toBeTruthy();
    });
  });
});
