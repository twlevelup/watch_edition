const notifications = require('./notifications');

describe('notifications', () => {
  it('all notifications should exist', () => {
    expect(notifications).toHaveLength(2);
  });
});
