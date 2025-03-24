import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-kemas-kini',
  imports: [FontAwesomeModule],
  templateUrl: './kemas-kini.component.html',
  styleUrl: './kemas-kini.component.css'
})
export class KemasKiniComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
}
