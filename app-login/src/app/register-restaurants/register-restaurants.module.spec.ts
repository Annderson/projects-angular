import { RegisterRestaurantsModule } from './register-restaurants.module';

describe('RegisterRestaurantsModule', () => {
  let registerRestaurantsModule: RegisterRestaurantsModule;

  beforeEach(() => {
    registerRestaurantsModule = new RegisterRestaurantsModule();
  });

  it('should create an instance', () => {
    expect(registerRestaurantsModule).toBeTruthy();
  });
});
