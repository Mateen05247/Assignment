import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcmpComponent } from './aboutcmp/aboutcmp.component';
import { ChildComponent } from './child/child.component';
import { ContactcmpComponent } from './contactcmp/contactcmp.component';
import { HomeComponent } from './home/home.component';
import { MenucmpComponent } from './menucmp/menucmp.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutcmpComponent},
  {path:"menu", component:MenucmpComponent},
  {path:"contact", component:ContactcmpComponent},
  {path:"ngFor", component:NgForComponent},
  {path:'switch', component:NgswitchComponent},
  {path:'if', component:NgifComponent},
  {path:'child', component:ChildComponent},
  {path:'parent', component:ParentComponent},
  {path:"", redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
