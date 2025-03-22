


import { Component } from '@angular/core';

@Component({
  selector: 'app-kata-laluan',
  templateUrl: './kata-laluan.component.html',
  styleUrls: ['./kata-laluan.component.css']
})
export class ChangePasswordComponent {
  showPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
