import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search-component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
it('should emit search event with correct value on onSearch call', () => {
  spyOn(component.search, 'emit');

  const testValue = 'programming';
  const fakeEvent = { preventDefault: () => {} } as Event;

  component.onSearch(testValue, fakeEvent);

  expect(component.search.emit).toHaveBeenCalledWith(testValue);
});
});
