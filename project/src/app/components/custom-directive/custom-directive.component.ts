import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-directive-cards',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss']
})
export class CustomDirectiveComponent implements OnInit {

  @Input()
  div1color: string = 'transparent'
  card1message: string = 'I am using a Custom Directive >:)'

  @Input()
  div2color: string = 'transparent'
  card2message: string = 'Me too! :D'

  constructor() { }

  ngOnInit(): void {
  }

}
