import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre = 'Yomar';
    name = 'YoMaR mIrAnDa SaRmIeNtO';
    arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    PI = Math.PI;
    num = 0.234;
    salario = 1234.5;
    heroe = {
        nombre: 'Logan',
        clave: 'Wolverine',
        edad: 700,
        direccion: {
            calle: 'Novena',
            carrera: 20,
            apartamento: '202'
        }
    };

    valorDePromesa = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Llego la data!!'), 2500);
    });

    fecha = new Date();
    video = 'KTugvOTfHVw';
    activar = true;
}
