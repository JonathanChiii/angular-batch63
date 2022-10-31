import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  //templateUrl: './event-binding.component.html',
  template: `<button (click) = 'onClickedEvent()'> Custom event Click</button>`,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  @Output('clickable') clicked = new EventEmitter<string>(); // Event definition with data type
  //clickable is custom event
  constructor() { }

  ngOnInit(): void {
  }

  onClickedEvent():void{
    alert("Event binding worked from event bindind!");
    this.clicked.emit('$event custom event fired'); // trigger custom event
  }
}
