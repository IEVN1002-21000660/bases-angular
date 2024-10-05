import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {
  colores = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'];
  
  color1 = 'Negro';
  color2 = 'Negro';
  color3 = 'Negro';
  tolerancia = 'oro';

  // Valores calculados para la resistencia
  registro = {
    valor: 0,
    valorMax: 0,
    valorMin: 0
  };

  calcularValores() {
    const valor1 = this.obtenerValorColor(this.color1);
    const valor2 = this.obtenerValorColor(this.color2);
    const multiplicador = this.obtenerMultiplicador(this.color3);
    const toleranciaPorcentaje = this.tolerancia === 'oro' ? 0.05 : 0.10;

    const valorResistencia = (valor1 * 10 + valor2) * multiplicador;
    const valorMax = valorResistencia * (1 + toleranciaPorcentaje);
    const valorMin = valorResistencia * (1 - toleranciaPorcentaje);

    // Actualizamos el registro con los valores calculados
    this.registro.valor = valorResistencia;
    this.registro.valorMax = valorMax;
    this.registro.valorMin = valorMin;
  }

  obtenerValorColor(color: string): number {
    const mapaColores: { [key: string]: number } = {
      'Negro': 0,
      'Café': 1,
      'Rojo': 2,
      'Naranja': 3,
      'Amarillo': 4,
      'Verde': 5,
      'Azul': 6,
      'Violeta': 7,
      'Gris': 8,
      'Blanco': 9
    };
    return mapaColores[color] || 0;
  }

  obtenerMultiplicador(color: string): number {
    const mapaMultiplicadores: { [key: string]: number } = {
      'Negro': 1,
      'Café': 10,
      'Rojo': 100,
      'Naranja': 1000,
      'Amarillo': 10000,
      'Verde': 100000,
      'Azul': 1000000,
      'Violeta': 10000000,
      'Gris': 100000000,
      'Blanco': 1000000000
    };
    return mapaMultiplicadores[color] || 1;
  }

  obtenerColorHex(color: string): string {
    const mapaColoresHex: { [key: string]: string } = {
      'Negro': '#000000',
      'Café': '#8B4513',
      'Rojo': '#FF0000',
      'Naranja': '#FFA500',
      'Amarillo': '#FFFF00',
      'Verde': '#008000',
      'Azul': '#0000FF',
      'Violeta': '#EE82EE',
      'Gris': '#808080',
      'Blanco': '#FFFFFF'
    };
    return mapaColoresHex[color] || '#FFFFFF'; // Blanco por defecto si no se encuentra el color
  }

  // Obtener color para la columna de tolerancia
  obtenerColorTolerancia(): string {
    return this.tolerancia === 'oro' ? '#FFD700' : '#C0C0C0'; // Dorado o Plata
  }
}