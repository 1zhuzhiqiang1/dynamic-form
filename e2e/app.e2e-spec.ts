import { DynamicForm2Page } from './app.po';

describe('dynamic-form2 App', () => {
  let page: DynamicForm2Page;

  beforeEach(() => {
    page = new DynamicForm2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
