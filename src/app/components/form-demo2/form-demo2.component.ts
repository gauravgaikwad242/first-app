import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  templateUrl: './form-demo2.component.html',
  styleUrls: ['./form-demo2.component.css']
})
export class FormDemo2Component implements OnInit {

  user={
    fname:"gaurav",
    lname:"gaikwad"
  }
  constructor() { }

  ngOnInit(): void {
  }
  submitMyForm(myForm:NgForm){
    console.log(myForm)
  }

}
