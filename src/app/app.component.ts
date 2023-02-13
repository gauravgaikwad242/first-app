import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //selector:'[app-root]'
  //in html <div app-root><app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles:[`
  // h3{
  //   color: blue;
  // }
  // `]
  
})
export class AppComponent {
  title = 'first-app';
}
