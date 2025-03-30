import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { CurvedTextComponent } from './components/curved-text/curved-text.component';

export const routes: Routes = [
  {path: '',component: CurvedTextComponent},
  {path: 'home',component: HomeComponent},
  {path: 'reproductor',component: ReproductorComponent},
  {path: 'banner',component: BannerComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'gallery',component: GalleryComponent},
  {path: 'player-detail',component: PlayerDetailComponent},
  {path: 'curved-text',component: CurvedTextComponent},
];
