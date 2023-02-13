import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,DoCheck {

  constructor() {

   }

  ngOnChanges():void{
    console.log()
  }
  ngOnInit(): void {
  }

  ngDoCheck(): void {

  }
  ngAfterContentInit(): void {

  }
  ngAfterContentChecked(): void {

  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

  }
  ngOnDestroy(): void {

  }



}
