import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  collegeName:string= "P V G COLLEGE"
  field:string="engineering"
  twoWayVariable:string="";
  textBox:string="";
  textLenth:number=this.textBox.length;

  isHidden:boolean=false;
  checked:boolean=true;

  ab=`<p>Following college name is declared in component (ts) :: {{collegeName}}</p>`
  constructor() { }

  ngOnInit(): void {
  }
  giveAlert(data:HTMLInputElement){
    window.alert(data.value)
  }
  hide(){
    if(this.isHidden==true){
      this.isHidden=false
    }
    else if(this.isHidden==false){
      this.isHidden=true
    }
  }

}
