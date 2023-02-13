import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectdemo1',
  templateUrl: './subjectdemo1.component.html',
  styleUrls: ['./subjectdemo1.component.css'],
})
export class Subjectdemo1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("-------")
    this.subjectDemo();
    console.log("-------")
    this.behaviourSubject()
    console.log("-------")
    this.replaySubject()
    console.log("-------")
    this.asyncSubject()
    console.log("-------")
  }

  subjectDemo() {
    let carsPublisher = new Subject(); //special observable//hot
    carsPublisher.next('tata');
    carsPublisher.next('honda');
    carsPublisher.next('maruti');

    const carsSubscriber1 = carsPublisher.subscribe((car) => {
      console.log(car);
    });
    carsPublisher.next('tesla');
    const carsSubscriber2 = carsPublisher.subscribe((car) => {
      console.log(car);
    });

    carsPublisher.next('google car');
  }

  behaviourSubject() {
    let scorePublisher = new BehaviorSubject('0runs'); //empty array is default value
    scorePublisher.next('2runs');
    scorePublisher.next('3runs');//one before value and alll after value
    const runsSubscriber1 = scorePublisher.subscribe((car) => {
      console.log(car);
    });

    scorePublisher.next('4runs');
    const runsSubscriber2 = scorePublisher.subscribe((car) => {
      console.log(car);
    });
    scorePublisher.next('7runs');
    scorePublisher.next('12runs');
  }

  replaySubject(){
    let scorePublisher = new ReplaySubject();
    scorePublisher.next('2runs');//all data
    const runsSubscriber1 = scorePublisher.subscribe((car) => {
      console.log(car);
    });

    scorePublisher.next('4runs');
    const runsSubscriber2 = scorePublisher.subscribe((car) => {
      console.log(car);
    });
    scorePublisher.next('7runs');
    scorePublisher.next('12runs');
  }

  asyncSubject(){
    let scorePublisher = new AsyncSubject(); //last data before connection is closed
    scorePublisher.next('2runs');
    const runsSubscriber1 = scorePublisher.subscribe((car) => {
      console.log(car);
    });

    scorePublisher.next('4runs');
    const runsSubscriber2 = scorePublisher.subscribe((car) => {
      console.log(car);
    });
    scorePublisher.next('7runs');
    scorePublisher.next('12runs');
    scorePublisher.next('13runs');
    scorePublisher.complete()
  }
}
