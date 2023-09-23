import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `

   <b>Counter : {{counter}}</b>

   <button (click)="incrementByNumber(1)">+ 1</button>
   <button (click)="resetCounter()">reset</button>
   <button (click)="incrementByNumber(-1)">- 1</button>

  `
})
export class CounterComponent{

  public counter : number = 10;

  incrementByNumber(value:number):void{

    this.counter +=value;

  }

  resetCounter(){
    this.counter=10}

}
