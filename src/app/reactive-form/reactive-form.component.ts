import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { User } from '../Model/User';

import { UserService } from '../service/user.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  user: User = new User();
  userForm:any;
  submitted: boolean = false;
  constructor(private _formBuilder:FormBuilder,private _userService:UserService, private _router:Router) { }

  ngOnInit(): void {
    this.userForm=this._formBuilder.group({
      name:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      username:['',[Validators.required, Validators.minLength(5)]],
      phone:['',Validators.required],
      website:['',Validators.required]
    }) 
  }

  addUser(): void {
    this.submitted=true;
    if(this.userForm.valid){
      this._userService.addNewUser(this.user).subscribe(result=>{
        console.log(result);
      })
        this._router.navigate(['users']);
    }
    return;
    
}

get f(){
  return this.userForm.controls;
}

reset():void{
  this.submitted=false;
  this.userForm.reset();
}
}
