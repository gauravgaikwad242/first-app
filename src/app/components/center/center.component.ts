import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {



  hideDataBindingComp:boolean=true;
  hideDirectiveComp:boolean=true;
  hideProductComp:boolean=true;
  hideReadJsonComp:boolean=true;
  hidengcontentComp:boolean=true;
  hideSortDataComp:boolean=true;
  hideEmployeeDirComp:boolean=true;
  hidePipesComp:boolean=true;
  hideEmpCrudComp:boolean=true;
  hideParentComp:boolean=true;
  hideserviceComp:boolean=true;
  hidedynamicdirectory:boolean=true;
  hideobservablecomp:boolean=false;
  hidesubjectcomp:boolean=false;
  hidemessagecomp:boolean=false;
  hideform1comp:boolean=false;
  hideTemplatecomp:boolean=false;

  buttons:any=[
    {
      "buttonName":"Databinding",
      "componentLink":"/databinding"
    },
    {
      "buttonName":"Directive",
      "componentLink":"directive"
    },
    {
      "buttonName":"Observable",
      "componentLink":"observable"
    },
    {
      "buttonName":"Product List",
      "componentLink":"cart"
    },
    {
      "buttonName":"Read Json",
      "componentLink":"jsonread"
    },
    {
      "buttonName":"Content",
      "componentLink":"content"
    },
    {
      "buttonName":"Sorting Data",
      "componentLink":"sortdata"
    },
    {
      "buttonName":"Query Source",
      "componentLink":"queryparamsource"
    },
    {
      "buttonName":"Protected Route",
      "componentLink":"protectedRoute"
    },
    {
      "buttonName":"Route Resolver",
      "componentLink":"routeresolver"
    },
    {
      "buttonName":"Template Form",
      "componentLink":"formcomponent"
    },
    {
      "buttonName":"Customers Module",
      "componentLink":"customers"
    },
    {
      "buttonName":"Grocery Module",
      "componentLink":"grocery"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }



}
