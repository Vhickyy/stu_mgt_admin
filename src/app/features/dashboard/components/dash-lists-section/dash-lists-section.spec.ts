import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashListsSection } from './dash-lists-section';

describe('DashListsSection', () => {
  let component: DashListsSection;
  let fixture: ComponentFixture<DashListsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashListsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(DashListsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
