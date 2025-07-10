// Angular imports for component creation and route handling
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile', // The custom HTML tag used to embed this component
  imports: [], // No additional modules are imported here because this example is minimal
  templateUrl: './profile.html', // External HTML file for the template
  styleUrl: './profile.css',     // External CSS file for styles
  standalone: true               // This component is standalone, meaning it doesn't require an Angular module to be used
})
export class Profile {
  // Declaring component class variables that hold the state/data
  userName: string | null = '';   // Holds the route parameter from URL (path param)
  name: string | null = '';       // Holds the query parameter (?name=value)
  routName: string | null = '';   // Holds static route data provided in the route configuration
  routeAge!:number;
  age!: number;              // Also from route data
  id!: number;
  // id: number = 0; the above id initialization can be defined like this too
  address: string = '';
  email: string = '';

  // Inject ActivatedRoute to access route-related information (query params, path params, data, etc.)
  constructor(private route: ActivatedRoute) {
    // ✅ 1. Subscribing to Query Params (e.g. /profile?name=Ram)
    this.route.queryParams.subscribe(params => {
      console.log("name: ", params['name']);
      this.id = +params['id'];
      this.name = params['name']; // Get the 'name' from query parameters
      this.age = +params['age'];
      this.address = params['address'];
      this.email = params['email'];
    });

    // ✅ 2. Subscribing to static data passed through route configuration
    this.route.data.subscribe(data => {
      this.routeAge = data['routeAge'];           // Example: data provided using route configuration like { data: { age: 25 } }
      this.routName = data['routName']; // Similar static data passed via route
    });
  }

  // ✅ 3. Accessing route parameters (path parameters) using snapshot in ngOnInit
  ngOnInit() {
    // For example, if route is like /profile/:name
    let name = this.route.snapshot.paramMap.get('name');
    console.log("name: ", name);
    this.userName = name; // Assigning path parameter to userName
  }
}
