import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyViewComponent } from './hourly-view.component';

describe('HourlyViewComponent', () => {
  let component: HourlyViewComponent;
  let fixture: ComponentFixture<HourlyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
