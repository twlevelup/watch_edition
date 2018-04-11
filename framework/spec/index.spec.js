const framework = require('../index');

describe('framework exports', () => {
  it('should export App', () => {
    expect(framework.App).toBeDefined()
  })

  it('should export BasePage', () => {
    expect(framework.BasePage).toBeDefined()
  })

  it('should export BaseNotification', () => {
    expect(framework.BaseNotification).toBeDefined()
  })
})
