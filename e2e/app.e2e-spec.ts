import { UnittestPage } from './app.po';

describe('unittest App', function() {
  let page: UnittestPage;

  beforeEach(() => {
    page = new UnittestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  })
});
