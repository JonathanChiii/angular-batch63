import { LocalizedString } from '@angular/compiler';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    this.log("Constructor");
  }
  ngOnInit(): void {
    this.log("ngOnInit")
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.log("ngOnChange");
  }
  ngDoCheck(): void {
    this.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    this.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    this.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    this.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    this.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    this.log("ngOnDestory");
  }

  private log(hook: string){
    console.log(hook);
  }
  
}
