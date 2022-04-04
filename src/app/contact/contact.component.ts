import { Component, OnInit } from '@angular/core';
import {Feed} from './feed';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  unamePattern = "^[A-Z][a-zA-Z]*$";
  lnamePattern = "^[A-Z][a-zA-Z][0-9]*$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordpattern="(^((\\+91-?)|0)?[0-9]{10}$)";

  constructor() { }

    contact=new Feed();//code to create object from Contact class
    contactform=new FormGroup({
    firstname:new FormControl(null,[Validators.required,Validators.pattern(this.unamePattern)]),
    lastname:new FormControl(null,[Validators.required,Validators.pattern(this.unamePattern)]),
    phone:new FormControl(null,[Validators.required, Validators.pattern(this.mobnumPattern)]),
    email:new FormControl(null,[Validators.required, Validators.pattern(this.emailPattern)]),
    password:new FormControl(null,[Validators.required,Validators.pattern(this.passwordpattern)]),
  });

  submit()
  {
    //this code is written to get data from control object and set it into contact object
    this.contact.firstname=this.contactform.controls['firstname'].value;
    this.contact.lastname=this.contactform.controls['lastname'].value;
    this.contact.phone=this.contactform.controls['phone'].value;
    this.contact.email=this.contactform.controls['email'].value;
    this.contact.password=this.contactform.controls['password'].value;
    console.log(this.contact);
  }

  ngOnInit(): void {
  }

}
