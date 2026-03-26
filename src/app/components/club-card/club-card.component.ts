import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Club } from '../../models/club.model';

@Component({
  selector: 'app-club-card',
  templateUrl: './club-card.component.html',
  styleUrls: ['./club-card.component.css']
})
export class ClubCardComponent {

  // Receive club from parent
  @Input() club!: Club;

  // Send selected club back to parent
  @Output() selectClub = new EventEmitter<Club>();

  // Trigger when button clicked
  viewDetails() {
    this.selectClub.emit(this.club);
  }
}