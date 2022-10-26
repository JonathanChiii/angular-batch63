import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesupportComponent } from './employeesupport.component';

describe('EmployeesupportComponent', () => {
  let component: EmployeesupportComponent;
  let fixture: ComponentFixture<EmployeesupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
