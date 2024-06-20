describe('Login and Logout Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should log in successfully', async () => {
    await element(by.id('USER-INPUT')).typeText('user');
    await element(by.id('PASSWORD-INPUT')).typeText('123');
    await element(by.id('LOGIN-BTN')).tap();
    await expect(element(by.id('MENU-BTN'))).toBeVisible();
  });

  it('should open menu and log out successfully', async () => {
    await element(by.id('MENU-BTN')).tap();
    await expect(element(by.id('LOGOUT-BTN'))).toBeVisible();
    await element(by.id('LOGOUT-BTN')).tap();
    await expect(element(by.id('LOGIN-BTN'))).toBeVisible();
  });
});
