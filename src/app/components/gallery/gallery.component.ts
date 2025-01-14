import { Component } from '@angular/core';
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
      description: 'Corey y Riley',
      items: [
        {
          type: 'image',
          url: 'https://chefeel.com/chefgeneralfiles/2021/12/tacos-1-scaled.jpg',
          thumbnail: 'https://chefeel.com/chefgeneralfiles/2021/12/tacos-1-scaled.jpg',
          caption: 'Tacos'
        },
        {
          type: 'image',
          url: 'https://st1.uvnimg.com/dd/4c/fd6bdcac49059a6691566192be16/b0987e2c6277453cb094409ec360523a',
          thumbnail: 'https://st1.uvnimg.com/dd/4c/fd6bdcac49059a6691566192be16/b0987e2c6277453cb094409ec360523a',
          caption: 'Eolitos'
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
          url: 'fotos/familia.webp',
          thumbnail: 'fotos/familia.webp',
          caption: 'Está escondido el Mike'
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
          url: '/fotos/otras2.webp',
          thumbnail: '/fotos/otras2.webp',
          caption: 'La Caro'
        },
        {
          type: 'image',
          url: '/fotos/otras3.webp',
          thumbnail: '/fotos/otras3.webp',
          caption: 'La Caro'
        },
        {
          type: 'image',
          url: '/fotos/otras4.webp',
          thumbnail: '/fotos/otras4.webp',
          caption: 'La Caro'
        },
        {
          type: 'image',
          url: '/fotos/otras5.webp',
          thumbnail: '/fotos/otras5.webp',
          caption: 'La Caro'
        },
        {
          type: 'image',
          url: '/fotos/otras.webp',
          thumbnail: '/fotos/otras.webp',
          caption: 'La Caro'
        },
        {
          type: 'image',
          url: '/fotos/otras1.webp',
          thumbnail: '/fotos/otras1.webp',
          caption: 'La Caro'
        },
        // Agregar más items...
      ]
    },
    {
      title: 'Desde el cielo',
      description: 'Teddy',
      items: [

        {
          type: 'image',
          url: '/fotos/otras2.webp',
          thumbnail: '/fotos/otras2.webp',
          caption: 'La Caro'
        },
        {
          type: 'image',
          url: '/fotos/otras3.webp',
          thumbnail: '/fotos/otras3.webp',
          caption: 'La Caro'
        },
        {
          type: 'image',
          url: '/fotos/otras4.webp',
          thumbnail: '/fotos/otras4.webp',
          caption: 'La Caro'
        },
        {
          type: 'image',
          url: '/fotos/otras5.webp',
          thumbnail: '/fotos/otras5.webp',
          caption: 'La Caro'
        },
        {
          type: 'image',
          url: '/fotos/otras.webp',
          thumbnail: '/fotos/otras.webp',
          caption: 'La Caro'
        },
        {
          type: 'image',
          url: '/fotos/otras1.webp',
          thumbnail: '/fotos/otras1.webp',
          caption: 'La Caro'
        },
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

  constructor( public lightboxService: LightboxService) {}

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
}
