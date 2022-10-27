import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeesupportComponent } from './employeesupport/employeesupport.component';
import { ProductComponent } from './product/product.component';
import { SupportComponent } from './support/support.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

@NgModule({
  declarations: [
    HomeComponent,
    CustomerComponent,
    CustomersupportComponent,
    AboutComponent,
    ContactComponent,
    EmployeesupportComponent,
    ProductComponent,
    SupportComponent,
    UserComponent,
    UserAddComponent,
    UserDetailsComponent,
    ReactiveFormComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [HomeComponent] // this is the root component we work with
})
export class AppModule { }
