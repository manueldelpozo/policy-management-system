import { PolicyAppPage } from './app.po';

describe('policy-app App', function() {
  let page: PolicyAppPage;

  beforeEach(() => {
    page = new PolicyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
