import { Component, signal } from '@angular/core';

import { EmpresaButtonComponent } from './design-system/button/empresa-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmpresaButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly contador = signal(0);

  incrementar(): void {
    this.contador.update((valor) => valor + 1);
  }
}
