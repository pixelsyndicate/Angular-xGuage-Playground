import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XgaugeComponent } from './xgauge.component';

describe('XgaugeComponent', () => {
  let component: XgaugeComponent;
  let fixture: ComponentFixture<XgaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XgaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XgaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
