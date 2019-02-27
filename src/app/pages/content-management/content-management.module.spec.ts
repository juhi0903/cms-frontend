import { ContentManagementModule } from './content-management.module';

describe('ContentManagementModule', () => {
  let contentManagementModule: ContentManagementModule;

  beforeEach(() => {
    contentManagementModule = new ContentManagementModule();
  });

  it('should create an instance', () => {
    expect(contentManagementModule).toBeTruthy();
  });
});
