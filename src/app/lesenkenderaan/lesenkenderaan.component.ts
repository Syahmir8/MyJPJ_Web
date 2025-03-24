import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesenkenderaan',
  imports: [CommonModule,FormsModule],
  templateUrl: './lesenkenderaan.component.html',
  styleUrl: './lesenkenderaan.component.css'
  
})
export class LesenkenderaanComponent implements OnInit {
  constructor(private router: Router) {}
  selectedVehicle: string = '';
  generatedDate: string = '';
  vehicleInfoVisible: boolean = false;
  lastReload: string = '';
  private intervalId: any;

  ngOnInit(): void {
    this.updateLastReload();
  }
  updateLastReload(): void {
    const now = new Date();
    this.lastReload = now.toLocaleString('ms-MY', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }

  toggleVehicleInfo() {
    this.vehicleInfoVisible = !!this.selectedVehicle;  // Show if selectedVehicle has a value
  }

  reloadPage(): void {
    this.updateLastReload(); // ✅ Updates last reload time
  }

  formatDate(date: Date): string {
    const months = [
      "Januari", "Februari", "Mac", "April", "Mei", "Jun",
      "Julai", "Ogos", "September", "Oktober", "November", "Disember"
    ];
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  switchTab(index: number) {
    if (index === 0) {
      this.router.navigate(['/']);;
    } else if (index === 2) {
      this.router.navigate(['/pemilikan']);;
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Stop the interval when component is destroyed
    }
  }

}
