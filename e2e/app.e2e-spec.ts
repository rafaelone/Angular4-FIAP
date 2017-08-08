import { PizzariaXadrezPage } from './app.po';

describe('pizzaria-xadrez App', () => {
  let page: PizzariaXadrezPage;

  beforeEach(() => {
    page = new PizzariaXadrezPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
