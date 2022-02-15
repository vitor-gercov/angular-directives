<h1>Angular Directives</h1>
<p>Simple project showing what angular directives can do :)</p>
<h3>Side note:</h3>
<p>
  This project has the only purpose to share practical knowledge in the topic, I still am a junior developer,
  and this project will not contain deep knowledge and uncommon examples with hacker's stuff.
</p>
<p>
IF YOU ARE HERE BECAUSE YOU WANT TO LEARN HOW TO LOAD COMPONENTS DYNAMICALLY WITH DIRECTIVES, THIS IS NOT THE PLACE, I WILL MAKE ANOTHER PROJECT TO TEACH THIS BECAUSE I THINK THIS IS A VERY IMPORTANT AND USEFUL KNOWLEDGE.
</p>
<p>The project contains different examples from the read me.</p>
<p>
  If you notice something wrong in the project or have any questions, I would be happy to
  help you! Just contact me through here in the issues section or send me an email.
</p>
<p>E-mail: <a>gercovvitor@gmail.com</a></p>
<hr>
<h2>Summary</h2>
<ul>
  <li><a href="#creating-directives-via-cli">Creating Directives via CLI</a></li>
  <li><a href="#simple-directives">Simple Directives</a></li>
  <li><a href="#custom-directives">Custom Directives</a></li>
  <li><a href="#events-in-directives">Events in Directives</a></li>
  <li><a href="#conclusion">Conclusion</a></li>
</ul>
<hr>
<h2 id="creating-directives-via-cli">Creating Directives via CLI</h2>
<p>For this, you will obviously need the Angular CLI globally installed in you computer.</p>
<code>
  npm install -g @angular/cli
</code>
<p>Start a new project and open the project's folder in a terminal.</p>
<p>To create a new project via Angular CLI:</p>
<code>
  ng new project-name
</code>
<p>In the terminal, you can run your project with the command down below.</p>
<code>
  ng serve
</code>
<p>You can open a new terminal in the same folder to use the Angular CLI, this is the command to create a new directive.
</p>
<code>
  ng generate directive directive-name
</code>
<p>or:</p>
<code>
  ng g d directive-name
</code>
<p>As everything in the Angular CLI, you can pass the path you want in the command</p>
<p>Example: Command for the Angular CLI create a my-directive folder into a directives folder, into a shared folder,
  into the app folder of the project.</p>
<code>
  ng g d shared/directives/my-directive
</code>
<hr>
<h2 id="simple-directives">Simple Directives</h2>
<p>Every directive use the <strong>Directive</strong> decorator, imported from <strong>@angular/core</strong>.</p>
<p>The decorator is used to define a directive, and it takes a metadata object as a parameter.</p>
<p>The metadata object needs the <strong>selector</strong> property, wich is a string containing the name of the
  directive, this will be the value that you will need to pass in the HTML element.
  Pro tip: Do not repeat directives names.</p>
<pre>
<code>
import { Directive } from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective {

  constructor() { }
}
</code>
</pre>
<label>In the HTML:</label>
<code>
  &lt;p appSimple&gt;Some text.&lt;/p&gt;
</code>
<p>Another important decorator is the <strong>HostBinding</strong> decorator, wich will indicate what your directive
  will change in the HTML native element (Of course, if your directive changes anything visually only :P).</p>
<p>The following example, I set the background color of the HTML element to be purple.</p>
<pre>
<code>
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective {

  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'purple'

  constructor() { }
}
</code>
</pre>
<hr>
<h2 id="custom-directives">Custom Directives</h2>
<p>You can have variables in the directive class with the Input decorator, that way you can pass dynamic values to your directive!</p>
<p>In the following example, I have a variable with the Input decorator to change the div color dynamically.</p>
<pre>
<code>
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective {

  @Input()
  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'purple' //purple will be the default value if you do not pass anything to the Input variable.

  constructor() { }
}
</code>
</pre>
<p>In the HTML:</p>
<pre>
<code>
  &lt;div appSimple backgroundColor="blue"&gt;Some text.&lt;/div&gt;
  //this will change the background color from purple to blue!
</code>
</pre>
<p>You can also pass multiple parameters to your directive.</p>
<pre>
<code>
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective {

  @Input()
  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'purple' //purple will be the default value if you do not pass anything to the Input variable.

  @Input()
  @HostBinding('style.color')
  textColor: string = 'white'

  constructor() { }
}
</code>
</pre>
<p>In the HTML:</p>
<pre>
<code>
&lt;div appSimple backgroundColor="yellow" textColor="purple"&gt;Go Lakers!&lt;/div&gt;
</code>
</pre>
<hr>
<h2 id="events-in-directives">Events in Directives</h2>
<p>We can use the HostListener decorator to bind a function to some event on the element with the directive.</p>
<p>The HostListener decorator is imported from @angular/core and it receives a string containing the DOM event as a parameter.</p>
<p>For a full DOM events list, check <a href="https://developer.mozilla.org/pt-BR/docs/Web/Events">this</a> out!</p>
<p>In the following example, I change the div's background color from white to pink on hover.</p>
<pre>
<code>
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective {

  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'white'
  
  originalColor: string = 'white'
  hoverColor: string = 'pink'

  constructor() { }

  @HostListener('mouseenter')
  mouseHover(): void {
    this.backGroundColor = this.hoverColor
  }

  @HostListener('mouseleave')
  mouseLeave(): void {
    this.backGroundColor = this.originalColor
  }
}
</code>
</pre>
<p>In the HTML:</p>
<pre>
<code>
&lt;div appSimple&gt;I blush when you hover me :3&lt;/div&gt;
</code>
</pre>
<hr>
<h2 id="conclusion">Conclusion</h2>
<p>Angular directives has a lot of visual applications and can help your life a lot! Don't sleep on it!</p>
<p>If you want to know more about directives, you can go to the <a href="https://angular.io/api/core/Directive">
Angular documentation</a>, you will find literally everything there.</p>
<p>Thanks for your time, if want to talk with me about coding, games or anything, you can send me an e-mail :)</p>
<hr>
<p>Other projects: Soon I will leave the link to my other projects here, when they are done. For now you can check my <a href="https://github.com/vitor-gercov">profile</a>;)</p>
