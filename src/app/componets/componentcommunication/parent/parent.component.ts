import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentData1 = "data in parent component for child one"
  parentData2 = "data in parent component for child two"

  child2data:any=''
  constructor() { }

  ngOnInit(): void {
  }

  receiveFromChild(data:string){
    this.child2data=data
  }
}
