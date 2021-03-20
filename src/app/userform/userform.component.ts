import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  userInput!:string;

  address!:string;
  name!:string;
  email!:string;
 // enteredContent='Some content';// default written text provided by us
  enterName='name here';//default name
  enterEmail='email here';//default email
  enteraddress='address here';//default address

  getValue(msg:HTMLInputElement){
    console.log(msg.value);
    this.userInput=msg.value;
                               }


   getmsg(){
this.address=this.enteraddress;//whatever user will provide stored here
this.name=this.enterName;
this.email=this.enterEmail;

           }

}
