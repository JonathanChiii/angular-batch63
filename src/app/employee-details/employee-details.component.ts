import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Model/Employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id:any;
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

}
