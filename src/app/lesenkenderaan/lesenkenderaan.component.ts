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
    this.lastReload = this.formatDate(now);
  }
  
  

  toggleVehicleInfo() {
    this.vehicleInfoVisible = !!this.selectedVehicle;  // Show if selectedVehicle has a value
  }

      reloadPage(): void {
        this.updateLastReload(); // Update the last reload date
        setTimeout(() => {
          window.location.reload(); // Reload the entire page
        }, 100); // Delay to ensure the date updates before reload

      }
  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`; // Format: DD-MM-YYYY
  }

  switchTab(index: number) {
    if (index === 0) {
      this.router.navigate(['/lesenMemandu']);;
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
