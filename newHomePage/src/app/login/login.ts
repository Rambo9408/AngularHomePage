import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginData = {
    email: '',
    password: '',
    designation: ''
  };
  onLogin(data: NgForm) {
    console.log("Input Field Data: ", data.value);

    console.log('Login Form Data:', this.loginData);
  }
}
