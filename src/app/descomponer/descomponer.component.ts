import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-descomponer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './descomponer.component.html',
  styleUrl: './descomponer.component.css'
})
export class DescomponerComponent {
  numero: number | null = null;
  centenas: number | null = null;
  decenas: number | null = null;
  unidades: number | null = null;

  descomponerNumero() {
    if (this.numero !== null && this.numero >= 100 && this.numero <= 999) {
      this.centenas = Math.floor(this.numero / 100);
      this.decenas = Math.floor((this.numero % 100) / 10);
      this.unidades = this.numero % 10;
    }
  }
}
