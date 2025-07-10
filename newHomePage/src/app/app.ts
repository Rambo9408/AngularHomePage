import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Header, About, CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  Employees = [
    { id: 1, name: 'Ram Mishra', age: 28, address: 'Delhi, India', email: 'ram.mishra@example.com' },
    { id: 2, name: 'Sita Verma', age: 26, address: 'Mumbai, India', email: 'sita.verma@example.com' },
    { id: 3, name: 'John Smith', age: 35, address: 'New York, USA', email: 'john.smith@example.com' },
    { id: 4, name: 'Jane Doe', age: 30, address: 'London, UK', email: 'jane.doe@example.com' },
    { id: 5, name: 'Amit Shah', age: 32, address: 'Ahmedabad, India', email: 'amit.shah@example.com' },
    { id: 6, name: 'Priya Gupta', age: 24, address: 'Pune, India', email: 'priya.gupta@example.com' },
    { id: 7, name: 'Rahul Roy', age: 29, address: 'Bangalore, India', email: 'rahul.roy@example.com' },
    { id: 8, name: 'Emily Davis', age: 27, address: 'Toronto, Canada', email: 'emily.davis@example.com' },
    { id: 9, name: 'Mohit Kumar', age: 33, address: 'Chennai, India', email: 'mohit.kumar@example.com' },
    { id: 10, name: 'Neha Rani', age: 31, address: 'Kolkata, India', email: 'neha.rani@example.com' },
    { id: 11, name: 'Robert Brown', age: 36, address: 'Chicago, USA', email: 'robert.brown@example.com' },
    { id: 12, name: 'Linda White', age: 34, address: 'Paris, France', email: 'linda.white@example.com' },
    { id: 13, name: 'Sunil Joshi', age: 38, address: 'Lucknow, India', email: 'sunil.joshi@example.com' },
    { id: 14, name: 'Anjali Mehra', age: 25, address: 'Indore, India', email: 'anjali.mehra@example.com' },
    { id: 15, name: 'Daniel Lee', age: 37, address: 'Seoul, South Korea', email: 'daniel.lee@example.com' },
    { id: 16, name: 'Ravi Yadav', age: 28, address: 'Jaipur, India', email: 'ravi.yadav@example.com' },
    { id: 17, name: 'Kavita Singh', age: 29, address: 'Patna, India', email: 'kavita.singh@example.com' },
    { id: 18, name: 'James Wilson', age: 40, address: 'Berlin, Germany', email: 'james.wilson@example.com' },
    { id: 19, name: 'Meena Das', age: 27, address: 'Bhubaneswar, India', email: 'meena.das@example.com' },
    { id: 20, name: 'Arjun Nair', age: 26, address: 'Thiruvananthapuram, India', email: 'arjun.nair@example.com' }
  ];
}
