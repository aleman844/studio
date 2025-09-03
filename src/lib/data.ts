
export const products = [
  {
    id: 1,
    name: 'Audífonos Astro A50',
    slug: 'astro-a50-headset',
    category: 'Periféricos de Audio',
    price: 299.99,
    description: 'Experimenta un sonido legendario con los audífonos inalámbricos ASTRO A50. Ofrecen una acústica, ergonomía, comodidad y durabilidad que los jugadores y streamers exigen.',
    image: '/P2.jpeg',
    specs: {
      spec1: 'Sonido Dolby Audio y Dolby Atmos',
      spec2: 'Libertad inalámbrica de 5.8 GHz',
      spec3: 'Micrófono de varilla volteable para silenciar',
      spec4: 'Batería de más de 15 horas de duración',
    },
  },
  {
    id: 2,
    name: 'ROG Strix LC II 240 ARGB',
    slug: 'rog-strix-lc-ii-240',
    category: 'Enfriamiento Líquido',
    price: 199.99,
    description: 'El ROG Strix LC II 240 ARGB ofrece refrigeración líquida de CPU de alto rendimiento con una estética elegante y moderna. Su diseño de circuito cerrado y ventiladores ARGB mantienen tu sistema fresco y brillante.',
    image: '/P3.jpeg',
    specs: {
      spec1: 'Bomba Asetek de séptima generación',
      spec2: 'Ventiladores de radiador ROG optimizados',
      spec3: 'Iluminación Aura Sync RGB',
      spec4: 'Compatibilidad amplia con sockets Intel y AMD',
    },
  },
  {
    id: 3,
    name: 'Mouse Inalámbrico G305',
    slug: 'logitech-g305-mouse',
    category: 'Periféricos',
    price: 59.99,
    description: 'El G305 es un mouse inalámbrico para juegos LIGHTSPEED diseñado para un rendimiento serio con las últimas innovaciones tecnológicas. Disfruta de una duración de batería de 250 horas.',
    image: '/P4.jpeg',
    specs: {
      spec1: 'Sensor HERO de 12,000 DPI',
      spec2: 'Tecnología inalámbrica LIGHTSPEED ultrarrápida',
      spec3: 'Diseño ligero y compacto de 99 gramos',
      spec4: '6 botones programables',
    },
  },
   {
    id: 4,
    name: 'The Minimalist',
    slug: 'the-minimalist',
    category: 'Workstation',
    price: 1599.99,
    description: 'A compact and silent powerhouse for developers and designers who value a clean workspace. Don\'t let the size fool you, it\'s packed with professional-grade components.',
    image: 'https://picsum.photos/800/603',
    specs: {
      spec1: 'Intel Core i7-14700K',
      spec2: 'NVIDIA GeForce RTX 4060',
      spec3: '64GB DDR5 5200MHz',
      spec4: '2TB NVMe SSD',
    },
  },
];

export const teamMembers = [
  {
    name: 'Julián',
    role: 'Ingeniero Especialista',
    bio: 'Julián es el cerebro detrás de nuestros ensambles más complejos, asegurando rendimiento y estabilidad.',
    image: 'https://picsum.photos/200/200',
  },
  {
    name: 'Jhon',
    role: 'Líder de Soluciones',
    bio: 'Jhon se especializa en crear soluciones a medida para las necesidades de cada cliente, desde gaming hasta producción.',
    image: 'https://picsum.photos/201/201',
  },
  {
    name: 'Anderson',
    role: 'Sales Manager',
    bio: 'Anderson te guiará para encontrar el equipo perfecto que se ajuste a tus metas y presupuesto.',
    image: 'https://picsum.photos/202/202',
  },
];

export const blogPosts = [
    {
        slug: 'understanding-vram-how-much-do-you-need',
        title: 'Understanding VRAM: How Much Do You Really Need in 2024?',
        excerpt: 'Dive deep into the world of graphics card memory. We break down how much VRAM is enough for gaming, content creation, and AI development.',
        date: '2024-05-10',
        author: 'Julián',
        image: 'https://picsum.photos/1200/800',
    },
    {
        slug: 'cpu-showdown-intel-vs-amd-for-gaming',
        title: 'CPU Showdown: Intel vs. AMD for Pure Gaming Performance',
        excerpt: 'The battle for the gaming throne continues. We compare the latest offerings from Intel and AMD to help you choose the right processor for your next build.',
        date: '2024-05-18',
        author: 'Jhon',
        image: 'https://picsum.photos/1200/801',
    },
    {
        slug: 'building-a-silent-workstation-pc',
        title: 'The Art of Silence: A Guide to Building a Whisper-Quiet Workstation',
        excerpt: 'Performance doesn\'t have to be loud. Follow our guide to selecting components and techniques for a workstation that stays cool and quiet under pressure.',
        date: '2024-05-25',
        author: 'Anderson',
        image: 'https://picsum.photos/1200/802',
    }
]

export const computerParts = [
    { name: 'CPU', description: 'The brain of your computer.' },
    { name: 'GPU', description: 'Renders images, video and animations.' },
    { name: 'RAM', description: 'Temporary memory for active tasks.' },
    { name: 'Motherboard', description: 'Connects all the components.' },
    { name: 'PSU', description: 'Supplies power to the system.' },
    { name: 'Storage', description: 'Long-term storage for files.' },
    { name: 'Cooling', description: 'Keeps your components from overheating.' },
    { name: 'Case', description: 'The chassis that holds everything.' },
]
