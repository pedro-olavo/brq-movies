import { Screens } from '@routes/types';

describe('TabBar Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render All Movies Tab Button', async () => {
    await expect(
      element(by.id(`TAB-LABEL-${Screens.AllMovies}-BTN`)),
    ).toBeVisible();
  });

  it('should render Favorite Movies Tab Button', async () => {
    await expect(
      element(by.id(`TAB-LABEL-${Screens.FavoriteMovies}-BTN`)),
    ).toBeVisible();
  });
});
