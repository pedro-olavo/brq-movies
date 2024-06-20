describe('SignIn Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should hide logo when keyboard is visible', async () => {
    await element(by.id('USER-INPUT')).tap(); // Abre o teclado
    await expect(element(by.type('Image'))).toBeNotVisible();
  });

  it('should show error when password is not numeric', async () => {
    await element(by.id('USER-INPUT')).typeText('user');
    await element(by.id('PASSWORD-INPUT')).typeText('abc');
    await element(by.id('LOGIN-BTN')).tap();
    await expect(element(by.text('A senha deve ser numérica.'))).toBeVisible();
  });

  it('should show error for invalid login', async () => {
    await element(by.id('USER-INPUT')).typeText('user');
    await element(by.id('PASSWORD-INPUT')).typeText('124');
    await element(by.id('LOGIN-BTN')).tap();
    await expect(
      element(by.text('Combinação de login/senha inválida.')),
    ).toBeVisible();
  });

  it('should log in successfully with correct credentials', async () => {
    await element(by.id('USER-INPUT')).typeText('user');
    await element(by.id('PASSWORD-INPUT')).typeText('123');
    await element(by.id('LOGIN-BTN')).tap();
    await expect(element(by.id('LOGIN-BTN'))).not.toBeVisible();
  });
});
