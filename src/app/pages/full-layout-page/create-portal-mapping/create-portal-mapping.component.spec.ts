import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePortalMappingComponent } from './create-portal-mapping.component';

describe('CreatePortalMappingComponent', () => {
  let component: CreatePortalMappingComponent;
  let fixture: ComponentFixture<CreatePortalMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePortalMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePortalMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
