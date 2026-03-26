import { Component, EventEmitter, Output } from '@angular/core';


// This component sends filter values to parent
@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent {

  // Output event to send filters
  @Output() filterChange = new EventEmitter<any>();

  search = '';
  area = '';
  level = '';

  // Trigger filter update
  applyFilters() {
    this.filterChange.emit({
      search: this.search,
      area: this.area,
      level: this.level
    });
  }
}