import { Component, signal } from '@angular/core';

import { DsButtonComponent } from './design-system/button/ds-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DsButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly contador = signal(0);

  incrementar(): void {
    this.contador.update((valor) => valor + 1);
  }
}
