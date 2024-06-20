describe('View Movie Details', () => {
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

  it('should see movies details successfully', async () => {
    await element(by.id('MOVIE-0-BTN')).tap();
    await expect(element(by.text('SINOPSE'))).toBeVisible();
  });
});
