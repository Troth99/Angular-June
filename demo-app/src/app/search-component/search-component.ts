import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchDataService } from '../service/search-data/search-data-service';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-component.html',
  styleUrl: './search-component.css',
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  searchTerm = '';
  filteredResult: string[] = [];

  constructor(private searchDatService: SearchDataService) {}

  ngOnInit(): void {
    this.filteredResult = [];
  }

  onSearch(value: string, event: Event) {
    event?.preventDefault();
    this.searchTerm = value.trim().toLocaleLowerCase();

    if (this.searchTerm.length === 0) {
      this.filteredResult = [];
      return;
    }
    
    this.filteredResult = this.searchDatService
    .getData()
    .filter((course) => course.toLocaleLowerCase().includes(this.searchTerm));
     this.search.emit(this.searchTerm);
  }

onSubmit(inputElement: HTMLInputElement, event: Event) {
  event.preventDefault()
  inputElement.value = ''
}
  onSelect(result: string) {
    this.searchTerm = result;
    this.filteredResult = [];
  }

  onBlur(){
    setTimeout(() => {
      this.filteredResult =[];
    }, 150)
  }
}
