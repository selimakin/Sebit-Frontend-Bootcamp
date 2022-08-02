import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  @Output() onButtonClicked = new EventEmitter<string>();
  newInput: string = '';

  constructor() {}

  ngOnInit(): void {}

  buttonClicked() {
    this.onButtonClicked.emit(this.newInput);
    this.newInput = '';
  }
}
