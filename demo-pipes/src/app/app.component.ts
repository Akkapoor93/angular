import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';

  name = 'Akul Tripathi';

  emp= ["akul", "sumit", "sudhir"]

  emps =[ 
    {"name":"akul", "city":"noida", "des":"trainer"},
    {"name":"akul", "city":"noida", "des":"trainer"},
    {"name":"akul", "city":"noida", "des":"trainer"},
    {"name":"akul", "city":"noida", "des":"trainer"},
  ]
}
