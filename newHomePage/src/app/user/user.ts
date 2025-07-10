import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // @Input() user:string=''
  @Input() user!: string;// this will receive the data from the parent component.
  @Input() flower!: string;
  // 👉 @Output() is an Angular decorator that marks this property (`getStudents`) as an output binding.
  // This means it can emit data (events) from this child component to its parent component.

  @Output()

  // 👉 getStudents is the name of the output event. This can be any valid variable name,
  // and it will be used in the parent component's template like:
  // <app-user (getStudents)="handleStudent($event)"></app-user>

  getStudents =

    // 👉 new EventEmitter() is a built-in Angular class used to emit custom events.
    // When we call this.getStudents.emit(data), it sends the `data` to the parent component.
    // The parent listens for it using event binding syntax.

    new EventEmitter();
  //in this we use eventEmitter inbuild function to send data. 

  students = [
    {
      name: 'Aarav Mehta',
      age: 28,
      address: 'Mumbai, Maharashtra',
    },
    {
      name: 'Isha Kapoor',
      age: 24,
      address: 'Delhi, India',
    },
    {
      name: 'Rohan Sharma',
      age: 32,
      address: 'Pune, Maharashtra',
    },
    {
      name: 'Sneha Verma',
      age: 27,
      address: 'Lucknow, Uttar Pradesh',
    },
    {
      name: 'Arjun Desai',
      age: 35,
      address: 'Ahmedabad, Gujarat',
    },
    {
      name: 'Priya Nair',
      age: 30,
      address: 'Kochi, Kerala',
    },
    {
      name: 'Kabir Bansal',
      age: 26,
      address: 'Chandigarh',
    },
    {
      name: 'Tanya Singh',
      age: 23,
      address: 'Jaipur, Rajasthan',
    },
    {
      name: 'Dev Malhotra',
      age: 31,
      address: 'Bengaluru, Karnataka',
    },
    {
      name: 'Neha Sood',
      age: 29,
      address: 'Indore, Madhya Pradesh',
    },
  ];

  // ngOnInit(){
  // this.getStudents.emit(this.students);
  // }

  loadData() {
    this.getStudents.emit(this.students);// here we are assigning data then sending it through emmiter function
  }
}
