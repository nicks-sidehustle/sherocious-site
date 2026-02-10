export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: 'socks' | 'gift-box' | 'blanket-hoodie';
  image: string;
  amazonUrl: string;
  affirmations: string[];
  description: string;
  featured?: boolean;
}

export const products: Product[] = [
  // Gift Boxes (3-packs) - $24.99-$29.99
  {
    id: 'gift-box-amazing-badass',
    name: '3-Pack: F*cking Amazing Badass Goddess',
    tagline: 'For the woman who needs no introduction',
    price: 29.99,
    category: 'gift-box',
    image: '/images/products/gift-box-amazing.jpg',
    amazonUrl: 'https://www.amazon.com/SHEROCIOUS-Affirmation-Inspirational-Friendship-girlfriend/dp/B08LK555JR',
    affirmations: ['I am F*cking Amazing', 'Badass Goddess Warrior', 'Crazy Faith Crazy Miracles'],
    description: 'Keepsake gift box with affirmation card. Three pairs of premium inspirational socks.',
    featured: true,
  },
  {
    id: 'gift-box-beautiful-badass',
    name: '3-Pack: Beautiful Badass',
    tagline: 'Own your power. Be beautiful. Stay badass.',
    price: 29.99,
    category: 'gift-box',
    image: '/images/products/gift-box-beautiful.jpg',
    amazonUrl: 'https://www.amazon.com/SHEROCIOUS-Inspirational-Birthday-Friendship-girlfriend/dp/B0BCF6X12H',
    affirmations: ['One Tough Mother', 'Own Your Power', 'Beautiful Badass'],
    description: 'Keepsake gift box with affirmation card. Perfect for the strong women in your life.',
    featured: true,
  },
  {
    id: 'gift-box-crazy-badass',
    name: '3-Pack: A Little Crazy, A Lot Badass',
    tagline: 'Embrace the chaos. Own your strength.',
    price: 29.99,
    category: 'gift-box',
    image: '/images/products/gift-box-crazy.jpg',
    amazonUrl: 'https://www.amazon.com/SHEROCIOUS-Inspirational-Birthday-Friendship-girlfriend/dp/B0BHVR21FC',
    affirmations: ['Strong As A Mother', 'A Little Crazy A Lot Badass', 'Badass Goddess'],
    description: 'Keepsake gift box with affirmation card. For the woman who owns her quirks.',
  },
  {
    id: 'gift-box-goddess-shero',
    name: '3-Pack: Goddess Shero Warrior',
    tagline: 'Channel your inner goddess warrior',
    price: 24.99,
    category: 'gift-box',
    image: '/images/products/gift-box-goddess.jpg',
    amazonUrl: 'https://www.amazon.com/SHEROCIOUS-Inspirational-Birthday-Friendship-girlfriend/dp/B0BCF7B18D',
    affirmations: ['Badass Goddess Purple', 'Goddess Shero Warrior', 'Badass Goddess Royal'],
    description: 'Keepsake gift box with affirmation card. Purple goddess energy.',
  },

  // Individual Socks - $12.99-$13.99
  {
    id: 'socks-strong-resilient',
    name: 'I Am Strong, Resilient, Powerful',
    tagline: 'Remind yourself with every step',
    price: 13.99,
    category: 'socks',
    image: '/images/products/socks-strong.jpg',
    amazonUrl: 'https://www.amazon.com/SHEROcious-Positive-Gifts-Premium-Miracles/dp/B0BK5FPMTZ',
    affirmations: ['I Am Strong', 'I Am Resilient', 'I Am Powerful'],
    description: 'Premium cotton crew socks with bold affirmations. One size fits most.',
  },
  {
    id: 'socks-radiant-resilient',
    name: 'I Am Radiant, Resilient, Badass',
    tagline: 'Shine bright, stay strong',
    price: 12.99,
    category: 'socks',
    image: '/images/products/socks-radiant.jpg',
    amazonUrl: 'https://www.amazon.com/SHEROcious-Positive-Gifts-Premium-Miracles/dp/B0BBBWMFQX',
    affirmations: ['I Am Radiant', 'I Am Resilient', 'I Am Badass'],
    description: 'Premium cotton crew socks. Perfect self-care gift.',
  },
  {
    id: 'socks-bold-blessed',
    name: 'I Am Bold, Blessed, Beautiful',
    tagline: 'Blessed and bold',
    price: 12.99,
    category: 'socks',
    image: '/images/products/socks-bold.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0BBBWDMBY',
    affirmations: ['I Am Bold', 'I Am Blessed', 'I Am Beautiful'],
    description: 'Premium cotton crew socks with faith-inspired affirmations.',
  },
  {
    id: 'socks-capable-confident',
    name: 'I Am Capable, Confident, Unstoppable',
    tagline: 'Nothing can hold you back',
    price: 12.99,
    category: 'socks',
    image: '/images/products/socks-capable.jpg',
    amazonUrl: 'https://www.amazon.com/SHEROcious-Positive-Gifts-Premium-Miracles/dp/B0BK5CXTPW',
    affirmations: ['I Am Capable', 'I Am Confident', 'I Am Unstoppable'],
    description: 'Premium cotton crew socks. For the woman who gets things done.',
    featured: true,
  },
  {
    id: 'socks-crazy-badass-teal',
    name: 'A Little Crazy, A Lot Badass (Teal)',
    tagline: 'Embrace your beautiful chaos',
    price: 13.99,
    category: 'socks',
    image: '/images/products/socks-crazy-teal.jpg',
    amazonUrl: 'https://www.amazon.com/SHEROCIOUS-Novelty-Socks-Inspirational-birthday/dp/B08L76XJ8Y',
    affirmations: ['A Little Crazy', 'A Lot Badass'],
    description: 'Premium cotton crew socks in vibrant teal. Fan favorite.',
    featured: true,
  },

  // Blanket Hoodies (Gift Sets)
  {
    id: 'hoodie-beautiful-badass',
    name: 'Beautiful Badass - Blanket Hoodie Set',
    tagline: 'Cozy meets fierce. Hoodie + matching socks.',
    price: 49.99,
    category: 'blanket-hoodie',
    image: '/images/products/hoodie-beautiful.jpg',
    amazonUrl: 'https://www.amazon.com/dp/PLACEHOLDER', // Will update with real URL
    affirmations: ['Beautiful Badass'],
    description: 'Oversized blanket hoodie with matching Beautiful Badass socks. Ultimate self-care gift.',
    featured: true,
  },
  {
    id: 'hoodie-badass-goddess',
    name: 'Badass Goddess - Blanket Hoodie Set',
    tagline: 'Goddess-level comfort. Hoodie + matching socks.',
    price: 49.99,
    category: 'blanket-hoodie',
    image: '/images/products/hoodie-goddess.jpg',
    amazonUrl: 'https://www.amazon.com/dp/PLACEHOLDER', // Will update with real URL
    affirmations: ['Badass Goddess'],
    description: 'Oversized blanket hoodie with matching Badass Goddess socks. Perfect gift for her.',
  },
];

export const categories = [
  { id: 'gift-box', name: 'Gift Boxes', description: '3-pack sets in keepsake boxes' },
  { id: 'socks', name: 'Individual Socks', description: 'Single pairs of affirmation socks' },
  { id: 'blanket-hoodie', name: 'Blanket Hoodies', description: 'Cozy hoodie + sock sets' },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: Product['category']) => 
  products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);
