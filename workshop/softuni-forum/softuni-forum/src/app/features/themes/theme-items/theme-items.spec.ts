import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeItems } from './theme-items';

describe('ThemeItems', () => {
  let component: ThemeItems;
  let fixture: ComponentFixture<ThemeItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
