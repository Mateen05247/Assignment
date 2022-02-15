import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  casting:cast[]=[
     {experience:'good',reviews:'many'},
     {experience:'best',reviews:'more'}
   ]
  movies:Movie[]=[
    {title:'bahubali',cast:'prabhas'},
    {title:'kgf',cast:'yash'},
   ]
  }
  class Movie{
    title:string="";
    cast:string="";
  } 
  class cast{
    experience:string="";
    reviews:string="";
  }
   