import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
  faVolumeHigh,
  faVolumeMute,
  faShuffle,
  faRepeat,
  faHeart,
  faListUl
} from '@fortawesome/free-solid-svg-icons';

interface Cancion {
  id: number;
  titulo: string;
  artista: string;
  duracion: string;
  archivo: string;
  imagen: string;
}

@Component({
  selector: 'app-reproductor',
  imports: [ CommonModule, FontAwesomeModule ],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent implements OnInit {
  // Iconos
  iconoPlay = faPlay;
  iconoPausa = faPause;
  iconoAnterior = faStepBackward;
  iconoSiguiente = faStepForward;
  iconoVolumen = faVolumeHigh;
  iconoMute = faVolumeMute;
  iconoShuffle = faShuffle;
  iconoRepetir = faRepeat;
  iconoCorazon = faHeart;
  iconoLista = faListUl;



  canciones: Cancion[] = [
    {
      id: 1,
      titulo: "Flowers in your Hair",
      artista: "Artista 1",
      duracion: "2:45",
      archivo: "/musica/Flowers in your Hair.mp3",
      imagen: "/fotos/otras4.webp"
    },
    {
      id: 2,
      titulo: "Liquid Planet",
      artista: "Artista 2",
      duracion: "3:24",
      archivo: "/musica/liquid-planet.mp3",
      imagen: "/fotos/otras4.webp"
    },
    {
      id: 3,
      titulo: "To You",
      artista: "Artista 3",
      duracion: "2:18",
      archivo: "/musica/To You.mp3",
      imagen: "/fotos/otras4.webp"
    },
    {
      id: 4,
      titulo: "Genuine",
      artista: "Artista 4",
      duracion: "2:47",
      archivo: "/musica/Genuine.mp3",
      imagen: "/fotos/otras4.webp"
    },
    {
      id: 5,
      titulo: "In Your Hands",
      artista: "Artista 5",
      duracion: "2:11",
      archivo: "/musica/In Your Hands.mp3",
      imagen: "/fotos/otras4.webp"
    },
    {
      id: 6,
      titulo: "Make It Happen",
      artista: "Artista 6",
      duracion: "2:11",
      archivo: "/musica/Make It Happen.mp3",
      imagen: "/fotos/otras4.webp"
    },
    {
      id: 7,
      titulo: "Road Trip",
      artista: "Artista 7",
      duracion: "2:50",
      archivo: "/musica/Road Trip.mp3",
      imagen: "/fotos/otras4.webp"
    },
    {
      id: 8,
      titulo: "Spirit of Fire",
      artista: "Artista 6",
      duracion: "3:08",
      archivo: "/musica/Spirit of Fire.mp3",
      imagen: "/fotos/otras4.webp"
    },
    {
      id: 9,
      titulo: "The Best Time",
      artista: "Artista 9",
      duracion: "2:21",
      archivo: "/musica/The Best Time.mp3",
      imagen: "/fotos/otras4.webp"
    },
    {
      id: 10,
      titulo: "Different",
      artista: "Artista 10",
      duracion: "3:13",
      archivo: "/musica/Different.mp3",
      imagen: "/fotos/otras4.webp"
    }
    // Añade más canciones según necesites
  ];

  cancionActual: Cancion | null = null;
  reproduciendo: boolean = false;
  progresoActual: number = 0;
  tiempoActual: string = "0:00";
  audioElement: HTMLAudioElement | null = null;
  volumen: number = 100;
  volumenAnterior: number = 100;
  isMuted: boolean = false;
  isShuffleOn: boolean = false;
  isRepeatOn: boolean = false;
  cancionesShuffled: Cancion[] = [];
  sidebarOpen: boolean = false;

  ngOnInit() {
    this.audioElement = new Audio();
    this.audioElement.addEventListener('timeupdate', this.actualizarTiempo.bind(this));
    this.audioElement.addEventListener('ended', this.alTerminar.bind(this));
    this.audioElement.volume = this.volumen / 100;
    this.cancionesShuffled = [...this.canciones];

    // const playerBar = document.querySelector('.player-bar');
    // const collapsedView = document.querySelector('.now-playing-collapsed');
    // const expandButton = document.querySelector('.expanded-header-button');

    // collapsedView!.addEventListener('click', () => {
    //   playerBar!.classList.add('expanded');
    // });

    // expandButton!.addEventListener('click', () => {
    //   playerBar!.classList.remove('expanded');
    // });
  }

  ngOnDestroy() {
    if (this.audioElement) {
      this.audioElement.removeEventListener('timeupdate', this.actualizarTiempo.bind(this));
      this.audioElement.removeEventListener('ended', this.alTerminar.bind(this));
    }
  }

  seleccionarCancion(cancion: Cancion) {
    this.cancionActual = cancion;
    if (this.audioElement) {
      this.audioElement.src = cancion.archivo;
      this.audioElement.load();
      if (this.reproduciendo) {
        this.audioElement.play();
      }
    }
  }

  toggleReproduccion() {
    if (!this.cancionActual && this.canciones.length > 0) {
      this.seleccionarCancion(this.canciones[0]);
    }

    if (!this.cancionActual) return;

    if (this.reproduciendo) {
      this.audioElement?.pause();
    } else {
      this.audioElement?.play();
    }
    this.reproduciendo = !this.reproduciendo;
  }

  actualizarTiempo() {
    if (!this.audioElement) return;

    const tiempo = this.audioElement.currentTime;
    const minutos = Math.floor(tiempo / 60);
    const segundos = Math.floor(tiempo % 60);
    this.tiempoActual = `${minutos}:${segundos.toString().padStart(2, '0')}`;
    this.progresoActual = (tiempo / this.audioElement.duration) * 100;
  }

  actualizarProgreso(event: Event) {
    if (!this.audioElement) return;

    const target = event.target as HTMLInputElement;
    const nuevoPorcentaje = Number(target.value);
    const nuevaTiempo = (this.audioElement.duration * nuevoPorcentaje) / 100;
    this.audioElement.currentTime = nuevaTiempo;
  }

  anterior() {
    if (this.isShuffleOn) {
      const indiceActual = this.cancionesShuffled.findIndex(c => c.id === this.cancionActual?.id);
      if (indiceActual > 0) {
        this.seleccionarCancion(this.cancionesShuffled[indiceActual - 1]);
      }
    } else {
      const indiceActual = this.canciones.findIndex(c => c.id === this.cancionActual?.id);
      if (indiceActual > 0) {
        this.seleccionarCancion(this.canciones[indiceActual - 1]);
      }
    }
  }

  siguiente() {
    if (this.isShuffleOn) {
      const indiceActual = this.cancionesShuffled.findIndex(c => c.id === this.cancionActual?.id);
      if (indiceActual < this.cancionesShuffled.length - 1) {
        this.seleccionarCancion(this.cancionesShuffled[indiceActual + 1]);
      }
    } else {
      const indiceActual = this.canciones.findIndex(c => c.id === this.cancionActual?.id);
      if (indiceActual < this.canciones.length - 1) {
        this.seleccionarCancion(this.canciones[indiceActual + 1]);
      }
    }
  }

  hayAnterior(): boolean {
    const lista = this.isShuffleOn ? this.cancionesShuffled : this.canciones;
    return lista.findIndex(c => c.id === this.cancionActual?.id) > 0;
  }

  haySiguiente(): boolean {
    const lista = this.isShuffleOn ? this.cancionesShuffled : this.canciones;
    return lista.findIndex(c => c.id === this.cancionActual?.id) < lista.length - 1;
  }

  alTerminar() {
    if (this.isRepeatOn) {
      if (this.audioElement) {
        this.audioElement.currentTime = 0;
        this.audioElement.play();
      }
    } else {
      this.reproduciendo = false;
      if (this.haySiguiente()) {
        this.siguiente();
        this.toggleReproduccion();
      }
    }
  }

  // Nuevas funciones para el control de volumen
  ajustarVolumen(event: Event) {
    const target = event.target as HTMLInputElement;
    this.volumen = Number(target.value);
    if (this.audioElement) {
      this.audioElement.volume = this.volumen / 100;
    }
    if (this.volumen === 0) {
      this.isMuted = true;
    } else {
      this.isMuted = false;
    }
  }

  toggleMute() {
    if (this.audioElement) {
      if (this.isMuted) {
        this.volumen = this.volumenAnterior;
        this.audioElement.volume = this.volumen / 100;
      } else {
        this.volumenAnterior = this.volumen;
        this.volumen = 0;
        this.audioElement.volume = 0;
      }
      this.isMuted = !this.isMuted;
    }
  }

  // Funciones para shuffle y repeat
  toggleShuffle() {
    this.isShuffleOn = !this.isShuffleOn;
    if (this.isShuffleOn) {
      this.cancionesShuffled = [...this.canciones]
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    } else {
      this.cancionesShuffled = [...this.canciones];
    }
  }

  toggleRepeat() {
    this.isRepeatOn = !this.isRepeatOn;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
