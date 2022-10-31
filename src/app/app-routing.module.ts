import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeesupportComponent } from './employeesupport/employeesupport.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { ProductComponent } from './product/product.component';
import { SupportComponent } from './support/support.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DataBindingComponent } from './databinding/databinding.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"contact", component:ContactComponent},
  {path:"user", component:UserComponent},
  {path:"about", component:AboutComponent},
  {path:"customer", component:CustomerComponent},
  {path:"product", component:ProductComponent},
  {path:"user/add", component:UserAddComponent},
  {path:"user/:id", component:UserDetailsComponent},
  {path:"support", component:SupportComponent, children:[
    {path:"", component:EmployeesupportComponent},
    {path:"employee", component:EmployeesupportComponent},
    {path:"customer", component:CustomersupportComponent}
  ]},
  {path: "reactiveform", component: ReactiveFormComponent},
  {path: "employee",component:EmployeeComponent},
  {path: "employee/add",component:EmployeeAddComponent},
  {path:"employee/:id", component:EmployeeDetailsComponent},
  {path:"databinding", component:DataBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
