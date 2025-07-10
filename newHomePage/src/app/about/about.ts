import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
    
  @Input() employee!: { id: number; name: string; age: number; address: string; email: string };
}
