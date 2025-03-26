import { Component } from '@angular/core';
import { SamanListComponent } from './saman-list/saman-list.component';


@Component({
  selector: 'app-semakan-saman',
  imports: [SamanListComponent],
  templateUrl: './semakan-saman.component.html',
  styleUrl: './semakan-saman.component.css',
  standalone: true,
})
export class SemakanSamanComponent {

}
