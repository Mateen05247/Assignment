import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit(): void {
  }
msg:string="helloworld";

receivechilddata(data: any){
  this.data=data;
}
}
