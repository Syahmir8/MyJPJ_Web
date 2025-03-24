import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopnavComponent } from "./topnav/topnav.component";
import { FooterComponent } from './footer/footer.component';
import { PetiMasukComponent } from "./peti-masuk/peti-masuk.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, SidebarComponent, FontAwesomeModule, TopnavComponent,PetiMasukComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyJPJ-Web';
}
