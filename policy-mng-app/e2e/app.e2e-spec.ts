import { PolicyMngAppPage } from './app.po';

describe('policy-mng-app App', function() {
  let page: PolicyMngAppPage;

  beforeEach(() => {
    page = new PolicyMngAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
