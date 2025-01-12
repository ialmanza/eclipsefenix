import { Component, ElementRef, ViewChild } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { FooterComponent } from "../footer/footer.component";
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [BannerComponent, FooterComponent, CommonModule],
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
export class HomeComponent {

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  isPlaying = false;

  irAPlaylist() {
    window.location.href = '/reproductor';
  }

  irAFotos() {
    window.location.href = '/gallery';
  }

  playVideo() {
    this.isPlaying = true;
    const video = this.videoPlayer.nativeElement;
    video.play();
  }

  toggleVideo() {
    const video = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
}
