import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'reproductor',component: ReproductorComponent},
  {path: 'banner',component: BannerComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'gallery',component: GalleryComponent},
];
