import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // @Input() user:string=''
  @Input() user!:string;// this will receive the data from the parent component.
  @Input() flower!:string;

}
