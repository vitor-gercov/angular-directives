import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Directive import:
import { SimpleDirective } from './directives/simple/simple.directive';
import { CustomDirective } from './directives/custom/custom.directive';
import { Custom2Directive } from './directives/custom2/custom2.directive';

@NgModule({
  declarations: [
    AppComponent,
    /**
     * DON'T FORGET DO DECLARATE THE DIRECTIVE 
     * THAT YOU ARE USING IN YOUR MODULE!!!!!!!
     */
    SimpleDirective,
    CustomDirective,
    Custom2Directive
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
