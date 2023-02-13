import { Component, OnChanges, OnInit } from '@angular/core';
import { Employee } from '../employee-crud/employee.model';
import snackbar from 'snackbar';
import { EmployeecrudService } from 'src/app/services/employeecrud.service';

@Component({
  selector: 'app-employee-directory-dynamic',
  templateUrl: './employee-directory-dynamic.component.html',
  styleUrls: ['./employee-directory-dynamic.component.css'],
})
export class EmployeeDirectoryDynamicComponent implements OnInit,OnChanges {
  employeeColumn: any[] = Object.keys(new Employee(0, '', 0, '')).map((key) => {
    return {
      valueKey: key,
      displayKey: `EMPLOYEE ${key.replace('emp', '').toUpperCase()}`,
    };
  });
  p: number = 1;

  employees :any;
  nextId: number;
  empIdEmpMap: Map<number, Employee> = new Map<number, Employee>();

  searchText: string = '';
  formEmployee: Employee = new Employee(0, '', 0, '');
  modalEmployee: Employee = new Employee(0, '', 0, '');

  showModal: boolean = false;
  constructor(private employeecrud:EmployeecrudService) {}

  ngOnInit(): void {
    this.employeeColumn.push({
      valueKey: "action",
      displayKey: "Action",
    })
    this.getAllEmployee()
  }
  ngOnChanges():void{
    console.log("hi")
  }
  getAllEmployee(){
    this.employeecrud.getAllEmployee().subscribe((data:Employee[])=>{
      console.log(data)
      console.log(data[0].empId)
       this.employees=data



    },(error)=>{
      console.log(error)
    })
  }

  addEmployee() {
    this.employeecrud.createEmployee(this.formEmployee).subscribe((data)=>{
      this.getAllEmployee()
      console.log(data)
    },(error)=>{
      console.log(error)
    })

  }
  deleteEmployee(employee: Employee) {
    this.employeecrud.deleteEmployeeById(employee.empId).subscribe((data)=>{
      console.log(data)
      this.getAllEmployee()
    },(error)=>{
      console.log(error)
    })

  }
  editEmployeeFill(employee: Employee) {

  }

  viewEmployee(employee: Employee) {

  }

  updateEmployeeList() {

  }
}
