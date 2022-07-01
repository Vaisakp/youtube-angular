import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mixed-video-card',
  templateUrl: './mixed-video-card.component.html',
  styleUrls: ['./mixed-video-card.component.css']
})
export class MixedVideoCardComponent implements OnInit {
  showActions: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
