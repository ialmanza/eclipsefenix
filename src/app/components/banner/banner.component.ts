import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface Service {
  nombre: string;
  description: string;
  imagen: string;
}


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  animations: [
    trigger('fadeSlide', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition('void => *', [
        animate('0.6s ease-out')
      ]),
      transition('* => void', [
        animate('0.6s ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {
  faQuoteLeft = faQuoteLeft;

  services: Service[] = [
    {
      nombre: 'Israel',
      description: 'Una amistad no crece por la presencia de las personas sino por la magia de saber que aunque no las ves las llevas siempre en el corazón.',
      imagen: '/reproductoryfrases/Israel.webp'
    },
    {
      nombre: 'Israel',
      description: 'Tengo una amiga que aunque se fue a vivir lejos... siempre tendrá un espacio en mi corazón.',
      imagen: '/reproductoryfrases/Israel.webp'
    },
    {
      nombre: 'Israel',
      description: 'Te deseo lo mejor para tu futuro, que encuentres lo que estás buscando y que seas feliz. No olvides que aquí siempre vas a tener un amigo.',
      imagen: '/reproductoryfrases/Israel.webp'
    },
    {
      nombre: 'Persona Cuatro',
      description: '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. »',
      imagen: 'fotos/otras4.webp'
    }
  ];


  currentIndex = 0;
  autoRotateInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.startRotation();
  }

  ngOnDestroy(): void {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }

  startRotation(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.services.length;
    }, 5000);
  }

  setCurrentIndex(index: number): void {
    this.currentIndex = index;
    // Reset the interval when manually changing slides
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
      this.startRotation();
    }
  }

}
//<!-- <p><a href="https://wa.me/+5491123982541" target="_blank"><i class="fas fa-phone"></i> +5491123982541</a></p> -->
