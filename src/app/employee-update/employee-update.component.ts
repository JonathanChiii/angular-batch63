import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Model/Employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  id:any;
  submitted:boolean = false;
  employeeDetail:Employee = new Employee();
  
  constructor(private router:ActivatedRoute, private employeeService:EmployeeService){
      this.id = this.router.snapshot.paramMap.get("id");
      this.employeeService.getEmployeeById(this.id).subscribe(result=> {
        this.employeeDetail = result;
        console.log(result);
      })
  }

  ngOnInit(): void {
  }

  updateEmployee():void{
    this.employeeService.updateEmployee(this.employeeDetail).subscribe(
      result => {console.log(result)}
    );
    this.submitted = true;
    alert("Employee id: " + this.employeeDetail.id + " has been updated.");
  }

}
