import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../components/employee-crud/employee.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeecrudService {
baseUrl:string="http://localhost:3000/employeedb"
  constructor(private http:HttpClient) { }

  getAllEmployee(){
    return this.http.get(this.baseUrl)
  }
  getEmployeeById(id:number){
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  deleteEmployeeById(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
  updateEmployeeById(emp:Employee){

    return this.http.put(`${this.baseUrl}/${emp.empId}`,emp)
  }
  createEmployee(emp:Employee){
    return this.http.post(this.baseUrl,emp)
  }
}
