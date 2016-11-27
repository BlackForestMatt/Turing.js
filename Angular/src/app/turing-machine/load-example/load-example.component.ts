import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'load-example',
  templateUrl: './load-example.component.html',
  styleUrls: ['./load-example.component.css']
})
export class LoadExampleComponent implements OnInit {

  private example1 = "blank := _; / symbol to use as blank \n " +
    "start := s0; / set start state \n" +
    "end := {s5}; \n" +
    "/ transition function \n" +
    "s0, a -> s1, a, >; \n" +
    "s0, b -> s0, b, >; \n" +
    "s0, _ -> s5, _, <; \n" +
    "s1, a -> s1, a, >; \n" +
    "s1, b -> s2, a, <; \n" +
    "s1, _ -> s4, _, <; \n" +
    "s2, a -> s2, a, <; \n" +
    "s2, b -> s3, b, >; \n" +
    "s2, _ -> s3, _, >; \n" +
    "s3, a -> s0, b, >; \n" +
    "s4, a -> s4, _, <; \n" +
    "s4, b -> s4, b, <; \n"+
    "s4, _ -> s5, _, >; \n";

  @Output()
  onLoaded = new EventEmitter<string>(); //need for pass the data to EditorComponent

  constructor() {


  }

  ngOnInit() {
  }

  public loadExample(example: string):void {
    if(example === "Example1") { //should switch
      this.onLoaded.emit(this.example1);
    }

  }

}
