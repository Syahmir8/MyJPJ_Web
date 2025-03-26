import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopnavComponent } from "./topnav/topnav.component";
import { FooterComponent } from './footer/footer.component';
import { DetailNegeriComponent } from "./detail-negeri/detail-negeri.component";
import { LoginComponent } from "./login/login.component";
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';



@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterModule, TopnavComponent, FooterComponent, LoginComponent],
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
