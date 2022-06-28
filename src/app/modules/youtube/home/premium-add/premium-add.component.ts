import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-premium-add',
  templateUrl: './premium-add.component.html',
  styleUrls: ['./premium-add.component.css']
})
export class PremiumAddComponent implements OnInit {
  @Output() closeAddEmitter = new EventEmitter();
  constructor() { }
  ngOnInit(): void {}
  closeAdd(){
    this.closeAddEmitter.emit();
  }

}
