import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  servers = [
    { instanceType: 'medium', name: 'Production' },
    { instanceType: 'large', name: 'User Database' },
    { instanceType: 'small', name: 'Development Server' },
    { instanceType: 'small', name: 'Testing Environment Server' },
  ];
}
