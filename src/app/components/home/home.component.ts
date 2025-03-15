import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { FooterComponent } from "../footer/footer.component";
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CurvedTextComponent } from "../curved-text/curved-text.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, FooterComponent, CommonModule, CurvedTextComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('videoSection') videoSection!: ElementRef;
  isPlaying = false;
  videoUrl: SafeResourceUrl;
  private observer: IntersectionObserver | null = null;

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/tK3Wu0TrsNM?enablejsapi=1&autoplay=0&rel=0&modestbranding=1'
    );
  }

  ngOnInit() {
    this.setupIntersectionObserver();
    // Agregar el evento de mensaje para la API de YouTube
    window.addEventListener('message', this.onYouTubeMessage.bind(this));
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('message', this.onYouTubeMessage.bind(this));
  }

  private onYouTubeMessage(event: MessageEvent) {
    if (event.data && typeof event.data === 'string') {
      try {
        const data = JSON.parse(event.data);
        // Manejar eventos del reproductor de YouTube si es necesario
        if (data.event === 'onStateChange') {
          // -1 (no iniciado), 0 (terminado), 1 (reproduciendo), 2 (pausado), 3 (almacenando en búfer), 5 (video en cola)
          console.log('YouTube player state:', data.info);
        }
      } catch (e) {
        // Ignorar mensajes que no son JSON válido
      }
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (this.isPlaying) {
          if (!entry.isIntersecting) {
            this.pauseVideo();
          } else {
            this.playVideo();
          }
        }
      });
    }, options);

    setTimeout(() => {
      if (this.videoSection) {
        this.observer?.observe(this.videoSection.nativeElement);
      }
    }, 0);
  }

  startPlaying() {
    this.isPlaying = true;
    // Actualizar la URL con autoplay=1 cuando el usuario hace clic
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/tK3Wu0TrsNM?enablejsapi=1&autoplay=1&rel=0&modestbranding=1'
    );
  }

  playVideo() {
    const iframe = document.querySelector('.youtube-video') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  }

  pauseVideo() {
    const iframe = document.querySelector('.youtube-video') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }

  irAPlaylist() {
    window.location.href = '/reproductor';
  }

  irAFotos() {
    window.location.href = '/gallery';
  }
}
