import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pemilikan',
  imports: [],
  templateUrl: './pemilikan.component.html',
  styleUrl: './pemilikan.component.css'
})
export class PemilikanComponent {
  vehicleInfo: any = null;
  lastUpdated: string = "Dijana pada 12-03-2025";

  constructor(private http: HttpClient) {}

   refreshData() {
    const now = new Date();
    this.lastUpdated = `Dijana pada ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  }
}
