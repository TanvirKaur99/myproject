import { Component, OnInit } from '@angular/core';

import{FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
    RegisterForm=new FormGroup({
      username:new FormControl(''),
      email:new FormControl(''),
      address:new FormControl(''),
    });
    getData(){
      console.log(this.RegisterForm.value);
    }
  }


