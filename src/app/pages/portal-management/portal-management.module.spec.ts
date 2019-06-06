import { PortalManagementModule } from './portal-management.module';

describe('PortalManagementModule', () => {
  let portalManagementModule: PortalManagementModule;

  beforeEach(() => {
    portalManagementModule = new PortalManagementModule();
  });

  it('should create an instance', () => {
    expect(portalManagementModule).toBeTruthy();
  });
});
