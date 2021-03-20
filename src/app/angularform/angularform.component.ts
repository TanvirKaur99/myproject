import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angularform',
  templateUrl: './angularform.component.html',
  styleUrls: ['./angularform.component.css']
})
export class AngularformComponent implements OnInit {

 // details[];
  constructor() { }

  ngOnInit(): void {

}

  //this is for template form
  getValues(f:NgForm){
    console.log(f.value);
   // this.details=f.value;
}
//getdetails(name:HTMLInputElement,email:HTMLInputElement){
// console.log(name+ "and" +email);
}


