import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() fromparent:string | undefined;
@Output() outputfromchild:EventEmitter<string>=new EventEmitter();
Outputtext:string="msg from child";
senddatatoparent(){
  this.outputfromchild.emit(this.Outputtext);
}

}
