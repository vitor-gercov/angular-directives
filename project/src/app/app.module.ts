import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Directive import:
import { SimpleDirective } from './directives/simple/simple.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    /**
     * DON'T FORGET DO DECLARATE THE DIRECTIVE 
     * THAT YOU ARE USING IN YOUR MODULE!!!!!!!
     */
    SimpleDirective
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
