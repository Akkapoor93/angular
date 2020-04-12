import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  email;
  pass;
  constructor() { }

  ngOnInit() {
  }

  register()
  {
    console.log(this.email)
    console.log(this.pass)
  }

}
