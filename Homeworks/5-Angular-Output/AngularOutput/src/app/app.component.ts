import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTodoList: string[] = [];

  newTodoInput(input: string) {
    this.newTodoList.push(input);
  }

  onClickedInput(input: string) {
    this.newTodoList = this.newTodoList.filter((todo) => todo != input);
  }
}
