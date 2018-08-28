const framework = require('../index');
const PublicNotificationHub = require('../PublicNotificationHub');

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

  it('should export StorageHub', () => {
    expect(framework.StorageHub).toBeDefined()
    framework.StorageHub.setData('hello', 'world')
    expect(framework.StorageHub.getData('hello')).toBe('world')
  })

  it('should export NotificationHub with public methods', () => {
    expect(framework.NotificationHub).toBe(PublicNotificationHub);
  })
})
