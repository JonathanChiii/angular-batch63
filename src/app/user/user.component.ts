import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message:string = "Hello From the Outside";
  //userList:User[]=[];
  userList:any;

  // First way of API Call
  // constructor(private http:HttpClient, private _userService:UserService) {
  //   http.get("https://jsonplaceholder.typicode.com/users").subscribe(result => {
  //     this.userList = result;
  //     console.log(result)
  //   
  //   });
  // }

  // Second way of API Call
  constructor(private _userService:UserService){
    this._userService.getAllUsers().subscribe( result=>{
      this.userList = result;
    })
  }


  ngOnInit(): void {
  }

}
