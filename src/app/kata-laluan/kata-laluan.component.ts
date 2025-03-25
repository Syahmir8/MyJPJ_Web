import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kata-laluan',
  standalone: true, // ✅ Tambah ini untuk standalone component
  imports: [CommonModule, ReactiveFormsModule], // ✅ Import module yang diperlukan
  templateUrl: './kata-laluan.component.html',
  styleUrls: ['./kata-laluan.component.css']
})
export class ChangePasswordComponent {
  passwordForm: FormGroup;
  submitted = false;
  successMessage = ''; 

  showPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(12),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$^*&]).+$/)
      ]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword')?.value === form.get('confirmPassword')?.value
      ? null : { passwordMismatch: true };
  }

  onSubmit() {
    this.submitted = true;

    if (this.passwordForm.invalid) {
      return;
    }

    this.successMessage = '✅ Kata laluan berjaya ditukar!';
  }

  @HostListener('document:click', ['$event'])
  onClickAnywhere(event: Event) {
    if (this.successMessage) {
      this.successMessage = '';
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleNewPassword(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
