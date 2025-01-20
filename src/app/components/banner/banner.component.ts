import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface Frase {
  nombre: string;
  description: string;
  imagen: string;
}


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  animations: [
    trigger('fadeSlide', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition('void => *', [
        animate('0.6s ease-out')
      ]),
      transition('* => void', [
        animate('0.6s ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {
  faQuoteLeft = faQuoteLeft;

  frases: Frase[] = [
    {
      nombre: 'Israel',
      description: 'Una amistad no crece por la presencia de las personas sino por la magia de saber que aunque no las ves las llevas siempre en el corazón.',
      imagen: '/reproductoryfrases/Israel.webp'
    },
    {
      nombre:'Say',
      description: '💖Si la vida me hubiese dado una hermana me  hubiera gustado que fuera como tú .',
      imagen: '/reproductoryfrases/Sai.webp'
    },
    {
      nombre: 'Lily',
      description: '"Gracias por ser esa luz en mi vida, incluso a la distancia. Nuestra amistad es un verdadero regalo."',
      imagen: '/reproductoryfrases/Lily.webp'
    },
    {
      nombre: 'Daimita',
      description: 'Habrá nervios...habrá emoción...habrá deseos....también algunas lágrimas, pero la mayoría de alegria; xq todo comienzo trae cosas buenas y malas.',
      imagen: '/reproductoryfrases/Daimita.webp'
    },
    {
      nombre:'Ilia',
      description: 'Gracias porque a pesar de las distancias puedo sentir tu cariño muy cerquita de mí.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre:'Maria',
      description: 'Tu potencial es infinito',
      imagen: '/reproductoryfrases/Maria.webp'
    },
    {
      nombre:'Sely',
      description: '"Eres unica...no dejes apagar tu luz y brilla"',
      imagen: '/reproductoryfrases/Sely.webp'
    },
    {
      nombre:'Say',
      description: '💖Eres la artista de tu propio destino, no dejes nunca que nadie tome el pincel y pinte tu futuro',
      imagen: '/reproductoryfrases/Sai.webp'
    },
    {
      nombre:'Yude',
      description: 'Lo importante no es lo q tenemos en la vida, sino a quien tenemos en ella.',
      imagen: '/reproductoryfrases/Yude.webp'
    },
    {
      nombre:'Ilia',
      description: 'No importa cuánto tiempo te lleve lograrlo, nunca Midas tu tiempo con el de otros, ve a tu ritmo, eso también está bien.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre: 'Israel',
      description: 'Tengo una amiga que aunque se fue a vivir lejos... siempre tendrá un espacio en mi corazón.',
      imagen: '/reproductoryfrases/Israel.webp'
    },
    {
      nombre:'Claudia 🐤🐤🐤🐤',
      description: 'Tu luz ilumina donde quiera que llegas.',
      imagen: '/reproductoryfrases/Claudia3p.webp'
    },
    {
      nombre: 'Daimita',
      description: 'Muchas cosas en tu vida cambiarán  ,pero lo q siempre tendrás en esta  etapa es nuestro apoyo y nuestro cariño!!! ...cerca  o lejos siempre vamos a estar para Ti.',
      imagen: '/reproductoryfrases/Daimita.webp'
    },
    {
      nombre:'Ilia',
      description: 'Uno de los mejores ingredientes de mi vida es una pizca de tu amistad.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre:'Eyni',
      description: 'Dream big Amá!!.',
      imagen: '/reproductoryfrases/Einy.webp'
    },
    {
      nombre:'Say',
      description: '💖Las mejores cosas están por venir sigue creyendo en ti,amiga porque aún sea a la distancia yo estaré en primera fila para ver alcanzar tus metas y sueños anhelados.',
      imagen: '/reproductoryfrases/Sai.webp'
    },
    {
      nombre:'Ilia',
      description: 'Da, pero no permitas que te utilicen. Ama, pero no permitas que abusen de tu corazón. Confía, pero no seas ingenua. Escucha, pero no pierdas tu propia voz.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre:'Diana',
      description: '"Me has demostrado que la amistad no tiene nada que ver con los kilómetros. Y aunque estemos a cientos de kilómetros, siempre estamos cerquita".',
      imagen: '/reproductoryfrases/Diana.webp'
    },
    {
      nombre:'Valeria',
      description: 'Hay amigos, hay familia, y luego hay amigos que se convierten en familia.',
      imagen: '/distancia/Valeria.webp'
    },
    {
      nombre:'Iza',
      description: `Hay personas que brillan con luz propia
                    Hay personas que atraen a otras
                    Hay personas que son buenas consejeras
                    Y Dan buenas vibras a quienes rodean
                    Pues yo solo le pido a Dios
                    Que cuando te nos fueras
                    Esa comunidad se mantiviera
                    El contacto con nosotros siguiera
                    Y la alegría de Fénix contagiosa no se borre.`,
      imagen: '/reproductoryfrases/Iza.webp'
    },
    {
      nombre:'Say',
      description: '💖Jamás dudes de la gran madre que eres fíjate si eres increíble que tienes muchas hij@s en una comunidad.',
      imagen: '/reproductoryfrases/Sai.webp'
    },
    {
      nombre:'Muñe',
      description: 'Para lograr una amistad como la nuestra se necesita trabajar a diario en ella con mucha dedicación y amor. Nosotras lo hemos conseguido y más que una amistad hoy tenemos una hermandad.',
      imagen: '/reproductoryfrases/Muñe.webp'
    },
    {
      nombre:'Ilia',
      description: 'No se puede forzar una conexión con las personas ni con nada, la vida es muy corta para gastar el tiempo con cosas que te hagan infeliz.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre:'Eliany',
      description: `Florece donde la vida te plante y embellece el mundo con tu esencia.
                    Sé tú, eso es todo`,
      imagen: '/reproductoryfrases/Eliany.webp'
    },
    {
      nombre:'Lily Alexa',
      description: `La amistad duplica las alegrías y divide las angustias.`,
      imagen: '/reproductoryfrases/Lilyy.webp'
    },
    {
      nombre:'Ilennis',
      description: `"Nunca te canses de lo que eres,de lo que haces,de lo que transmites.Haz magia con tu sonrisa a donde quiera q vayas.
        Siempre.`,
      imagen: '/reproductoryfrases/Ilieny.webp'
    },
    {
      nombre:'Say',
      description: '💖Tienes más forchache que la propia palabra.',
      imagen: '/reproductoryfrases/Sai.webp'
    },
    {
      nombre:'Dani',
      description: '"Los buenos amigos son como las estrellas, no siempre los ves pero sabes que están ahí."',
      imagen: '/reproductoryfrases/Dani.webp'
    },
    {
      nombre:'Ilia',
      description: 'Después de todo no estamos tan lejos... Tú y yo vemos la misma Luna, cierto???.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre: 'Israel',
      description: 'Te deseo lo mejor para tu futuro, que encuentres lo que estás buscando y que seas feliz. No olvides que aquí siempre vas a tener un amigo.',
      imagen: '/reproductoryfrases/Israel.webp'
    },
    {
      nombre: 'Lily',
      description: '"Eres esa persona vitamina que alegra mis días. Gracias por estar siempre a mi lado, incluso a la distancia."',
      imagen: '/reproductoryfrases/Lily.webp'
    },
    {
      nombre: 'Patry',
      description: 'Quiero que todo te salga bien, que rías en voz alta, que cada sueño se cumpla, que alcances cada meta, quiero verte ganando en la vida.',
      imagen: '/reproductoryfrases/Patry_.webp'
    },

    {
      nombre:'Ilia',
      description: 'El encanto de cada alma está en el amor que tiene en su corazón, por eso la tuya es tan genial.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre:'Dani',
      description: 'Si vas a soñar, exagera!!.',
      imagen: '/reproductoryfrases/Dani.webp'
    },
    {
      nombre:'Say',
      description: '💖Siéntete orgullosa por toda la luz que llevas dentro, nadie la ve, pero tú lo sabes.',
      imagen: '/reproductoryfrases/Sai.webp'
    },
    {
      nombre:'Ilia',
      description: 'Puedes estar lejos de mis ojos pero no de mis buenas vibras.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre: 'Lily',
      description: '"La distancia no puede borrar el impacto positivo que tienes en mi vida. ¡Eres mi persona vitamina!"',
      imagen: '/reproductoryfrases/Lily.webp'
    },
    {
      nombre:'Muñe',
      description: 'Todos los días doy gracias a la maternidad por hacerme coincidir contigo y darme la oportunidad de conocerte y ser lo que somos hoy, amigas.',
      imagen: '/reproductoryfrases/Muñe.webp'
    },

    {
      nombre:'Say',
      description: '💖Nunca permitas que nadie ensucie tu mente ,tu puedes y se acabó.',
      imagen: '/reproductoryfrases/Sai.webp'
    },

    {
      nombre:'Ilia',
      description: 'Los amigos son como las estrellas, no siempre los puedes ver pero siempre brillarán.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre:'Dani',
      description: '"Los verdaderos amigos son aquellos que te levantan, cuando nadie más se ha dado cuenta que te has caído."',
      imagen: '/reproductoryfrases/Dani.webp'
    },
    {
      nombre:'Say',
      description: '💖Una mujer chingona levanta la cara y mira al mundo al tú por tú.',
      imagen: '/reproductoryfrases/Sai.webp'
    },
    {
      nombre: 'Lily',
      description: '"Siempre serás mi persona vitamina, dándome energía y alegría, sin importar la distancia entre nosotras."',
      imagen: '/reproductoryfrases/Lily.webp'
    },
    {
      nombre:'Ilia',
      description: 'Tengo una amiga compleja, complicada, de carácter fuerte, no es perfecta pero tiene buen corazón. Se pierde, se busca y se encuentra. Se entrega por completo, nunca será tu media amiga, ella es todo o nada. No soporta los términos medios.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre:'Muñe',
      description: 'Amigas toda la vida, amigas hasta la muerte, y como la muerte es vida amigas eternamente.',
      imagen: '/reproductoryfrases/Muñe.webp'
    },
    {
      nombre:'Say',
      description: '💖Conmigo siempre podrás contar, aún en tus días más oscuros que sientas que todo vale ingaaa.',
      imagen: '/reproductoryfrases/Sai.webp'
    },
    {
      nombre:'Ilia',
      description: '"Gracias por regalar un poquito de tu tiempo.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre:'Say',
      description: '💖Simplemente gracias por estar ,ser y existir.',
      imagen: '/reproductoryfrases/Sai.webp'
    },
    {
      nombre:'Ilia',
      description: 'La vida te da golpes duros pero Dios te da fuerzas para resistirlos.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
    {
      nombre:'Indi',
      description: `I'll be there`,
      imagen: '/reproductoryfrases/Indra.webp'
    },
    {
      nombre: 'claudia 🦋',
      description: 'Que nunca muera tu forma  tan linda de ver la vida. Que siempre brilles más que el sol. Que nunca se apague esa sonrisa y seas muy feliz  hoy y siempre.',
      imagen: '/reproductoryfrases/Claudia_M.webp'
    },
    {
      nombre: 'Lily',
      description: ' "Gracias por cada risa, cada consejo y cada momento compartido. La distancia no cambiará lo que somos."',
      imagen: '/reproductoryfrases/Lily.webp'
    },
    {
      nombre:'Ilia',
      description: 'Tengo una amiga que emite la misma energía que el verano durante todo el año.',
      imagen: '/reproductoryfrases/Ilia.webp'
    },
  ];


  currentIndex = 0;
  autoRotateInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.startRotation();
  }

  ngOnDestroy(): void {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }

  startRotation(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.frases.length;
    }, 7000);
  }

  setCurrentIndex(index: number): void {
    this.currentIndex = index;
    // Reset the interval when manually changing slides
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
      this.startRotation();
    }
  }

}
//<!-- <p><a href="https://wa.me/+5491123982541" target="_blank"><i class="fas fa-phone"></i> +5491123982541</a></p> -->
