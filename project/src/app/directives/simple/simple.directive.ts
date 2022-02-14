import { Directive, HostBinding } from '@angular/core';

/**
 * Here it is, a simple directive:
 * 
 * Notice the `@Directive{}`, this is the Angular decorator
 * imported from `@angular/core` that allows our class to behaviour
 * like a directive.
 * 
 * The `selector` key is also very important, this key's value is what defines
 * how we are going to call this directive ir our DOM element.
 * 
 * Example: In this case, the selector value is `appSimple`, so in our DOM element
 * we gonna call it like this:
 * 
 * `<div appSimple></div>`
 */
@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective {

  /**
   * So let's start with a basic directive
   * Let's say we want to change the background-color 
   * from the DOM Element through this directive
   */

  /**
   * `@HostBinding` is another decorator imported
   * from `@angular/core` that let us access 
   * some properties from our DOM element.
   * 
   * In this case, as you can see in the decorator parameter,
   * I am accessing the background-color style from the element
   * and changing its value to purple (because I love purple lol).
   * 
   * If you want to test, try changing its value to another color,
   * you will see that the first <div> in the html will change!
   * 
   * Note: The camel case is ESSENTIAL, without it, we can not access
   * most parameters, because this access by string, the decorator parameter,
   *  don't let us use "-", becareful!
   */
  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'purple'

  constructor() { }

}
