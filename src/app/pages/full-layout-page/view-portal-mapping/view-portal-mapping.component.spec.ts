import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPortalMappingComponent } from './view-portal-mapping.component';

describe('ViewPortalMappingComponent', () => {
  let component: ViewPortalMappingComponent;
  let fixture: ComponentFixture<ViewPortalMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPortalMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPortalMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
