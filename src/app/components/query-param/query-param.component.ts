import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-query-param',
  templateUrl: './query-param.component.html',
  styleUrls: ['./query-param.component.css']
})
export class QueryParamComponent implements OnInit {

  constructor(private router:Router) { }
//="[prodid,id]"
  ngOnInit(): void {
  }
  onClick(){
this.router.navigateByUrl("/queryparam/6")
  }

  onClick1(){
    // this.router.navigateByUrl("/queryparam/8")
    this.router.navigate(["/queryparam/8"],{queryParams:{key:"value"}})
  }

}
