import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-reply',
  templateUrl: './chat-reply.component.html',
  styleUrls: ['./chat-reply.component.css']
})
export class ChatReplyComponent implements OnInit {
  expandChatReply: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showHideChatReply(){
    this.expandChatReply = !this.expandChatReply
  }
}
