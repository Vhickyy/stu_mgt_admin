import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequest } from './admin-request';

describe('AdminRequest', () => {
  let component: AdminRequest;
  let fixture: ComponentFixture<AdminRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRequest],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
