const BasePage = require('../src/BasePage');

class EmptyPage extends BasePage {

};

class NonEmptyPage extends BasePage {
  template() {
    return 'hello';
  }
};

describe('BasePage', () => {
  it('should throw error during render for empty page', () => {
    const page = new EmptyPage();
    expect(page.template).toThrowError("Unimplemented template")
  })

  it('should not throw error during render for page with template function', () => {
    const page = new NonEmptyPage();
    expect(page.template).not.toThrowError();
    expect(page.template()).toEqual("hello");
  })
});
