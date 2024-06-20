import { Screens } from '@routes/types';

describe('Add/Remove favorite movie', () => {
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

  it('Add/Remove favorite movie', async () => {
    await element(by.id('MOVIE-0-BTN')).tap();
    await expect(element(by.text('SINOPSE'))).toBeVisible();
    await element(by.id('TOGGLE-FAVORITE-MOVIE-BTN')).tap();
    await element(by.id('BACK-BTN')).tap();
    await element(by.id(`TAB-LABEL-${Screens.FavoriteMovies}-BTN`)).tap();
    await expect(element(by.id('MOVIE-0-BTN'))).toBeVisible();
    await element(by.id('MOVIE-0-BTN')).tap();
    await element(by.id('TOGGLE-FAVORITE-MOVIE-BTN')).tap();
    await element(by.id('BACK-BTN')).tap();
    await expect(element(by.id('MOVIE-0-BTN'))).not.toBeVisible();
  });
});
