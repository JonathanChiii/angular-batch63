import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Model/Employee';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  id:any = 0;
  submitted:boolean = false;
  employeeList:any;
  
  constructor(private router:ActivatedRoute, public employeeService:EmployeeService){
      this.id = this.router.snapshot.paramMap.get("id");
  }

  getEmployeeList():void{
    this.employeeList = this.employeeService.getAllEmployee();
  }

  ngOnInit(): void {
  }

  deleteEmployee(id:number):void{
    this.employeeService.deleteEmployee(id).subscribe(result => this.getEmployeeList());
    this.submitted = true;
    //alert("Employee deleted.");
  }
}
