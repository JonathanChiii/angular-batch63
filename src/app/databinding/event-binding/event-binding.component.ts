import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  //templateUrl: './event-binding.component.html',
  template: `<button (click) = 'childEvent()'> Custom event Click</button>`,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  @Output('clickable') clicked = new EventEmitter<string>(); // Event definition with data type
  //clickable is custom event
  constructor() { }

  ngOnInit(): void {
  }

  childEvent():void{
    //alert("Custom child event");
    this.clicked.emit('Clicked emited.'); // trigger custom event
  }
}
