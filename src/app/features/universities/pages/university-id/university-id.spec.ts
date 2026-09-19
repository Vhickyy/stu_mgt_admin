import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityId } from './university-id';

describe('UniversityId', () => {
  let component: UniversityId;
  let fixture: ComponentFixture<UniversityId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversityId],
    }).compileComponents();

    fixture = TestBed.createComponent(UniversityId);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
