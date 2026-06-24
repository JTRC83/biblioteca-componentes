/**
 * Definición de las 12 categorías de la biblioteca.
 * El slug se usa en la URL (/category/<slug>).
 */
import {
  Squares2X2Icon,
  CheckCircleIcon,
  AdjustmentsHorizontalIcon,
  RectangleStackIcon,
  ArrowPathIcon,
  PencilSquareIcon,
  RadioIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  SquaresPlusIcon,
  PaintBrushIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'

export const categories = [
  {
    slug: 'buttons',
    name: 'Buttons',
    description: 'Botones con efectos hover, gradientes, glass, glow y animaciones.',
    icon: Squares2X2Icon
  },
  {
    slug: 'checkboxes',
    name: 'Checkboxes',
    description: 'Checkboxes personalizados con animaciones CSS.',
    icon: CheckCircleIcon
  },
  {
    slug: 'toggles',
    name: 'Toggle switches',
    description: 'Switches on/off con transiciones suaves.',
    icon: AdjustmentsHorizontalIcon
  },
  {
    slug: 'cards',
    name: 'Cards',
    description: 'Tarjetas con efectos 3D, hover, glass y neomorfismo.',
    icon: RectangleStackIcon
  },
  {
    slug: 'loaders',
    name: 'Loaders',
    description: 'Spinners, loaders y animaciones de carga CSS puras.',
    icon: ArrowPathIcon
  },
  {
    slug: 'inputs',
    name: 'Inputs',
    description: 'Campos de texto con floating labels, focus effects y validación visual.',
    icon: PencilSquareIcon
  },
  {
    slug: 'radios',
    name: 'Radio buttons',
    description: 'Radios buttons con animaciones y estados personalizados.',
    icon: RadioIcon
  },
  {
    slug: 'forms',
    name: 'Forms',
    description: 'Formularios completos con estilos modernos.',
    icon: DocumentTextIcon
  },
  {
    slug: 'tooltips',
    name: 'Tooltips',
    description: 'Tooltips y popovers con animaciones CSS.',
    icon: ChatBubbleBottomCenterTextIcon
  },
  {
    slug: 'patterns',
    name: 'Patterns',
    description: 'Patrones decorativos de fondo con CSS.',
    icon: SquaresPlusIcon
  },
  {
    slug: 'backgrounds',
    name: 'Backgrounds',
    description: 'Fondos animados: gradientes, blobs, mallas y efectos.',
    icon: PaintBrushIcon
  },
  {
    slug: 'animations',
    name: 'Animations',
    description: 'Animaciones CSS puras: pulse, float, shake, glow…',
    icon: SparklesIcon
  }
]

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) || null
}
