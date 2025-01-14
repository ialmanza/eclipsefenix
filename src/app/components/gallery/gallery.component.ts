import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxService } from './../../services/lightbox.service';
import { FooterComponent } from "../footer/footer.component";

interface GallerySection {
  title: string;
  description: string;
  items: GalleryItem[];
}

export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  caption: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  @ViewChild('teddySection') teddySection!: ElementRef;
  private audio: HTMLAudioElement;
  private isPlayingAudio = false;

  gallerySections: GallerySection[] = [
    {
      title: 'Encuentros',
      description: 'Nuestros encuentros',
      items: [
        {
          type: 'image',
          url: 'encuentros/abril2024.webp',
          thumbnail: 'encuentros/abril2024.webp',
          caption: 'Abril 2024'
        },
        {
          type: 'image',
          url: 'encuentros/mayo2024.webp',
          thumbnail: 'encuentros/mayo2024.webp',
          caption: 'Mayo 2024'
        },
        {
          type: 'image',
          url: 'encuentros/agosto2024.webp',
          thumbnail: 'encuentros/agosto2024.webp',
          caption: 'Agosto 2024'
        },
        {
          type: 'image',
          url: 'encuentros/sept2024hands.webp',
          thumbnail: 'encuentros/sept2024hands.webp',
          caption: 'Septiembre 2024 '
        },
        {
          type: 'image',
          url: 'encuentros/septiembre2024.webp',
          thumbnail: 'encuentros/septiembre2024.webp',
          caption: 'Septiembre 2024 '
        },
        {
          type: 'image',
          url: 'encuentros/octacuario2024.webp',
          thumbnail: 'encuentros/octacuario2024.webp',
          caption: 'Octubre 2024'
        },
        {
          type: 'image',
          url: 'encuentros/acuario2oct.webp',
          thumbnail: 'encuentros/acuario2oct.webp',
          caption: 'Octubre 2024'
        },
        {
          type: 'image',
          url: 'encuentros/octhalloween2024.webp',
          thumbnail: 'encuentros/octhalloween2024.webp',
          caption: 'Octubre 2024'
        },
        {
          type: 'image',
          url: 'encuentros/noviembre2024.webp',
          thumbnail: 'encuentros/noviembre2024.webp',
          caption: 'Noviembre 2024'
        },
        {
          type: 'image',
          url: 'encuentros/diciembre2024.webp',
          thumbnail: 'encuentros/diciembre2024.webp',
          caption: 'Diciembre 2024'
        },
        {
          type: 'image',
          url: 'encuentros/dicsantiago2024.webp',
          thumbnail: 'encuentros/dicsantiago2024.webp',
          caption: 'Diciembre Santiago 2024'
        },
        {
          type: 'image',
          url: 'encuentros/enero2025.webp',
          thumbnail: 'encuentros/enero2025.webp',
          caption: 'Enero 2025'
        },
        {
          type: 'image',
          url: 'encuentros/enerobskids2025.webp',
          thumbnail: 'encuentros/enerobskids2025.webp',
          caption: 'Enero Bendis 2025'
        },

      ]
    },
    {
      title: 'Fotos familiares',
      description: 'Corey, Riley y familia',
      items: [
        {
          type: 'image',
          url: '/family/family.webp',
          thumbnail: '/family/family.webp',
          caption: 'Abu'
        },
        {
          type: 'image',
          url: '/family_corey/corey.webp',
          thumbnail: '/family_corey/corey.webp',
          caption: 'Corey y Riley'
        },
        {
          type: 'image',
          url: '/family_corey/corey1.webp',
          thumbnail: '/family_corey/corey1.webp',
          caption: 'Familia'
        },
        {
          type: 'image',
          url: '/family_corey/corey2.webp',
          thumbnail: '/family_corey/corey2.webp',
          caption: 'Familia'
        },
        {
          type: 'image',
          url: '/family_corey/corey3.webp',
          thumbnail: '/family_corey/corey3.webp',
          caption: 'Familia'
        }
        // Agregar más items...
      ]
    },
    {
      title: 'Playa Say Say',
      description: 'Riley',
      items: [
        {
          type: 'image',
          url: '/riley/riley.webp',
          thumbnail: '/riley/riley.webp',
          caption: 'Say Say'
        },
        {
          type: 'image',
          url: '/riley/riley1.webp',
          thumbnail: '/riley/riley1.webp',
          caption: 'Say Say'
        },
        {
          type: 'image',
          url: '/riley/riley2.webp',
          thumbnail: '/riley/riley2.webp',
          caption: 'Say Say'
        },
        {
          type: 'image',
          url: '/riley/riley3.webp',
          thumbnail: '/riley/riley3.webp',
          caption: 'Say Say'
        },
        {
          type: 'image',
          url: '/riley/riley4.webp',
          thumbnail: '/riley/riley4.webp',
          caption: 'Say Say'
        },
        {
          type: 'image',
          url: '/riley/riley5.webp',
          thumbnail: '/riley/riley5.webp',
          caption: 'Say Say'
        },
        {
          type: 'image',
          url: '/riley/riley6.webp',
          thumbnail: '/riley/riley6.webp',
          caption: 'Say Say'
        }
        // Agregar más items...
      ]
    },
    {
      title: 'Contigo en la distancia',
      description: 'Contigo en la distancia',
      items: [
        {
          type: 'image',
          url: '/distancia/Lily.webp',
          thumbnail: '/distancia/Lily.webp',
          caption: 'La Tía'
        },
        {
          type: 'image',
          url: '/distancia/Patry.webp',
          thumbnail: '/distancia/Patry.webp',
          caption: 'Patry'
        },
        {
          type: 'image',
          url: '/distancia/Sely.webp',
          thumbnail: '/distancia/Sely.webp',
          caption: 'Sely'
        }
        // Agregar más items...
      ]
    },
    {
      title: 'Desde el cielo',
      description: 'Teddy',
      items: [
        {
          type: 'image',
          url: '/teddy/teddy.webp',
          thumbnail: '/teddy/teddy.webp',
          caption: 'Teddy'
        },
        {
          type: 'image',
          url: '/teddy/teddy1.webp',
          thumbnail: '/teddy/teddy1.webp',
          caption: 'Teddy'
        },
        {
          type: 'image',
          url: '/teddy/teddy2.webp',
          thumbnail: '/teddy/teddy2.webp',
          caption: 'Teddy'
        },
        {
          type: 'image',
          url: '/teddy/teddy3.webp',
          thumbnail: '/teddy/teddy3.webp',
          caption: 'Teddy'
        },
        {
          type: 'image',
          url: '/teddy/teddy5.webp',
          thumbnail: '/teddy/teddy5.webp',
          caption: 'Velándote en las noches'
        },
        {
          type: 'image',
          url: '/teddy/teddy6.webp',
          thumbnail: '/teddy/teddy6.webp',
          caption: 'Durmiendo juntos'
        },
        {
          type: 'image',
          url: '/teddy/teddy4.webp',
          thumbnail: '/teddy/teddy4.webp',
          caption: 'Despertando juntos en la mañana'
        }


        // Agregar más items...
      ]
    }
    // {
    //   title: 'También tenemos videos',
    //   description: 'Videitos',
    //   items: [
    //     {
    //       type: 'video',
    //       url: '/videos/video.mp4',
    //       thumbnail: '/fotos/otras4.webp',
    //       caption: 'Dale Play'
    //     },
    //     {
    //       type: 'video',
    //       url: '/videos/video1.mp4',
    //       thumbnail: '/fotos/otras4.webp',
    //       caption: 'Dale Play'
    //     },
    //     {
    //       type: 'video',
    //       url: '/videos/video2.mp4',
    //       thumbnail: '/fotos/otras4.webp',
    //       caption: 'Dale Play'
    //     },
    //     {
    //       type: 'video',
    //       url: '/videos/video3.mp4',
    //       thumbnail: '/fotos/otras4.webp',
    //       caption: 'Dale Play'
    //     },
    //     {
    //       type: 'video',
    //       url: '/videos/video4.mp4',
    //       thumbnail: '/fotos/otras4.webp',
    //       caption: 'Dale Play'
    //     },
    //     {
    //       type: 'video',
    //       url: '/videos/video5.mp4',
    //       thumbnail: '/fotos/otras4.webp',
    //       caption: 'Dale Play'
    //     },
    //     {
    //       type: 'video',
    //       url: '/videos/video6.mp4',
    //       thumbnail: '/fotos/otras4.webp',
    //       caption: 'Dale Play'
    //     },
    //     {
    //       type: 'video',
    //       url: '/videos/video7.mp4',
    //       thumbnail: '/fotos/otras4.webp',
    //       caption: 'Dale Play'
    //     },
    //     {
    //       type: 'video',
    //       url: '/videos/video8.mp4',
    //       thumbnail: '/fotos/otras4.webp',
    //       caption: 'Dale Play'
    //     },
    //     {
    //       type: 'video',
    //       url: '/videos/video9.mp4',
    //       thumbnail: '/fotos/otras4.webp',
    //       caption: 'Dale Play'
    //     },
    //     // Agregar más items...
    //   ]
    // }
  ];

  constructor( public lightboxService: LightboxService) {
    // Initialize audio element
    this.audio = new Audio();
    this.audio.src = '/musica/Toy Story 4 - Yo soy tu Amigo Fiel (Canción Español Latino) 1080p.mp3'; // Update with your actual path
    this.audio.loop = true;
  }

  ngOnInit(): void {
    this.validateVideoUrls();
    // Verificar que los videos existen
    this.gallerySections.forEach(section => {
      section.items.forEach(item => {
        if (item.type === 'video') {
          const video = document.createElement('video');
          video.src = item.url;
          video.onerror = () => {
            console.error(`Error cargando video: ${item.url}`);
          };
        }
      });
    });
  }

  ngOnDestroy() {
    this.stopAudio();
  }

  openLightbox(item: GalleryItem): void {
    this.lightboxService.open(item);
  }

  // Método para validar URLs de videos
  private validateVideoUrls(): void {
    this.gallerySections.forEach((section) => {
      section.items.forEach((item) => {
        if (item.type === 'video') {
          const video = document.createElement('video');
          video.src = item.url;
          video.onerror = () => {
            console.error(`Error cargando video: ${item.url}`);
          };
        }
      });
    });
  }

  // Método para dividir los videos en dos grupos
  getVideoGroups(items: GalleryItem[]): { group1: GalleryItem[], group2: GalleryItem[] } {
    const videoItems = items.filter(item => item.type === 'video');
    const midpoint = Math.ceil(videoItems.length / 2);

    return {
      group1: videoItems.slice(0, midpoint),
      group2: videoItems.slice(midpoint)
    };
  }

  // Métodos para el carrusel
  scrollCarousel(element: HTMLElement, direction: 'left' | 'right'): void {
    const scrollAmount = 300;
    const scrollPosition = direction === 'left'
      ? element.scrollLeft - scrollAmount
      : element.scrollLeft + scrollAmount;

    element.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.teddySection) {
      const teddyRect = this.teddySection.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if Teddy section is visible in viewport
      if (teddyRect.top < windowHeight && teddyRect.bottom > 0) {
        if (!this.isPlayingAudio) {
          this.playAudio();
        }
      } else {
        if (this.isPlayingAudio) {
          this.stopAudio();
        }
      }
    }
  }

  private playAudio() {
    this.audio.play()
      .then(() => {
        this.isPlayingAudio = true;
      })
      .catch(error => {
        console.error('Error playing audio:', error);
      });
  }

  private stopAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlayingAudio = false;
  }


}
