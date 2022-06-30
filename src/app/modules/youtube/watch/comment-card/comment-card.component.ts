import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css'],
})
export class CommentCardComponent implements OnInit {
  newComment: string = '';
  constructor() {}
  totalComments = [1,2,3,4,5,6,7,8,9];
  ngOnInit(): void {}
  cancelAddComment() {
    this.newComment = "";
  }
}
