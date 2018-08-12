import { browser } from 'protractor';
import { AppPage } from './app.po';
// tslint:disable-next-line:no-require-imports
const browserLogs: any = require('protractor-browser-logs');

describe('ngx-loadable-component test app', async () => {
  let page: AppPage;
  let logs: any;
  browser.waitForAngularEnabled(true);

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    logs = browserLogs(browser);
    logs.ignore('enableProdMode()');
    logs.ignore('failed: WebSocket is closed');
  });

  it('should contain loadable component', () => {
    expect(page.getLoadableComponent()).toBeTruthy();
  });

  describe('when no component loaded', () => {
    it('should show transcluded content', () => {
      expect(page.getPlaceholder()).toBeTruthy();
    });

    it('should hide loadable components', () => {
      expect(page.getLoadableStarStruckFaceComponent().isPresent()).toBeFalsy();
    });
  });

  describe('when component loaded', async () => {
    it('should hide transcluded content', () => {
      page.clickLoadButton();
      expect(page.getPlaceholder().isPresent()).toBeFalsy();
    });

    it('should show loadable components', () => {
      page.clickLoadButton();
      expect(page.getLoadableStarStruckFaceComponent()).toBeTruthy();
      page.clickLoadButton();
      expect(page.getLoadableThinkingFaceComponent()).toBeTruthy();
    });

    it('should show custom css', () => {
      page.clickLoadButton();
      page.clickLoadButton();
      expect(page.getLoadableThinkingFaceComponent().getAttribute('class')).toMatch(page.LOADABLE_THINKING_FACE_CUSTOM_CSS_CLASS);
    });
  });

  describe('when component has outputs', async () => {
    it('should emit output events', () => {
      page.clickLoadButton();
      page.clickLoadButton();
      page.clickLoadButton();
      page.clickUpsideDownFaceComponent();
      logs.expect('🖱', page.UPSIDE_DOWN_FACE_INPUT_TEXT);
      return logs.verify();
    });
  });
});
