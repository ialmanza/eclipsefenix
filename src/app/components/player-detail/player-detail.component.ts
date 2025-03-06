import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
  faHeart,
  faArrowLeft,
  faEllipsisH
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
  selector: 'app-player-detail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  @Input() cancionActual: Cancion | null = null;
  @Input() reproduciendo: boolean = false;
  @Input() progresoActual: number = 0;
  @Input() tiempoActual: string = "0:00";
  @Input() esShuffleActivado: boolean = false;
  @Input() esRepeatActivado: boolean = false;

  @Output() volverALista = new EventEmitter<void>();
  @Output() togglePlay = new EventEmitter<void>();
  @Output() siguienteCancion = new EventEmitter<void>();
  @Output() anteriorCancion = new EventEmitter<void>();
  @Output() actualizarProgreso = new EventEmitter<Event>();
  @Output() toggleLike = new EventEmitter<void>();
  @Output() toggleShuffle = new EventEmitter<void>();
  @Output() toggleRepeat = new EventEmitter<void>();

  // Icons
  iconoPlay = faPlay;
  iconoPausa = faPause;
  iconoAnterior = faStepBackward;
  iconoSiguiente = faStepForward;
  iconoCorazon = faHeart;
  iconoVolver = faArrowLeft;
  iconoOpciones = faEllipsisH;

  esFavorito: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onToggleLike(): void {
    this.esFavorito = !this.esFavorito;
    this.toggleLike.emit();
  }

  volver(): void {
    this.volverALista.emit();
  }
}
