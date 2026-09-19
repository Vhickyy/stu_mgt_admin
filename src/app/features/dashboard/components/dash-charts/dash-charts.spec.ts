import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCharts } from './dash-charts';

describe('DashCharts', () => {
  let component: DashCharts;
  let fixture: ComponentFixture<DashCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashCharts],
    }).compileComponents();

    fixture = TestBed.createComponent(DashCharts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
