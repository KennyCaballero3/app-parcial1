import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-llanteria',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './llanteria.component.html',
  styleUrl: './llanteria.component.css'
})
export class LlanteriaComponent {
  cantidad: number = 0;
  total: number | null = null;

  calcularTotal() {
    if (this.cantidad < 5) {
      this.total = this.cantidad * 800;
  } else {
    this.total = this.cantidad * 700;
  }
  }
}
