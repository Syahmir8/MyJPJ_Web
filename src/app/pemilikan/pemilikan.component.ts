import { Component } from '@angular/core';

@Component({
  selector: 'app-pemilikan',
  standalone: true,
  imports: [],
  templateUrl: './pemilikan.component.html',
  styleUrl: './pemilikan.component.css'
})
export class PemilikanComponent {
  vehicleInfo: any = null;
  lastUpdated: string = "Dijana pada 12-03-2025";

  constructor() {} // Removed HttpClient

  getCurrentDateTime(): string {
    const now = new Date();
    return `${now.toLocaleDateString('ms-MY')} ${now.toLocaleTimeString('ms-MY')}`;
  }

  refreshData() {
    const now = new Date();
    this.lastUpdated = `Dijana pada ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  }
}
