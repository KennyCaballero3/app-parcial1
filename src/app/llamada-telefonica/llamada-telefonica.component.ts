import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-llamada-telefonica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './llamada-telefonica.component.html',
  styleUrl: './llamada-telefonica.component.css'
})
export class LlamadaTelefonicaComponent {
  minutos: number = 0;
  costoTotal: number | null = null;

  calcularCosto() {
    if (this.minutos <= 5) {
      this.costoTotal = 10;
    } else {
      this.costoTotal = 10 + (this.minutos - 5) * 2;
    }
  }
}
