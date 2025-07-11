import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDropdownComponent } from './navigation-dropdown-component';

describe('NavigationDropdownComponent', () => {
  let component: NavigationDropdownComponent;
  let fixture: ComponentFixture<NavigationDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
