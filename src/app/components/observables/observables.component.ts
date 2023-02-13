import { Component, OnInit } from '@angular/core';
import { Observable, publish } from 'rxjs';
import { Employee } from '../employee-directory/employee-model';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  dataPublish:Observable<any>;
  constructor() { }

  ngOnInit(): void {

    this.dataPublish = new Observable((publish)=>{
      publish.next(new Employee("1","xyz",999,"a")),
      publish.next(new Employee("2","xyz",999,"a")),
      publish.next(new Employee("3","xyz",999,"a")),
      publish.next(new Employee("4","xyz",999,"a")),
      publish.next(new Employee("5","xyz",999,"a")),
      publish.complete()
    });
  }
  getDataPackets(){
    this.dataPublish.subscribe({
      next:(data:any)=>{console.log(data);
      },
      error:(err:any)=>{console.log(err);
      },
      complete:()=>{
        window.alert("data fetched successfully")
      }
    })
  }

}
