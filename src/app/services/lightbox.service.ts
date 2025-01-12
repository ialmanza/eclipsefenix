// lightbox.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GalleryItem } from '../../app/components/gallery/gallery.component';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  private lightboxState = new BehaviorSubject<{
    isOpen: boolean;
    currentItem: GalleryItem | null;
  }>({
    isOpen: false,
    currentItem: null
  });

  lightboxState$ = this.lightboxState.asObservable();

  open(item: GalleryItem): void {
    this.lightboxState.next({
      isOpen: true,
      currentItem: { ...item },
    });
  }

  close(): void {
    this.lightboxState.next({
      isOpen: false,
      currentItem: null
    });
  }
}
