import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';
  doblenumero(x:number):number{
    return x*2;
  }
  alumno={
    nombre: 'Juan',
    edad: 25,
    curso: 'Angular',
    fechaInscrito:new Date(),
    pago:2220
  }
}
