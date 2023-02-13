import { Component, OnInit } from '@angular/core';
import * as data from './users.json';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = (data as any).default
  userColumn = Object.keys(this.users[0])
  constructor() { }

  ngOnInit(): void {
    console.log(this.users)
    console.log(this.userColumn)

  }

}
