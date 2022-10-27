import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user:User = new User;
  submitted:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addUser():void{
    this.submitted=true;
    console.log(this.user);
  }
}
