import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import snackbar from 'snackbar'

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent implements OnInit {

  employeeColumn:any[] = Object.keys(new Employee(0, '', 0, '')).map((key) => {
    return {
      valueKey: key,
      displayKey: `EMPLOYEE ${key.replace('emp', '').toUpperCase()}`,
    };
  });
  p: number = 1;

  employees:Employee[]=[]
  nextId:number;
  empIdEmpMap:Map<number,Employee>=new Map<number,Employee>();

  searchText:string=''
  formEmployee:Employee= new Employee(0, '', 0, '');
  modalEmployee:Employee= new Employee(0, '', 0, '');

  showModal:boolean=false
  constructor() { }

  ngOnInit(): void {
    this.employeeColumn.push({
      valueKey: "action",
      displayKey: "Action",
    })
    this.checkEmployees()
    this.checkNextId()

    this.employees=JSON.parse(localStorage.getItem("employees"))
    this.employees.forEach(emp=>{
      this.empIdEmpMap.set(emp.empId,emp)
    })
    this.nextId= +localStorage.getItem("nextId")
    this.employees.sort((emp1,emp2)=>{
      return emp1.empId-emp2.empId;
    })
  }

  addEmployee(){
    console.table(this.empIdEmpMap)
    if(this.empIdEmpMap.get(this.formEmployee.empId)){
      this.employees=[]
      this.empIdEmpMap.set(this.formEmployee.empId,this.formEmployee)

      this.updateEmployeeList()
      // this.updateNextId()
      this.formEmployee=new Employee(this.nextId, '', 0, '');
      snackbar.show('edited');
      console.log('editing employee')

    }
    else{
      this.employees=[]
      this.employees.push(new Employee(
        this.formEmployee.empId,
        this.formEmployee.empName.toUpperCase(),
        this.formEmployee.empPhone,
        this.formEmployee.empRole.toUpperCase()
      ))

      this.updateEmployeeList()
      this.updateNextId()
      this.formEmployee=new Employee(this.nextId, '', 0, '');
      console.log(this.empIdEmpMap)
      console.log('saving employee')
      snackbar.show('Employee Saved');
    }

  }
  deleteEmployee(employee:Employee){
    console.log(employee)
    this.empIdEmpMap.delete(employee.empId)
    this.employees=[]
    this.updateEmployeeList()
  }
  editEmployeeFill(employee:Employee){
    this.formEmployee=employee
  }

  viewEmployee(employee:Employee){
this.modalEmployee=employee
  }

  updateEmployeeList(){

    this.empIdEmpMap.forEach((key)=>{
      this.employees.push(key)
    })
    localStorage.setItem("employees",JSON.stringify(this.employees))
    this.employees=JSON.parse(localStorage.getItem("employees"))
    this.employees.forEach(emp=>{
      this.empIdEmpMap.set(emp.empId,emp)
    })
    this.employees.sort((emp1,emp2)=>{
      return emp1.empId-emp2.empId;
    })

  }



  updateNextId(){
    this.nextId=this.nextId+1
    localStorage.setItem("nextId",(this.nextId).toString())
    this.nextId= +localStorage.getItem("nextId")

  }

  checkEmployees(){
    if(localStorage.getItem("employees"))
    {
      this.employees=JSON.parse(localStorage.getItem("employees"))
      return}
    else{ localStorage.setItem("employees",JSON.stringify([]))}
  }
  checkNextId(){
    if(localStorage.getItem("nextId"))
    {
      this.nextId=JSON.parse(localStorage.getItem("nextId"))
      this.formEmployee.empId=this.nextId
      return}
    else{ localStorage.setItem("nextId","100000")}
  }

  columnSort(empcol:any){

    switch (empcol.valueKey) {
      case "empId":
        this.employees.sort((a,b)=>{
          return a.empId - b.empId;
        })
        console.log('inside ')
        break;
      case "empName":
        this.employees.sort((a,b)=>{
          return a.empName > b.empName ? 1 : -1;
        })
        console.log('inside empName')
        break;
      case "empRole":
        this.employees.sort((a,b)=>{
          return a.empRole > b.empRole ? 1 : -1;
        })
        console.log('inside empRole')
        break;



    }
  }

  initScript(){
    // this.employees=[
    //   new Employee(100001,"GAURAV GAIKWAD",9999888844,"FRESHER"),
    //   new Employee(100002,"SAM K",9999888844,"FRESHER"),
    //   new Employee(100003,"NILESH A. P.",9999888844,"FRESHER")
    // ]
    // localStorage.setItem("employees",JSON.stringify(this.employees))
    // this.nextId=100004
    // this.updateEmployeeList()
    // this.updateNextId()
  }

}
