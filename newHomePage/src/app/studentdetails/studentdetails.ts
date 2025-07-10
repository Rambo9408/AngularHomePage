import { Component } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-studentdetails',
  imports: [User],
  templateUrl: './studentdetails.html',
  styleUrl: './studentdetails.css'
})
export class Studentdetails {
  students: { name: string; age: number; address: string }[] | undefined;//defining the student array with the data types of all its keys.

  //below function is used to get the data from the getStudents which was defined in the child component.ts file as an output event, 
  //and from there we are assiging value to the std
  handleStudent(std: { name: string; age: number; address: string }[]) {
    console.log("Students: ", std);
    this.students = std;
  }
}
