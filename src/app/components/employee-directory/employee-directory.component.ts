import { Component, OnInit } from '@angular/core';
import { elementAt, map } from 'rxjs';
import { Employee } from './employee-model';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.css'],
})
export class EmployeeDirectoryComponent implements OnInit {
  employees: Employee[] = [];
  emp: Employee = new Employee('', '', 0, '');
  employeeDetailsColumn = Object.keys(this.emp).map((key) => {
    return {
      valueKey: key,
      displayKey: `EMPLOYEE ${key.replace('emp', '').toUpperCase()}`,
    };
  });
  nextId:number=1005;
  formEmployee: Employee = new Employee('', '', 0, '');
  empoyeeNameIDHash: string[] = this.employees.map((emp) => {
    return `${emp.empId}$${emp.empName}`;
  });
  p: number = 1;
  constructor() {}

  ngOnInit(): void {
    this.employees.push(
      new Employee('1001GAU', 'Gaurav Gaikwad', 1111000022, 'Fresher'),
      new Employee('1002NIL', 'Nilesh M', 166600022, 'Fresher'),
      new Employee('1003NIS', 'Nisart Deore', 115550022, 'Senior'),
      new Employee('1004SHU', 'Shubham P', 944473, 'Senior')
    );
  }

  submitEmployee() {
    if (
      !this.formEmployee.empPhone ||

      !this.formEmployee.empName ||
      !this.formEmployee.empRole ||

      this.formEmployee.empPhone == 0 ||
      this.formEmployee.empName == '' ||
      this.formEmployee.empRole == ''
    ) {
      alert('details missing please check');
      return;
    }
    console.log(

    );

    if(this.employees.some(emp=>{
      return emp.empId == this.formEmployee.empId
    })){
      let empEdit : Employee =  this.employees.find((emp) => {
        return emp.empId == this.formEmployee.empId;
      })
      empEdit.empName=this.formEmployee.empName.toUpperCase()
      empEdit.empPhone=this.formEmployee.empPhone
      empEdit.empRole=this.formEmployee.empRole.toLowerCase()
      this.formEmployee = new Employee('', '', 0, '');
      return;


    }

    let employeeDao =new Employee('', '', 0, '');
    employeeDao.empId=this.nextId+this.formEmployee.empName.substring(0,3).toUpperCase()
    this.nextId++
    employeeDao.empName=this.formEmployee.empName.toUpperCase()
    employeeDao.empPhone=this.formEmployee.empPhone
    employeeDao.empRole=this.formEmployee.empRole.toLowerCase()

    console.table(this.formEmployee);
    console.table(employeeDao);
    this.employees.push(employeeDao);
    this.formEmployee = new Employee('', '', 0, '');
  }
  editEmployee(employee: Employee) {
    this.formEmployee = employee;
    console.log(employee);
  }
  deleteEmployee(employee:Employee){
    let deleteEmp= this.employees.find((emp) => {
      return emp.empId == employee.empId;
    })
    console.log(deleteEmp)
   delete this.employees[ this.employees.indexOf(employee)]
  }
}
