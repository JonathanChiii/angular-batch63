import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:8081/find/all");
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>("http://localhost:8081/findid/" + id);
  }

  addNewEmployee(employee:Employee):Observable<Employee>{
    console.log(employee);
    return this.http.post<Employee>("http://localhost:8081/save/", employee);
    //console.log(employee);
  }
}
