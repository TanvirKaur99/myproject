import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}
  name!:string;

  changeText(name:HTMLInputElement){
    this.name=name.value;

  }


}
