import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-directive-card',
  templateUrl: './simple-directive.component.html',
  styleUrls: ['./simple-directive.component.scss']
})
export class SimpleDirectiveComponent implements OnInit {

  cardMessage: string = 'I am a div, and I am using a Simple Directive :)'

  constructor() { }

  ngOnInit(): void {
  }

}
