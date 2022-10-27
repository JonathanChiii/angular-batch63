import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message:string = "Hello Everyone";
  userList:User[]=[];

  constructor(private http:HttpClient) {
    http.get("https://jsonplaceholder.typicode.com/users").subscribe(result => console.log(result));
  }

  ngOnInit(): void {
  }

}
