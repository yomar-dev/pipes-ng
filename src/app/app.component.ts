import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Yomar';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI;
  num = 0.234;
  salario = 1234.5;
}
