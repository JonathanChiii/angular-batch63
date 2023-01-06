import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
   /* template:` Directive Binding
            <h1 [ngClass] = '{redBorder:true}'>Welcome to data binding</h1>
            <p [ngStyle] = "{color: 'green'}"> This is also Style</p>
            <hr/> Custome property binding<br/>
            <app-property-binding [result] = '2000'></app-property-binding>
            `
  */
  styleUrls: ['./databinding.component.css']
})
export class DataBindingComponent implements OnInit {
  test:string="Starting value from test";
  boundValue:number = 2000;
  delete:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  sayHello():void{
    alert("hello");
  }

  parentEvent(value:string){
    alert(value + "  from parent event");
  }

}
