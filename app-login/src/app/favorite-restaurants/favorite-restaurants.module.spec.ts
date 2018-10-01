import { FavoriteRestaurantsModule } from './favorite-restaurants.module';

describe('FavoriteRestaurantsModule', () => {
  let favoriteRestaurantsModule: FavoriteRestaurantsModule;

  beforeEach(() => {
    favoriteRestaurantsModule = new FavoriteRestaurantsModule();
  });

  it('should create an instance', () => {
    expect(favoriteRestaurantsModule).toBeTruthy();
  });
});
