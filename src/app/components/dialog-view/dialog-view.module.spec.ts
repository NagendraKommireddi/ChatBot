import { DialogViewModule } from './dialog-view.module';

describe('DialogViewModule', () => {
  let dialogViewModule: DialogViewModule;

  beforeEach(() => {
    dialogViewModule = new DialogViewModule();
  });

  it('should create an instance', () => {
    expect(dialogViewModule).toBeTruthy();
  });
});
