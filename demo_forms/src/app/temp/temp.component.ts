import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Builder } from 'protractor';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  myForm:FormGroup
  constructor(private fb:FormBuilder) {

    this.myForm= this.fb.group({

      'email': ['', [Validators.required, Validators.pattern("[a-zA-Z]{5,30}")]],
      'pass': ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  login()
  {
    console.log(this.myForm.getRawValue())
  }

}
