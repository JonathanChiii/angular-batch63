import { Component, OnInit } from '@angular/core';
import { Customer } from '../Model/Customer';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  CustObj:Customer = new Customer();
  homeComponent:HomeComponent = new HomeComponent();

  message:string = "From customer component"; 
  customerObj:any={
    code:1001,
    name:"king",
    amount:12345.
  }

  userDetails:any={
    userName:"username",
    password:"password",
  }

  status:string='status';

  loginMe():void{
    alert(this.userDetails.userName+"," + this.userDetails.password)
    if(this.userDetails.userName == "admin" && this.userDetails.password == "admin"){
      this.status="Login Successful"
    }else{
      this.status="Login Failed"
    }
    console.log("status: " + this.status)
  }

}
