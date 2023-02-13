import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  cricketer='sacHinE TenDulkar'
  salary:number=5000;
  today=new Date()
  employee={
    name:'some name',
    Id:"88",
    role:'fresher',

  }
  emparr=[
    {
      "name":"gaurav",
      "salary":"gaurav",
      "gender":"gaurav",

    }
  ]
  custnum:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
