import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRole } from './single-role';

describe('SingleRole', () => {
  let component: SingleRole;
  let fixture: ComponentFixture<SingleRole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRole],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleRole);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
