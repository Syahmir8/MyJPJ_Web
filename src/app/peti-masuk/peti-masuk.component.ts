import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-peti-masuk',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './peti-masuk.component.html',
  styleUrls: ['./peti-masuk.component.css']
})

export class PetiMasukComponent {

  constructor(private router: Router) {}
  goToPage(route: string) {
    this.router.navigate([route]);
  }

  isRead: boolean[] = Array(10).fill(false); // Track read status for all messages
  isStarred: boolean[] = Array(10).fill(false); // Track starred status
  starredCount: number = 0; // Track the number of starred messages

  markAsRead(index: number) {
    const messageElement = document.getElementById(`message-${index}`);
    const descriptionElement = document.getElementById(`description-${index}`);

    if (messageElement && !this.isRead[index]) {
      messageElement.style.backgroundColor = '#f0f0f0'; // Change background to grey
      this.isRead[index] = true; // Mark as read

      if (descriptionElement) {
        descriptionElement.style.fontWeight = 'normal'; // Remove bold style
      }
    }
  }


  toggleStar(index: number, event: Event) {
    event.stopPropagation(); // Prevent triggering markAsRead when clicking the star

    const starElement = document.getElementById(`star-${index}`);
    if (starElement) {
      this.isStarred[index] = !this.isStarred[index]; // Toggle starred state
      starElement.textContent = this.isStarred[index] ? '★' : '☆'; // Change icon

       // Update starred count
       this.starredCount = this.isStarred.filter(status => status).length;

       // Update the "Starred (X)" tab text dynamically
      const starredTab = document.getElementById("starred-tab");
      if (starredTab) {
        starredTab.textContent = `Starred (${this.starredCount})`;
      }
    }
  }
}