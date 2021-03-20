import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  btnchange=true;

  constructor() { }


  ngOnInit(): void {setTimeout(() => {this.btnchange=false;},10000);
  }

  msg!:String;
  getMessage(){
    alert('button is clicked show with alert box');
    this.msg='button is clicked shown as text below the button';
  }

}
