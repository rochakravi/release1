import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillMethodStatsComponent } from './fill-method-stats.component';

describe('FillMethodStatsComponent', () => {
  let component: FillMethodStatsComponent;
  let fixture: ComponentFixture<FillMethodStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillMethodStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillMethodStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
