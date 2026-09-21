import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityTable } from './university-table';

describe('UniversityTable', () => {
  let component: UniversityTable;
  let fixture: ComponentFixture<UniversityTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversityTable],
    }).compileComponents();

    fixture = TestBed.createComponent(UniversityTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
