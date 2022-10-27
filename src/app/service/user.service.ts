import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  message:string = "Hello from the outside";

  constructor(private httppp:HttpClient){
  }


  display():void{
    alert("Welcome to service");
  }
 
  //Observable is an array of users
  getAllUsers():Observable<User[]>{
    return this.httppp.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
  
  getUserById(id:number):Observable<User>{
    return this.httppp.get<User>("https://jsonplaceholder.typicode.com/users/" + id);
  }

  addNewUser(user:User):Observable<User>{
    console.log(user);
    return this.httppp.post<User>("https://jsonplaceholder.typicode.com/users", user);
  }

}





//constructor(private http:HttpClient) {
//  http.get("https://jsonplaceholder.typicode.com/users").subscribe(result => {
//    this.userList = result;
//    console.log(result)
//  });
//}