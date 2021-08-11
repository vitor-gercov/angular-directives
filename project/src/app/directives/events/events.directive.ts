import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

/**
 * This directive only teaches what @HostListener() does,
 * if you don't understand anything here besides it, go to Simple Directive!
 */
@Directive({
  selector: '[appEvents]'
})
export class EventsDirective implements OnInit {

  /**
   * In this directive, I am going to show how to use `@HostListener()`,
   * another important decorator from `@angular/core` wich helps us catching
   * events in the DOM element.
   * 
   * For our example, let's make a directive that changes the background-color
   * of the DOM element on hover, pretty cool huh?
   * 
   * We start declaring 3 variables:
   *
   *  -one will define the initial color;
   * 
   * -one will define the color on hover;
   * 
   * -the last one will set these colors using @HostBinding(), as we learned
   * on custom directives. 
   */
  @HostBinding('style.backgroundColor')
  backGroundColor: string = ''
  @Input()
  originalColor: string = ''  
  @Input()
  hoverColor: string = ''

  constructor() { }

  /**
   * Note: We are using the OnInit Angular interface to set the initial background-color
   * of our element based on which color the developer defined in the DOM element.
   */
  ngOnInit(): void {
    this.backGroundColor = this.originalColor
  }

  /**
   * And this is the functions containing the decorator `@HostListener()`
   * In it, we can pass a string as a parameter wich will define in what DOM event
   * the decorator's function will run.
   * In this case, we want the background-color to change on hover, so the event
   * will be `mouseenter`.
   * 
   * A complete list of DOM events can be found in {@link https://www.w3schools.com/jsref/dom_obj_event.asp}
   */
  @HostListener('mouseenter')
  mouseHover(): void {
    this.backGroundColor = this.hoverColor
  }
  /**
   * Event function to change the background-color to its original state
   * when the mouse cursor leave the element.
   */
  @HostListener('mouseleave')
  mouseLeave(): void {
    this.backGroundColor = this.originalColor
  }
}
