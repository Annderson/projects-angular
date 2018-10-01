import { ListRestaurantsModule } from './list-restaurants.module';

describe('ListRestaurantsModule', () => {
  let listRestaurantsModule: ListRestaurantsModule;

  beforeEach(() => {
    listRestaurantsModule = new ListRestaurantsModule();
  });

  it('should create an instance', () => {
    expect(listRestaurantsModule).toBeTruthy();
  });
});
