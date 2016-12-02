import { MarkdownEditorFrontendPage } from './app.po';

describe('markdown-editor-frontend App', function() {
  let page: MarkdownEditorFrontendPage;

  beforeEach(() => {
    page = new MarkdownEditorFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
