import { Directive, HostBinding, Input, OnInit } from '@angular/core';

/**
 * If you don't know what this decorator here does,
 * or what is this select key in it, check the simple directive,
 * there I explain everything you need to know about it.
 * 
 * Getting this out the way, let's continue evolving our directives! >:)
 * 
 * In the past directive, we learned how to alter our DOM elements through
 * angular directives, but that code wasn't very good, for example, if I
 * wanted a different color in other element, I would have to create another
 * directive with a different color, this is horrible! >:(
 * 
 * So in this directive, we are going to learn how to pass data for our directive!
 */
@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  /**
   * Let's start with what we know, as we want to make a custom directive
   * passing what color we want in the background, I set the initial color to be
   * transparent.
   */
  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'transparent'

  /**
   * Here's a way to get any information from the html, we use a decorator `@Input()`
   * (For more information about it, check angular-databinding) in a variable with 
   * the same name of our directive selector (in this case, 'appCustom') and call the
   * directive around '[]' in the DOM element.
   * 
   * Example: `[appCustom]="'color-example'"`
   * 
   * Note: There are other ways to use a variable with the @Input() decorator in
   * the directives, you could for example pass the directive's selector value as a
   * string in the decorator parameters, that way you can give any name you want to 
   * the variable in the directive (but I don't see why you would want to do this).
   * 
   * Example: `[appCustom]="'color-example'"`
   * 
   * In the directive:
   * `@Input('appCustom') theNameYouWant: ...`
   */
  @Input()
  appCustom: string = 'transparent'

  constructor() { }

  /**
   * Note that I implemented the OnInit interface from Angular!
   * This means that directives follow the Angular life cycle, just like a component!
   * 
   * That way, we can bind our input variable with the hostBinding variable.
   */
  ngOnInit(): void {
    this.backgroundColor = this.appCustom
  }

}
