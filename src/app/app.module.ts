import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutcmpComponent } from './aboutcmp/aboutcmp.component';
import { MenucmpComponent } from './menucmp/menucmp.component';
import { ContactcmpComponent } from './contactcmp/contactcmp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { DateComponent } from './date/date.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { TemplatdrivenComponent } from './templatdriven/templatdriven.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutcmpComponent,
    MenucmpComponent,
    ContactcmpComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NgForComponent,
    NgswitchComponent,
    NgifComponent,
    NgclassComponent,
    DateComponent,
    ParentComponent,
    ChildComponent,
    TemplatdrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
