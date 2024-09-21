import { Component } from '@angular/core';
import { ProductsInter } from '../products-inter';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  //*ngIf = true or false

  imagenWidth: number = 100;
  imagenMargin: number = 2;
  muestraImg: boolean = true;
  listfiler: string=''

  muestImg():void{
    this.muestraImg =! this.muestraImg;
  }

  productos:ProductsInter[]=[
    {
      "productId": 1,
      "Modelo": "Sentra",
      "Description": "El Nissan Sentra 2023 es un sedán compacto con motor 2.0 litros de 149 hp, acoplado a una transmisión CVT. Ofrece buen espacio interior, medidas de 4.64 metros de largo, 1.81 metros de ancho y una distancia entre ejes de 2.71 metros. Se destaca por su comodidad, seguridad avanzada y consumo eficiente de combustible.",
      "Precio": 2000,
      "Year": "2023",
      "Marca": "NISSAN",
      "Color": "Azul",
      "ImagenUrl": "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2020-nissan-sentra-ELECTRIC-BLUE-METALLIC.png"
    },
    {
      "productId": 2,
      "Modelo": "Rio",
      "Description": "El Kia Rio 2023 es un subcompacto disponible en versiones sedán y hatchback. Tiene un motor 1.6 litros de 121 hp, transmisión manual o automática de 6 velocidades, y destaca por su eficiencia de combustible y precio accesible. Mide 4.06 metros de largo, 1.73 metros de ancho, y tiene una distancia entre ejes de 2.58 metros.",
      "Precio": 4000,
      "Year": "2023",
      "Marca": "KIA",
      "Color": "Rojo",
      "ImagenUrl": "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/rio_hatchback/rio_HB_2019/Componente-RioHB_EX_Pack.png"
    },
    {
      "productId": 3,
      "Modelo": "A4",
      "Description": "El Audi A4 2023 es un sedán de lujo de tamaño mediano con una longitud de 4.76 metros, un ancho de 1.85 metros y una altura de 1.43 metros. Ofrece motores TFSI de 2.0 litros con potencias entre 150 y 265 hp, tracción delantera o total quattro, y una transmisión automática S tronic de 7 velocidades. Cuenta con tecnologías avanzadas de asistencia al conductor, sistema de infoentretenimiento MMI, y un maletero de 460 litros",
      "Precio": 3000,
      "Year": "2022",
      "Marca": "AUDI",
      "Color": "Blanco",
      "ImagenUrl": "https://th.bing.com/th/id/OIP.rljVcQUH6E-VaJYyNBP1gQAAAA?rs=1&pid=ImgDetMain"
    }
  ]
}
