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
        // {
        //   type: 'video',
        //   url: 'videos/cantando.mp4',
        //   thumbnail: 'fotos/otras.webp',
        //   caption: 'Rey León'
        // },
        {
          type: 'image',
          url: 'fotos/divertidas.webp',
          thumbnail: 'fotos/divertidas.webp',
          caption: 'Divertidas'
        },
        {
          type: 'image',
          url: 'fotos/divertidas1.webp',
          thumbnail: 'fotos/divertidas1.webp',
          caption: 'Divertidas'
        },
        // {
        //   type: 'video',
        //   url: 'videos/bailando.mp4',
        //   thumbnail: 'fotos/otras6.webp',
        //   caption: 'Noche de Viernes'
        // },
        // Agregar más items...
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
