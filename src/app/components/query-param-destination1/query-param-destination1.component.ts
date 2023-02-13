import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param-destination1',
  templateUrl: './query-param-destination1.component.html',
  styleUrls: ['./query-param-destination1.component.css']
})
export class QueryParamDestination1Component implements OnInit, AfterViewInit {

  constructor(
    private activatedparam:ActivatedRoute
  ) { }
  ngAfterViewInit(): void {
    let a ;
    this.activatedparam.params.subscribe((x)=>{
a=x.id
    })
    console.log(a)
    alert(a)
  }

  ngOnInit(): void {
  }


}
