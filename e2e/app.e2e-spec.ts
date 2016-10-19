import { BetaPaymePage } from './app.po';

describe('beta-payme App', function() {
  let page: BetaPaymePage;

  beforeEach(() => {
    page = new BetaPaymePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
