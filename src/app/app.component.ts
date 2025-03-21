import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jpjDesk';
}
