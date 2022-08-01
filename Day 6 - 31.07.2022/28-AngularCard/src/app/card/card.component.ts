import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  // @Input() titleChild: string = '';
  // @Input() imageUrlChild: string = '';
  // @Input() usernameChild: string = '';
  // @Input() contentChild: string = '';
  @Input() post: Card = {
    content: '',
    imageUrl: '',
    title: '',
    username: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
