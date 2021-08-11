import { Directive, HostBinding, Input, OnInit } from '@angular/core';

/**
 * If you don't understand anything here, go to Custom Directive!
 * 
 * The idea in this directive is to show how we can pass multiple
 * values for our directive. This will be very similar to the past one.
 * 
 * So the way we gonna achieve this is very simple, we're just going to
 * create multiple variables with the `@Input()` decorator, and separate
 * them from the directive call.
 */
@Directive({
  //Showing that we can change our selector value!
  selector: '[randomNameLol]'
})
export class Custom2Directive implements OnInit {

  /**
   * This is my favorite way to do this, just one variable, no angular
   * interfaces needed, no logic, just two decorators and you are ready to go!
   */
  @Input()
  @HostBinding('style.color')
  textColor: string = 'black'

  /**
   * This also works if you prefer
   * Note that in this case, you need ngOnInit to relate the input with the
   * hostBinding!
   */
  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'transparent'
  @Input()
  background: string = ''

  /**
   * In the end, our DOM element will look like this:
   * 
   * `<div randomNameLol [textColor]="'color-example-1'" [backGround]="'color-example-2'"></div>`
   * 
   * NOTE THAT WE STILL NEED TO CALL THE DIRECTIVE SELECTOR !!!!!!!
   */

  //More information and comments about this directive in the html :)

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.background
  }

}
