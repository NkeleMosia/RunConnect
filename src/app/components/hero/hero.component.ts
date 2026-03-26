import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

 // Scroll to discovery section
scrollToDiscover() {
  const section = document.getElementById('discover');

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
}