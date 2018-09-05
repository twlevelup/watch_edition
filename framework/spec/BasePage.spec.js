const BasePage = require('../src/BasePage');

class EmptyPage extends BasePage {

};

class NonEmptyPage extends BasePage {
  template = jest.fn()
};

describe('BasePage', () => {
  it('should throw error during render for empty page', () => {
    const page = new EmptyPage();
    expect(() => page.render()).toThrowError("Template not defined: Did you forget `template = require('path/to/template.hbs');`")
  })

  it('should call the compiled template with gettable properties', () => {
    const page = new NonEmptyPage();
    page.data = { some: 'property', randomFn: jest.fn() };
    expect(() => page.render()).not.toThrowError();
    expect(page.template).toBeCalledWith({ props: {}, data: { some: 'property' } });
  })
});
