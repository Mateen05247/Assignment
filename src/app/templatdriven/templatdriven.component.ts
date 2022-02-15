import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatdriven',
  templateUrl: './templatdriven.component.html',
  styleUrls: ['./templatdriven.component.css']
})
export class TemplatdrivenComponent {
 title='template driven forms';
 countryList:country[]=[
  new country ("1","india"),
  new country ('2','USA'),
  new country ('3','england')
 ];
 onsubmit(contactForm: { value: any; }){
   console.log(contactForm.value);
 }
}
 export class country {
  id:string;
  name:string;
  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}

  

