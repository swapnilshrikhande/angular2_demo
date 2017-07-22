import { HwAppPage } from './app.po';

describe('hw-app App', () => {
  let page: HwAppPage;

  beforeEach(() => {
    page = new HwAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
