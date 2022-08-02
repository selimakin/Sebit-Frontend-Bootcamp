import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() enteredInputList!: string[];
  @Output() clickedInput = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClickItem(item: string) {
    this.clickedInput.emit(item);
  }
}
