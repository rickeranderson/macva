import { MacvaPage } from './app.po';

describe('macva App', () => {
  let page: MacvaPage;

  beforeEach(() => {
    page = new MacvaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
