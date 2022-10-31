import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `{{result}}`,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  //import decoritor
  @Input()result:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
