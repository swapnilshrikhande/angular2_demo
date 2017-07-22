import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  arr:string[] = [
     "eternus"
    ,"angular"
    ,"training"
  ];

  a:string = 'demo app';
  str:string = "Hello String";

  numberOne:number=0;
  numberTwo:number=0;
  result:number=0;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
      alert("helloworld");
  }

  add(){
      this.result = this.numberOne + this.numberTwo;
  }
}
