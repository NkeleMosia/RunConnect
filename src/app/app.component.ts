import { Component } from '@angular/core';
import { CLUBS } from './data/clubs.data';
import { Club } from './models/club.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  // All clubs (original data)
  clubs: Club[] = CLUBS;

  // Filtered clubs (what user sees)
  filteredClubs: Club[] = CLUBS;

  // Store selected club for modal
  selectedClub: Club | null = null;

  // Handle filters coming from search component
  onFilterChange(filters: any) {

    this.filteredClubs = this.clubs.filter(club => {
      return (
        // Search by name
        club.name.toLowerCase().includes(filters.search.toLowerCase()) &&

        // Filter by area
        (!filters.area || club.area === filters.area) &&

        // Filter by level
        (!filters.level || club.level === filters.level)
      );
    });
  }

  // Open modal
  openClub(club: Club) {
    this.selectedClub = club;
  }

  // Close modal
  closeModal() {
    this.selectedClub = null;
  }
}