import { Component, OnInit } from '@angular/core';
import { MathHelperService } from 'src/app/services/math-helper.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {
//service demo
  constructor(private mathService:MathHelperService) { }

  ngOnInit(): void {
    console.log(`addition is ${this.mathService.add(4,6)}`)

  }

}
