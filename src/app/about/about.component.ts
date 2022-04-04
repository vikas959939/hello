import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  EmpDetails= [
    {
      'name':'vikas',
      'profile':'manager',
      'email':'vikas@gmail.com',
      'contact':132465789
    },

    {
      'name':'John',
      'profile':'cook',
      'email':'John@gmail.com',
      'contact':132465789
    },

    {
      'name':'vikram',
      'profile':'accounts',
      'email':'vikram@gmail.com',
      'contact':132465789
    },
    {
      'name':'manish',
      'profile':'cook',
      'email':'manish@gmail.com',
      'contact':132465789
    },
    {
      'name':'vineet',
      'profile':'cashier',
      'email':'vineet@gmail.com',
      'contact':132465789
    },
    {
      'name':'ashu',
      'profile':'cook',
      'email':'ashu@gmail.com',
      'contact':132465789
    },
    {
      'name':'vikas',
      'profile':'manager',
      'email':'vikas@gmail.com',
      'contact':132465789
    },
    {
      'name':'hariom',
      'profile':'manager',
      'email':'hariom@gmail.com',
      'contact':132465789
    },
    {
      'name':'harsh',
      'profile':'manager',
      'email':'harsh@gmail.com',
      'contact':132465789
    },
  
  


  ]

}
