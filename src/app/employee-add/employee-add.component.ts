import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/Employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee:Employee = new Employee;
  submitted:boolean = false;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee():void{
    this.employeeService.addNewEmployee(this.employee).subscribe(
      result => {console.log(result)}
    );
    this.submitted=true;
    alert("Employe has been saved, your Id is: " + this.employee.id);
  }
}
