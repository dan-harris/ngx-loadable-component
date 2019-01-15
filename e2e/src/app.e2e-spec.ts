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
    logs.ignore(
      'http://localhost:4200/ 1 Active resource loading counts reached a per-frame limit while the tab was in background. Network requests will be delayed until a previous loading finishes, or the tab is brought to the foreground. See https://www.chromestatus.com/feature/5527160148197376 for more details'
    );
    logs.ignore(logs.DEBUG);
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

  describe('when component has inputs', async () => {
    it('should propagate input values', () => {
      page.clickLoadButton();
      page.clickLoadButton();
      page.clickLoadButton();
      page.setUpsideDownFaceInputValue(page.UPSIDE_DOWN_FACE_INPUT_TEXT_NEW.toUpperCase());
      expect(page.getLoadableUpsideDownFaceText().getText()).toBe(page.UPSIDE_DOWN_FACE_INPUT_TEXT_NEW.toUpperCase());
    });

    it('should propagate input values (boolean)', () => {
      page.clickLoadButton();
      page.clickLoadButton();
      page.clickLoadButton();
      page.clickDisableButton();
      expect(page.getLoadableUpsideDownFaceComponent().getAttribute('class')).toMatch(page.DISABLED_CUSTOM_CSS_CLASS);
      page.clickDisableButton();
      expect(page.getLoadableUpsideDownFaceComponent().getAttribute('class')).not.toMatch(page.DISABLED_CUSTOM_CSS_CLASS);
      page.clickDisableButton();
      expect(page.getLoadableUpsideDownFaceComponent().getAttribute('class')).toMatch(page.DISABLED_CUSTOM_CSS_CLASS);
    });
  });

  describe('when component has outputs', async () => {
    it('should emit output events', () => {
      page.clickLoadButton();
      page.clickLoadButton();
      page.clickLoadButton();
      page.clickUpsideDownFaceComponent();
      logs.expect('🖱', page.UPSIDE_DOWN_FACE_INPUT_TEXT_INITIAL);
      return logs.verify();
    });
  });
});
