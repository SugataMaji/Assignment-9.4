import { MyformPage } from './app.po';

describe('myform App', () => {
  let page: MyformPage;

  beforeEach(() => {
    page = new MyformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
