import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../Model/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList:any;
  name = "Employee";

  constructor(private _empService:EmployeeService) {
    this._empService.getAllEmployee().subscribe(result=>{
      this.employeeList = result;
    })
  }

  ngOnInit(): void {
  }

}
