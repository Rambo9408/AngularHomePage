import { Component, ViewChild } from '@angular/core';
import { User } from '../user/user';
import { CommonModule } from '@angular/common';
import { CurrencyConvertorPipe } from '../currency-convertor-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentdetails',
  imports: [User, CommonModule, CurrencyConvertorPipe, FormsModule],
  templateUrl: './studentdetails.html',
  styleUrl: './studentdetails.css'
})
export class Studentdetails {
  // 🔹 Accessing the <app-user #user> element reference
  @ViewChild('user') User: any;
  students: { name: string; age: number; address: string }[] | undefined;//defining the student array with the data types of all its keys.

  // Initial value for input/pipe
  ammount: number = 0;//The ! (non-null assertion operator)

  //below function is used to get the data from the getStudents which was defined in the child component.ts file as an output event, 
  //and from there we are assiging value to the std.

  constructor() {}

  // 🔸 Called only once the view is fully initialized
  ngAfterViewInit() {
    console.log("User component accessed via ViewChild:", this.User.flower);
    // You can now safely interact with child component methods/properties here
  }
  handleStudent(std: { name: string; age: number; address: string }[]) {
    console.log("Students: ", std);
    this.students = std;
  }
}
