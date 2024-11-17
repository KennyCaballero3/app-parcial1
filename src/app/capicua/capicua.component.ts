import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capicua',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './capicua.component.html',
  styleUrl: './capicua.component.css'
})
export class CapicuaComponent {
  numero: number | null = null;
  mensaje: string = '';

  verificarCapicua() {
    if (this.numero !== null) {
      const numeroString = this.numero.toString();
      if(numeroString[0] === numeroString[1]) {
        this.mensaje = 'Es capicua';
      } else {
        this.mensaje = 'No es capicua';
      }
    }
  }
}
