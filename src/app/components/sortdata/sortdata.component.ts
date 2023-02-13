import { Component, OnInit } from '@angular/core';
import * as data from './users.json'
@Component({
  selector: 'app-sortdata',
  templateUrl: './sortdata.component.html',
  styleUrls: ['./sortdata.component.css']
})
export class SortdataComponent implements OnInit {

  users:any[]=(data as any).default
  userColumn= Object.keys(this.users[0])
  searchText:string=''
  p:number=1
  constructor() { }

  ngOnInit(): void {
  }
  sortAscending(){
    console.log("sorting data ascending")
    this.users= this.users.sort((a,b)=> b.name < a.name ? 1 : -1)
    console.log(this.users)
  }
  sortDescending(){
    console.log("sorting data descending")
    this.users= this.users.sort((a,b)=> b.name > a.name ? 1 : -1)
    console.log(this.users)
  }

}
