import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'events-directive-cards',
  templateUrl: './events-directive.component.html',
  styleUrls: ['./events-directive.component.scss']
})
export class EventsDirectiveComponent implements OnInit {

  @Input()
  hoverCardInitialColor: string = 'transparent'
  hoverCardText: string = 'I change my color on hover :)'
  @Input()
  hoverCardOnHoverColor: string = 'transparent'
  constructor() { }

  ngOnInit(): void {
  }

}
