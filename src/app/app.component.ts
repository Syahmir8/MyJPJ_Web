import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopnavComponent } from "./topnav/topnav.component";
import { FooterComponent } from './footer/footer.component';
import { PetiMasukComponent } from "./peti-masuk/peti-masuk.component";
import { LoginComponent } from "./login/login.component";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterModule, SidebarComponent, FontAwesomeModule, TopnavComponent, PetiMasukComponent, FooterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyJPJ-Web';
  isLogin = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isLogin = this.router.url === '/login';
      });
  }

  isLoginPage(): boolean {
    return this.isLogin;
  }
}