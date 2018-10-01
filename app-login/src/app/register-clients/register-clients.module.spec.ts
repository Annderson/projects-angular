import { RegisterClientsModule } from './register-clients.module';

describe('RegisterClientsModule', () => {
  let registerClientsModule: RegisterClientsModule;

  beforeEach(() => {
    registerClientsModule = new RegisterClientsModule();
  });

  it('should create an instance', () => {
    expect(registerClientsModule).toBeTruthy();
  });
});
