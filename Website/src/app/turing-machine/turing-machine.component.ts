import {Component, OnInit, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import {TuringmachineService} from "../turingmachineservice.service";
import {TuringDiagram} from "../TuringDiagram";

@Component({
  selector: 'app-turing-machine',
  templateUrl: './turing-machine.component.html',
  styleUrls: ['./turing-machine.component.css']
})
export class TuringMachineComponent implements AfterViewInit,OnChanges {
  private exampleCode:string = ""; //For passsing the messages
  private currentCode:string;
  private isPlayBtnVisible = true;
  private isCompileError = false;
  private errorMessage = "";
  private stateDiagram = new Map<string,number>();
  private isSuccess = false;
  private isFail = false;


  constructor(private tsService: TuringmachineService) { }

  ngAfterViewInit() {


  }

  ngOnChanges(changes: SimpleChanges) {
}


  setExample(example:string) {
    this.exampleCode = example;
  }

  codeChange(code:string) { //for any change on the editor
    this.currentCode = code;
  }

  compile() {
    this.tsService.compile(this.currentCode);
    if(this.tsService.isCompile) {
      this.isPlayBtnVisible = false;
      this.isCompileError = false;
    } else {
      this.errorMessage = this.tsService.errorCompileMessage;
      this.isCompileError = true;
    }
  }

  public setStateDiagram(turingDiagram : TuringDiagram) {
    this.stateDiagram = turingDiagram.stateDiagram;
  }

  public setWordStatus(status:string) {
    if(status === "isSuccess") {
      this.isSuccess = true;
    } else if(status === "isFail") {
      this.isFail = true;
    }
  }






}