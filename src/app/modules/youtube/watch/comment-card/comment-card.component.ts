import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css'],
})
export class CommentCardComponent implements OnInit {
  newComment: string = '';
  constructor() {}
  ngOnInit(): void {}
  cancelAddComment() {
    this.newComment = "";
  }
}
