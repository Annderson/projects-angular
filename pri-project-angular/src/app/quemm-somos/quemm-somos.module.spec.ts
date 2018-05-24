import { QuemmSomosModule } from './quemm-somos.module';

describe('QuemmSomosModule', () => {
  let quemmSomosModule: QuemmSomosModule;

  beforeEach(() => {
    quemmSomosModule = new QuemmSomosModule();
  });

  it('should create an instance', () => {
    expect(quemmSomosModule).toBeTruthy();
  });
});
