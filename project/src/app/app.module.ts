import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Directive import:
import { SimpleDirective } from './directives/simple/simple.directive';
import { CustomDirective } from './directives/custom/custom.directive';
import { Custom2Directive } from './directives/custom2/custom2.directive';
import { EventsDirective } from './directives/events/events.directive';
import { SimpleDirectiveComponent } from './components/simple-directive/simple-directive.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { Custom2DirectiveComponent } from './components/custom2-directive/custom2-directive.component';
import { EventsDirectiveComponent } from './components/events-directive/events-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    /**
     * DON'T FORGET DO DECLARATE THE DIRECTIVE 
     * THAT YOU ARE USING IN YOUR MODULE!!!!!!!
     */
    SimpleDirective,
    CustomDirective,
    Custom2Directive,
    EventsDirective,
    SimpleDirectiveComponent,
    CustomDirectiveComponent,
    Custom2DirectiveComponent,
    EventsDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
