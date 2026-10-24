import {
  Amphora,
  BookOpen,
  ChefHat,
  Clapperboard,
  Coffee,
  Gem,
  Hammer,
  Heart,
  Layers,
  Leaf,
  Paintbrush,
  PenTool,
  Printer,
  Sparkles,
  Sun,
  Users,
  type LucideIcon,
} from 'lucide-react';

// Content source: "Creative Trail — Welcome & Information Pack" (Imani Collective, PIW 2026, Oct 27–29).
// Preserve wording/numbers exactly as published — do not invent prices, schedules, or policies.

export type CategoryKey = 'taste' | 'craft' | 'art' | 'community';
export type FilterKey = 'all' | 'free' | 'paid' | 'hands-on-crafts' | 'food-drink' | 'art-culture';

export interface StationVariant {
  label: string;
  description: string;
  sessions?: string;
  duration?: string;
  capacity?: string;
  price?: string;
}

export interface TrailStation {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: CategoryKey;
  /** Which filter chips this station should appear under, beyond "All". */
  tags: Exclude<FilterKey, 'all'>[];
  sessions?: string;
  duration?: string;
  ages?: string;
  capacity?: string;
  availability?: string;
  shop?: string;
  date?: string;
  time?: string;
  location?: string;
  price?: string[];
  free?: boolean;
  variants?: StationVariant[];
  /** Marks a station card with a feature label. */
  featured?: boolean;
}

export interface CategoryMeta {
  title: string;
  blurb: string;
  icon: LucideIcon;
  accent: string;
  chip: string;
}

