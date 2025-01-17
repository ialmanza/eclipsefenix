import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
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
      titulo: "Alan Walker _ Ava Max - Alone",
      artista: "Roxy",
      duracion: "4:05",
      archivo: "/musica/Alan Walker _ Ava Max - Alone_ Pt. II(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Roxy.webp"
    },
    {
      id: 2,
      titulo: "Enanitos Verdes - Amigos",
      artista: "Daimita",
      duracion: "2:54",
      archivo: "/musica/Amigos(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Daimita.webp"
    },
    {
      id: 3,
      titulo: "Ángel Bonne - AMIGOS",
      artista: "Maria",
      duracion: "5:12",
      archivo: "/musica/Ángel Bonne - AMIGOS(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Maria.webp"
    },
    {
      id: 4,
      titulo: "Billy Joel - Piano Man",
      artista: "Einy",
      duracion: "5:39",
      archivo: "/musica/Billy Joel - Piano Man (Lyrics)(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Einy.webp"
    },
    {
      id: 5,
      titulo: "Bruno Mars - Count on Me",
      artista: "La tía Lily",
      duracion: "3:12",
      archivo: "/musica/Bruno Mars - Count on Me (Official Lyric Video)(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Lily.webp"
    },
    {
      id: 6,
      titulo: "Diego Torres - Color Esperanza",
      artista: "Ney",
      duracion: "4:24",
      archivo: "/musica/Color Esperanza Diego Torres con letra(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Ney.webp"
    },
    {
      id: 7,
      titulo: "César Portillo De La Luz - Contigo En La Distancia",
      artista: "Yude",
      duracion: "3:28",
      archivo: "/musica/Contigo En La Distancia - César Portillo De La Luz(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Yude.webp"
    },
    {
      id: 8,
      titulo: "Dionne Warwick - That_s What Friends Are For",
      artista: "Dani",
      duracion: "4:16",
      archivo: "/musica/Dionne Warwick - That_s What Friends Are For (Lyrics)(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Dani.webp"
    },
    {
      id: 9,
      titulo: "Habana Blues - En todas partes",
      artista: "Alieny",
      duracion: "2:50",
      archivo: "/musica/En todas partes(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Alieny.webp"
    },
    {
      id: 10,
      titulo: "Laura Pausini - La amistad",
      artista: "Ilia",
      duracion: "4:39",
      archivo: "/musica/La amistad - Laura Pausini (lyrics) ♥(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Ilia.webp"
    },
    {
      id: 11,
      titulo: "OV7 - No Me Voy",
      artista: "Diana",
      duracion: "4:07",
      archivo: "/musica/No Me Voy - OV7 subtitulada(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Diana.webp"
    },
    {
      id: 12,
      titulo: "Tercer cielo - Nuestra Amistad ",
      artista: "Eliany",
      duracion: "3:15",
      archivo: "/musica/Nuestra Amistad (Tercer cielo) _Letra_(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Eliany.webp"
    },
    {
      id: 13,
      titulo: "RDM  - Imagine",
      artista: "Indira",
      duracion: "4:13",
      archivo: "/musica/RDM  - Imagine(MP3_128K).mp3",
      imagen: "/reproductoryfrases/Indra.webp"
    },
    {
      id: 14,
      titulo: "Rihanna - Only Girl",
      artista: "Iza",
      duracion: "4:11",
      archivo: "/musica/Rihanna - Only Girl (In The World)(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Iza.webp"
    },
    {
      id: 15,
      titulo: "Río Roma - Cuenta Conmigo",
      artista: "Sai",
      duracion: "3:38",
      archivo: "/musica/Río Roma - Cuenta Conmigo (Cover Audio)(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Sai.webp"
    },
    {
      id: 16,
      titulo: "Sia - Chandelier",
      artista: "Valeria",
      duracion: "3:51",
      archivo: "/musica/Sia - Chandelier (Official Video)(MP3_160K).mp3",
      imagen: "/distancia/Sely.webp"
    },
    {
      id: 17,
      titulo: "Alex Campos - Tu Amistad Me Hace Bien",
      artista: "Sely",
      duracion: "4:07",
      archivo: "/musica/TU AMISTAD ME HACE BIEN I Alex Campos I Vídeo Oficial(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Sely.webp"
    },
    {
      id: 18,
      titulo: "Beatriz Luengo - Se Llama Amistad",
      artista: "Patry",
      duracion: "3:22",
      archivo: "/musica/Se Llama Amistad - Beatriz Luengo (Videoclip)(MP3_160K).mp3",
      imagen: "/reproductoryfrases/Patry_.webp"
    },
    {
      id: 19,
      titulo: "Pedro Capo - La Fiesta",
      artista: "Diana",
      duracion: "3:22",
      archivo: "/musica/Pedro Capo - La fiesta.mpeg",
      imagen: "/reproductoryfrases/Diana.webp"
    },
    {
      id: 20,
      titulo: "Friends Theme Song - I_ll Be There For You",
      artista: "Claudia favorita",
      duracion: "3:54",
      archivo: "/musica/_I_ll Be There For You_ (Friends Theme Song)(MP3_128K).mp3",
      imagen: "/reproductoryfrases/Claudia.webp"
    },
    {
      id: 21,
      titulo: "Laura Pausini - En Cambio No",
      artista: "Israel",
      duracion: "3:54",
      archivo: "/musica/Laura Pausini - En Cambio No (Official Music Video)(MP3_128K).mp3",
      imagen: "/reproductoryfrases/Israel.webp"
    },
    {
      id: 22,
      titulo: "La Oreja de Van Gogh - Nadie Como Tú",
      artista: "Arianna",
      duracion: "3:25",
      archivo: "/musica/La Oreja de Van Gogh - Nadie Como Tú (Audio)(MP3_128K).mp3",
      imagen: "/reproductoryfrases/Arianna.webp"
    },
    {
      id: 23,
      titulo: "Melendi - El Cielo Nunca Cambiará",
      artista: "Iliennis",
      duracion: "4:14",
      archivo: "/musica/Melendi - El Cielo Nunca Cambiará(MP3_128K).mp3",
      imagen: "/reproductoryfrases/Ilieny.webp"
    },
    {
      id: 24,
      titulo: "Manuel Carrasco - Qué Bonito Es Querer",
      artista: "Claudia 3P",
      duracion: "4:31",
      archivo: "/musica/Manuel Carrasco - Qué Bonito Es Querer (Video Oficial)(MP3_128K).mp3",
      imagen: "/reproductoryfrases/Claudia3p.webp"
    },
    {
      id: 25,
      titulo: "Rihanna - Umbrella",
      artista: "Muñe",
      duracion: "4:14",
      archivo: "/musica/Rihanna - Umbrella (Orange Version) (Official Music Video) ft. JAY-Z(MP3_128K).mp3",
      imagen: "/reproductoryfrases/Muñe.webp"
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

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.audioElement = new Audio();
    this.audioElement.addEventListener('timeupdate', this.actualizarTiempo.bind(this));
    this.audioElement.addEventListener('ended', this.alTerminar.bind(this));
    this.audioElement.volume = this.volumen / 100;
    this.cancionesShuffled = [...this.canciones];
  }

  ngOnDestroy() {
    if (this.audioElement) {
      this.audioElement.removeEventListener('timeupdate', this.actualizarTiempo.bind(this));
      this.audioElement.removeEventListener('ended', this.alTerminar.bind(this));
    }
  }


  seleccionarCancion(cancion: Cancion) {
    this.cancionActual = {...cancion};
    this.cancionActual = cancion;
    if (this.audioElement) {
      this.audioElement.src = cancion.archivo;
      this.audioElement.load();
      this.audioElement.play();
      this.reproduciendo = true;
    }
    this.cdr.detectChanges();
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
      // Si está activada la repetición, reinicia la misma canción
      if (this.audioElement) {
        this.audioElement.currentTime = 0;
        this.audioElement.play();
      }
    } else {
      // Si no está en modo repetición, reproduce la siguiente canción
      this.reproduciendo = false;

      // Determina qué lista usar basado en si el modo aleatorio está activado
      const listaActual = this.isShuffleOn ? this.cancionesShuffled : this.canciones;
      const indiceActual = listaActual.findIndex(c => c.id === this.cancionActual?.id);

      // Si hay una siguiente canción en la lista
      if (indiceActual < listaActual.length - 1) {
        // Reproduce la siguiente canción
        this.seleccionarCancion(listaActual[indiceActual + 1]);
        this.reproduciendo = true;
      } else {
        // Si es la última canción, vuelve al principio de la lista
        if (listaActual.length > 0) {
          this.seleccionarCancion(listaActual[0]);
          this.reproduciendo = true;
        }
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
