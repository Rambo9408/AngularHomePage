import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  signupData = {
    name: '',
    email: '',
    department: '',
    doj: '',
    address: '',
    pincode: ''
  };
  onSubmit(): void {
    console.log('Signup Form Submitted:', this.signupData);
  }
}
