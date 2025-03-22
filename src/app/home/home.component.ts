import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSearch, faReceipt, faIdCard, faCar, faGavel,
  faShieldAlt, faInfoCircle, faCreditCard,
  faExclamationCircle, faList, faSync,
  faClipboardCheck, faFileAlt, faMotorcycle,
  faTicketAlt, faHistory, faCommentAlt,
  faCalendarAlt, faUser, faArrowRight, faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // Font Awesome Icons
  faSearch = faSearch;
  faReceipt = faReceipt;
  faIdCard = faIdCard;
  faCar = faCar;
  faGavel = faGavel;
  faShieldAlt = faShieldAlt;
  faInfoCircle = faInfoCircle;
  faCreditCard = faCreditCard;
  faExclamationCircle = faExclamationCircle;
  faList = faList;
  faSync = faSync;
  faClipboardCheck = faClipboardCheck;
  faFileAlt = faFileAlt;
  faMotorcycle = faMotorcycle;
  faTicketAlt = faTicketAlt;
  faHistory = faHistory;
  faCommentAlt = faCommentAlt;
  faCalendarAlt = faCalendarAlt;
  faUser = faUser;
  faArrowRight = faArrowRight;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  activeTabId: string = 'tab1';

  ngOnInit() {
    // Initialization logic if needed
  }

  selectTab(tabId: string) {
    this.activeTabId = tabId;
  }

  scrollNewsLeft() {
    const carousel = document.querySelector('.news-carousel') as HTMLElement;
    if (carousel) {
      carousel.scrollBy({ left: -320, behavior: 'smooth' });
    }
  }

  scrollNewsRight() {
    const carousel = document.querySelector('.news-carousel') as HTMLElement;
    if (carousel) {
      carousel.scrollBy({ left: 320, behavior: 'smooth' });
    }
  }
}