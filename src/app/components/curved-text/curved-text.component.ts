import { Component, AfterViewInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationBuilder, AnimationPlayer, style, animate } from '@angular/animations';

@Component({
  selector: 'app-curved-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curved-text.component.html',
  styleUrls: ['./curved-text.component.scss']
})
export class CurvedTextComponent implements AfterViewInit, OnDestroy {
  private animationPlayer: AnimationPlayer | null = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private animationBuilder: AnimationBuilder
  ) {}

  ngAfterViewInit(): void {
    // Inicializar animaciones avanzadas
    this.initParallaxEffect();
    this.observeResize();

    // Efecto de entrada
    const logoContainer = this.el.nativeElement.querySelector('.logo-container');
    if (logoContainer) {
      const entranceAnimation = this.animationBuilder.build([
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('1s cubic-bezier(0.34, 1.56, 0.64, 1)',
          style({ opacity: 1, transform: 'scale(1)' }))
      ]);

      this.animationPlayer = entranceAnimation.create(logoContainer);
      this.animationPlayer.play();
    }
  }

  private initParallaxEffect(): void {
    const wrapper = this.el.nativeElement.querySelector('.fenix-wrapper');

    if (wrapper) {
      this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
        const { clientX, clientY } = event;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Calcular posición relativa del mouse
        const xPos = (clientX / windowWidth - 0.5) * 20;
        const yPos = (clientY / windowHeight - 0.5) * 20;

        // Aplicar efecto parallax suave
        this.renderer.setStyle(
          wrapper,
          'transform',
          `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`
        );
      });

      // Resetear al salir
      this.renderer.listen('window', 'mouseleave', () => {
        this.renderer.setStyle(
          wrapper,
          'transform',
          'perspective(1000px) rotateY(0deg) rotateX(0deg)'
        );
      });
    }
  }

  private observeResize(): void {
    // Observar cambios de tamaño para ajustar elementos responsivamente
    this.resizeObserver = new ResizeObserver(() => {
      this.adjustElementsForViewport();
    });

    this.resizeObserver.observe(this.el.nativeElement);
  }

  private adjustElementsForViewport(): void {
    const viewportWidth = window.innerWidth;
    const logoContainer = this.el.nativeElement.querySelector('.logo-container');
    const tagline = this.el.nativeElement.querySelector('.tagline');

    if (viewportWidth <= 380) {
      // Ajustes extra para pantallas muy pequeñas
      if (logoContainer) {
        this.renderer.addClass(logoContainer, 'ultra-compact');
      }
      if (tagline) {
        this.renderer.addClass(tagline, 'ultra-compact');
      }
    } else {
      // Remover clases cuando la pantalla es más grande
      if (logoContainer) {
        this.renderer.removeClass(logoContainer, 'ultra-compact');
      }
      if (tagline) {
        this.renderer.removeClass(tagline, 'ultra-compact');
      }
    }
  }

  // Método para activar animación especial en click
  public triggerSpecialAnimation(): void {
    const logo = this.el.nativeElement.querySelector('.logo');
    const sparkles = this.el.nativeElement.querySelectorAll('.sparkle');

    if (logo) {
      // Añadir clase temporal para animación
      this.renderer.addClass(logo, 'animate-pop');

      // Animar chispas
      sparkles.forEach((sparkle: HTMLElement) => {
        this.renderer.addClass(sparkle, 'animate-burst');
      });

      // Eliminar clases después de la animación
      setTimeout(() => {
        this.renderer.removeClass(logo, 'animate-pop');
        sparkles.forEach((sparkle: HTMLElement) => {
          this.renderer.removeClass(sparkle, 'animate-burst');
        });
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    // Limpiar recursos
    if (this.animationPlayer) {
      this.animationPlayer.destroy();
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
