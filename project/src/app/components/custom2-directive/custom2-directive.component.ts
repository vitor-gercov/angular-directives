import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom2-directive-cards',
  templateUrl: './custom2-directive.component.html',
  styleUrls: ['./custom2-directive.component.scss']
})
export class Custom2DirectiveComponent implements OnInit {

  @Input()
  div1color: string = 'transparent'
  div1text: string = 'Just showing another way to use custom directives'
  @Input()
  text1color: string = 'black'

  @Input()
  div2color: string = 'transparent'
  div2text: string = 'And it still works!'
  @Input()
  text2color: string = 'black'

  constructor() { }

  ngOnInit(): void {
  }


}
