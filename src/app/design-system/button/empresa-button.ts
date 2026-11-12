import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
} from '@angular/core';

import '@material/web/button/filled-button.js';

@Component({
  selector: 'empresa-button',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-filled-button
      type="button"
      [disabled]="disabled()"
      [hasIcon]="hasIcon()"
    >
      <ng-content select="[slot=icon]" />
      {{ label() }}
    </md-filled-button>
  `,
  styles: `
    :host {
      display: inline-block;
    }
  `,
})
export class EmpresaButtonComponent {
  /** Texto visible del botón. */
  readonly label = input('Botón');

  /** Indica si el botón está deshabilitado. */
  readonly disabled = input(false);

  /** Muestra un ícono inicial proyectado con `slot="icon"`. */
  readonly hasIcon = input(false);
}
