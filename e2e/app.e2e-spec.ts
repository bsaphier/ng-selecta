import { NgSelectaPage } from './app.po';

describe('ng-selecta App', () => {
  let page: NgSelectaPage;

  beforeEach(() => {
    page = new NgSelectaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
