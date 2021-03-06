import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import {TestcomponentComponent} from "./testcomponent/testcomponent.component";
import { ContactComponent } from './contact/contact.component';
import { MyPipe } from './my.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TestcomponentComponent,
    ContactComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
