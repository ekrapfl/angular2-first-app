import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <fa-databinding></fa-databinding>
  `
})
export class AppComponent {
  title = 'ITS ALIVE!';
}
