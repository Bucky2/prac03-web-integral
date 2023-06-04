import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides = [
    {
      image: 'assets/slide1.jpg',
      title: 'Título de la diapositiva 1',
      description: 'Descripción de la diapositiva 1'
    },
    {
      image: 'assets/slide2.jpg',
      title: 'Título de la diapositiva 2',
      description: 'Descripción de la diapositiva 2'
    },
    // Agrega más diapositivas según sea necesario
  ];
}

