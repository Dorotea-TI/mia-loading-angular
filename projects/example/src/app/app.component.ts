import { Component } from '@angular/core';
import { SquaresComponent } from '@doroteati/mia-loading';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SquaresComponent],
  template: `
    <div>
      <h1>Example - Standalone</h1>
      <mia-loading-squares [color]="'#000'" [isFullPage]="false" />
    </div>
  `
})
export class AppComponent {}
