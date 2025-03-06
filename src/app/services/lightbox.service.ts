// lightbox.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GalleryItem } from '../../app/components/gallery/gallery.component';

interface LightboxState {
  isOpen: boolean;
  currentItem: GalleryItem | null;
  allItems: GalleryItem[];
  currentIndex: number;
}

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  private initialState: LightboxState = {
    isOpen: false,
    currentItem: null,
    allItems: [],
    currentIndex: -1
  };
  private state = new BehaviorSubject<LightboxState>(this.initialState);
  lightboxState$ = this.state.asObservable();

  private lightboxState = new BehaviorSubject<{
    isOpen: boolean;
    currentItem: GalleryItem | null;
  }>({
    isOpen: false,
    currentItem: null
  });

  //lightboxState$ = this.lightboxState.asObservable();

  // open(item: GalleryItem): void {
  //   this.lightboxState.next({
  //     isOpen: true,
  //     currentItem: { ...item },
  //   });
  // }

  // close(): void {
  //   this.lightboxState.next({
  //     isOpen: false,
  //     currentItem: null
  //   });
  // }

  open(item: GalleryItem, allItems: GalleryItem[] = []): void {
    const currentIndex = allItems.findIndex(i =>
      i.url === item.url && i.type === item.type);

    this.state.next({
      isOpen: true,
      currentItem: item,
      allItems: allItems,
      currentIndex: currentIndex
    });
  }

  close(): void {
    this.state.next(this.initialState);
  }

  next(): void {
    const currentState = this.state.getValue();
    if (!currentState.isOpen || currentState.allItems.length <= 1) return;

    const newIndex = (currentState.currentIndex + 1) % currentState.allItems.length;

    this.state.next({
      ...currentState,
      currentItem: currentState.allItems[newIndex],
      currentIndex: newIndex
    });
  }

  previous(): void {
    const currentState = this.state.getValue();
    if (!currentState.isOpen || currentState.allItems.length <= 1) return;

    const newIndex = (currentState.currentIndex - 1 + currentState.allItems.length) % currentState.allItems.length;

    this.state.next({
      ...currentState,
      currentItem: currentState.allItems[newIndex],
      currentIndex: newIndex
    });
  }
}