export const CATEGORY_META: Record<CategoryKey, CategoryMeta> = {
  taste: {
    title: 'Taste & Nature',
    blurb: 'Savor coastal flavors and discover the natural ingredients behind them.',
    icon: ChefHat,
    accent: 'from-amber-400 to-orange-500',
    chip: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  craft: {
    title: 'Craft & Heritage',
    blurb: 'Hands-on weaving, carving, pottery and beadwork rooted in coastal tradition.',
    icon: Hammer,
    accent: 'from-emerald-400 to-emerald-600',
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  art: {
    title: 'Art & Design',
    blurb: 'Printmaking, sunlight art, henna and lettering from local makers.',
    icon: Paintbrush,
    accent: 'from-blue-400 to-indigo-600',
    chip: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  community: {
    title: 'Community & Showcase',
    blurb: 'Shared moments that celebrate kindness, film and fashion.',
    icon: Heart,
    accent: 'from-rose-400 to-pink-600',
    chip: 'bg-rose-50 text-rose-700 border-rose-100',
  },
};

export const FILTER_OPTIONS: {key: FilterKey; label: string}[] = [
  {key: 'all', label: 'All Stations'},
  {key: 'free', label: 'Free'},
  {key: 'paid', label: 'Paid'},
  {key: 'hands-on-crafts', label: 'Hands-On Crafts'},
  {key: 'food-drink', label: 'Food & Drink'},
  {key: 'art-culture', label: 'Art & Culture'},
];

export const CREATIVE_TRAIL_STATIONS: TrailStation[] = [
  {
    number: '01',
    title: 'Swahili Cooking',
    description: 'Discover the flavors of the coast through a hands-on traditional Swahili cooking experience.',
    icon: ChefHat,
    category: 'taste',
    tags: ['paid', 'food-drink'],
    sessions: '9 AM – 12 PM | 2 PM – 5 PM',
    duration: '3 hours',
    ages: '10+',
    capacity: '6 people per session',
    price: ['KES 4,500 per person'],
  },
  {
    number: '02',
    title: 'Tea Making',
    description: 'Explore the traditions of tea making through a live demonstration and guided tea tasting.',
    icon: Coffee,
    category: 'taste',
    tags: ['paid', 'food-drink'],
    sessions: 'Every hour from 9:30 AM',
    capacity: '10 people per session',
    price: ['KES 300 per person'],
  },
  {
    number: '03',
    title: 'Natural Botanicals',
    description: 'Explore natural ingredients, botanical products, and their uses through an interactive discovery station.',
    icon: Leaf,
    category: 'taste',
    tags: ['free'],
    availability: 'Walk-ins throughout the day',
    shop: 'Products available for purchase',
    free: true,
  },
  {
    number: '04',
    title: 'Weaving History',
    description: 'Discover the history and heritage of weaving in Kenya, exploring traditional materials, techniques, and craftsmanship.',
    icon: BookOpen,
    category: 'craft',
    tags: ['free'],
    availability: 'Walk-ins throughout the day',
    free: true,
  },
  {
    number: '05',
    title: 'Weaving Circle',
    description: 'Experience the art of weaving in a guided, hands-on session celebrating creativity and traditional craftsmanship.',
    icon: Users,
    category: 'craft',
    tags: ['paid', 'hands-on-crafts'],
    sessions: '10 AM – 12 PM | 2 PM – 4 PM',
    duration: '2 hours',
    ages: '6+',
    capacity: '15 people per session',
    price: ['KES 3,500 per person'],
  },
  {
    number: '06',
    title: 'The Kindness Exchange',
    description: 'A community experience celebrating generosity, connection, and the simple power of kindness.',
    icon: Heart,
    category: 'community',
    tags: ['free'],
    availability: 'Walk-ins throughout the day',
    free: true,
  },
  {
    number: '07',
    title: 'Natural Henna',
    description: 'Experience the beauty of traditional henna artistry with handcrafted designs using natural henna.',
    icon: Sparkles,
    category: 'art',
    tags: ['paid', 'art-culture'],
    sessions: 'Every 15 minutes · walk-ins all day',
    price: ['KES 1,000 adults, per hand', 'KES 700 children, per hand'],
  },
  {
    number: '08',
    title: 'Swahili Wood Carving',
    description: 'Discover traditional Swahili wood-carving techniques and create alongside local craftspeople.',
    icon: Hammer,
    category: 'craft',
    tags: ['paid', 'hands-on-crafts'],
    sessions: 'Every hour',
    capacity: '10 people per session',
    price: ['KES 1,000 per person'],
  },
  {
    number: '09',
    title: 'Reed Weaving',
    description: 'Learn the traditional craft of reed weaving and explore how natural materials are transformed into beautiful handmade pieces.',
    icon: Layers,
    category: 'craft',
    tags: ['paid', 'hands-on-crafts'],
    sessions: 'Every hour',
    capacity: '10 people per session',
    price: ['KES 1,000 per person'],
    shop: 'Raffle sign-in point for the Creative Trail passport',
  },
  {
    number: '10',
    title: 'Screenprinting',
    description: 'Get creative with a hands-on screenprinting experience and discover the process of printing designs onto materials.',
    icon: Printer,
    category: 'art',
    tags: ['paid', 'hands-on-crafts', 'art-culture'],
    sessions: 'Every hour',
    capacity: '10 people per session',
    price: ['KES 1,500 per person'],
  },
  {
    number: '11',
    title: 'Film & Fashion Showcase',
    description: 'Celebrate coastal creativity through film and fashion, highlighting local stories, designers, and makers.',
    icon: Clapperboard,
    category: 'community',
    tags: ['free', 'art-culture'],
    date: 'October 28 only',
    time: '5:30 – 7:00 PM',
    location: 'Forodhani',
    free: true,
    featured: true,
  },
  {
    number: '12',
    title: 'Mural Art',
    description: 'Be part of a collaborative community mural celebrating art, creativity, and the spirit of Old Town.',
    icon: Paintbrush,
    category: 'art',
    tags: ['free', 'art-culture'],
    availability: 'Walk-ins throughout the day',
    free: true,
  },
  {
    number: '13',
    title: 'Cyanotype Art',
    description: 'A sunlight-printing experience with two ways to take part.',
    icon: Sun,
    category: 'art',
    tags: ['paid', 'art-culture'],
    featured: true,
    variants: [
      {
        label: 'A · Design Your Own Kanga',
        description: 'Create your own kanga-inspired cyanotype design using sunlight.',
        sessions: '9:30 AM – 12:30 PM daily',
        duration: '3 hours',
        capacity: '10 per session',
        price: 'KES 5,000 per person',
      },
      {
        label: 'B · Sunprinting & Shadow Painting',
        description: 'Experiment with sunlight, shapes and shadows to create prints on paper.',
        sessions: 'Every hour',
        capacity: '10 per session',
        price: 'KES 1,000 per person',
      },
    ],
  },
  {
    number: '14',
    title: 'Pottery',
    description: 'Get your hands in clay and experience the joy of pottery through a guided creative session.',
    icon: Amphora,
    category: 'craft',
    tags: ['paid', 'hands-on-crafts'],
    sessions: 'Every 30 minutes',
    capacity: '2 people per session',
    price: ['KES 500 per person'],
  },
  {
    number: '15',
    title: 'Traditional Beadwork',
    description: 'Discover the beauty of traditional beadwork and create your own piece using colorful beads and creative patterns.',
    icon: Gem,
    category: 'craft',
    tags: ['paid', 'hands-on-crafts'],
    sessions: 'Every hour from 9:30 AM',
    capacity: '10 people per session',
    price: ['KES 1,000 ages 10+, per hour', 'KES 500 under 10, per hour'],
  },
  {
    number: '16',
    title: 'Calligraphy',
    description: 'Explore the art of beautiful lettering through a guided, hands-on calligraphy experience.',
    icon: PenTool,
    category: 'art',
    tags: ['paid', 'art-culture'],
    sessions: 'Every hour from 9:30 AM',
    capacity: '8 people per session',
    price: ['KES 500 per person, per hour'],
  },
];
