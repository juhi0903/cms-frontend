import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlGamesExcelComponent } from './html-games-excel.component';

describe('HtmlGamesExcelComponent', () => {
  let component: HtmlGamesExcelComponent;
  let fixture: ComponentFixture<HtmlGamesExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlGamesExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlGamesExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
