import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre: string = '';
  cantidad_compradores: number = 0;
  tarjeta_cineco: string = '';
  cantidad_boletas: number = 0;
  total_a_pagar: number | null = null;
  descuento_aplicado: number | null = null;
  error: string | null = null;

  procesarFormulario() {
    try {
      const { total, descuento } = this.calcularTotal(this.cantidad_boletas, this.cantidad_compradores, this.tarjeta_cineco);
      this.total_a_pagar = total;
      this.descuento_aplicado = descuento;
      this.error = null;
    } catch (e) {
      if (e instanceof Error) {
        this.error = e.message; 
      } else {
        this.error = 'Ha ocurrido un error inesperado'; 
      }
      this.total_a_pagar = null;
      this.descuento_aplicado = null;
    }
  }
  

  calcularTotal(cantidad_boletas: number, cantidad_compradores: number, tarjeta_cineco: string) {
    const precio_por_boleta = 12000;
    const max_boletas = cantidad_compradores * 7;

    if (cantidad_boletas > max_boletas) {
      throw new Error("La cantidad de boletas supera el máximo permitido por la cantidad de compradores.");
    }

    let total_sin_descuento = cantidad_boletas * precio_por_boleta;
    let descuento = 0;

    if (cantidad_boletas > 5) {
      descuento = 0.15;
    } else if (cantidad_boletas >= 3) {
      descuento = 0.10;
    }

    let total_con_descuento = total_sin_descuento * (1 - descuento);
    let descuento_aplicado = total_sin_descuento * descuento;

    if (tarjeta_cineco === 'si') {
      const descuento_tarjeta = total_con_descuento * 0.10;
      total_con_descuento *= 0.90;
      descuento_aplicado += descuento_tarjeta;
    }

    return { total: total_con_descuento, descuento: descuento_aplicado };
  }

  resetForm() {
    this.nombre = '';
    this.cantidad_compradores = 0;
    this.tarjeta_cineco = '';
    this.cantidad_boletas = 0;
    this.total_a_pagar = null;
    this.descuento_aplicado = null;
    this.error = null;
  }
}
