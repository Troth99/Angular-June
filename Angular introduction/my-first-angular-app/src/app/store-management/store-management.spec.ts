import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreManagement } from './store-management';

describe('StoreManagement', () => {
  let component: StoreManagement;
  let fixture: ComponentFixture<StoreManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
