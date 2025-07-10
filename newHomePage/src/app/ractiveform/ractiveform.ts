// Importing core features of Angular
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Importing tools needed to build reactive forms
import {
  FormControl,       // Used to create form controls (input fields)
  ReactiveFormsModule, // Module needed to use reactive forms in Angular
  FormsModule,         // Optional: Also useful for template-driven forms
  FormGroup,           // Used to group multiple form controls together
  Validators           // Provides built-in validation functions (like required, max, etc.)
} from '@angular/forms';

@Component({
  selector: 'app-ractiveform', // This is the custom HTML tag to use this component in other templates
  imports: [ReactiveFormsModule, FormsModule, CommonModule], // We import necessary modules so the form can function properly
  templateUrl: './ractiveform.html', // External HTML template for this component
  styleUrl: './ractiveform.css'      // External CSS file to style this component
})
export class Ractiveform {

  // ✅ Step 1: Create basic form controls individually (not used in FormGroup below)
  // These can be used in simple forms or separately from the full student form
  name = new FormControl('');
  password = new FormControl('');

  // ✅ Step 2: Create a FormGroup to represent the full student form
  // A FormGroup is a container that holds multiple form controls (fields)
  studentData = new FormGroup({

    // This is the 'Name' field. Initially empty. Required means user must enter something.
    stdName: new FormControl('', [Validators.required,Validators.pattern(/^[A-Za-z ]+$/) ]),

    // This is the 'Age' field. Starts with 0. 
    // Validators: field is required, and value must be between 0 and 100.
    stdAge: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(100)
    ]),

    // This is the 'Marks' field. No validation for now.
    stdMarks: new FormControl(),

    // This is the 'Email' field. 
    // It must be required, under 50 characters, and match a proper email pattern.
    stdEmail: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    ])
  });

  // ✅ Step 3: Function to run when the user submits the form
  // It simply logs the form values to the console
  onSubmit() {
    console.log("Student Data: ", this.studentData.value);
  }

  // ✅ Step 4: Function to programmatically set default values into the form
  // Can be triggered using a button to auto-fill the form
  setNewValue() {
    this.studentData.setValue({
      stdName: 'Vikas Bodhani', // setting the name field
      stdAge: 36,               // setting the age field
      stdMarks: 350,            // setting the marks field
      stdEmail: 'vikas.bodhani@gmail.com' // setting the email field
    });
  }
  
  get stdName(){
    return this.studentData.get('stdName');
  }
  get stdAge(){
    return this.studentData.get('stdAge');
  }
  get stdMarks(){
    return this.studentData.get('stdMarks');
  }
  get stdEmail(){
    return this.studentData.get('stdEmail');
  }
}