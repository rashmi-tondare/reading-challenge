import { ReadingChallengePage } from './app.po';

describe('reading-challenge App', function() {
  let page: ReadingChallengePage;

  beforeEach(() => {
    page = new ReadingChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
