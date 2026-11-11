import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
} from '@angular/core';

import '@material/web/button/filled-button.js';

@Component({
  selector: 'ds-button',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-filled-button
      type="button"
      [disabled]="disabled()"
    >
      {{ label() }}
    </md-filled-button>
  `,
  styles: `
    :host {
      display: inline-block;
    }
  `,
})
export class DsButtonComponent {
  /** Texto visible del botón. */
  readonly label = input('Botón');

  /** Indica si el botón está deshabilitado. */
  readonly disabled = input(false);
}
