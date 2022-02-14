<h1>Angular Directives</h1>
<p>Simple project showing what angular directives can do :)</p>
<p>
  <strong>Side note</strong>:
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
  <p appSimple>Some text.</p>
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
<hr>
<h2 id="events-in-directives">Events in Directives</h2>