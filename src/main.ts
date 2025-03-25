import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

<<<<<<< Updated upstream
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withComponentInputBinding())]
}).catch(err => console.error(err));
=======
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

>>>>>>> Stashed changes
