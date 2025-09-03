
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
    name: 'Procesador AMD Ryzen 5',
    slug: 'amd-ryzen-5-cpu',
    category: 'Componentes de PC',
    price: 189.99,
    description: 'El AMD Ryzen 5 es el procesador ideal para gamers y creadores de contenido que buscan un rendimiento excepcional. Con múltiples núcleos y la arquitectura Zen, ofrece una potencia increíble para multitarea y juegos intensivos.',
    image: '/P5.JPG',
    specs: {
      spec1: 'Arquitectura Zen de alto rendimiento',
      spec2: 'Múltiples núcleos y subprocesos para multitarea',
      spec3: 'Tecnología AMD StoreMI',
      spec4: 'Compatible con overclocking',
    },
  },
];

export const teamMembers = [
  {
    name: 'Julián',
    role: 'Ingeniero Especialista',
    bio: 'Julián es el cerebro detrás de nuestros ensambles más complejos, asegurando rendimiento y estabilidad.',
    image: '/A11.png',
  },
  {
    name: 'Jhon',
    role: 'Líder de Soluciones',
    bio: 'Jhon se especializa en crear soluciones a medida para las necesidades de cada cliente, desde gaming hasta producción.',
    image: '/A22.png',
  },
  {
    name: 'Anderson',
    role: 'Sales Manager',
    bio: 'Anderson te guiará para encontrar el equipo perfecto que se ajuste a tus metas y presupuesto.',
    image: '/A33.png',
  },
];

export const blogPosts = [
    {
        slug: 'entendiendo-la-vram-cuanta-necesitas-realmente',
        title: 'Entendiendo la VRAM: ¿Cuánta necesitas realmente en 2024?',
        excerpt: 'Sumérgete en el mundo de la memoria de las tarjetas gráficas. Analizamos cuánta VRAM es suficiente para gaming, creación de contenido y desarrollo de IA.',
        date: '2024-05-10',
        author: 'Julián',
        image: 'https://picsum.photos/1200/800',
    },
    {
        slug: 'duelo-de-cpus-intel-vs-amd-para-gaming',
        title: 'Duelo de CPUs: Intel vs. AMD para el máximo rendimiento en juegos',
        excerpt: 'La batalla por el trono del gaming continúa. Comparamos las últimas ofertas de Intel y AMD para ayudarte a elegir el procesador adecuado para tu próximo ensamble.',
        date: '2024-05-18',
        author: 'Jhon',
        image: 'https://picsum.photos/1200/801',
    },
    {
        slug: 'construyendo-una-estacion-de-trabajo-silenciosa',
        title: 'El Arte del Silencio: Guía para construir una estación de trabajo silenciosa',
        excerpt: 'El rendimiento no tiene por qué ser ruidoso. Sigue nuestra guía para seleccionar componentes y técnicas para una estación de trabajo que se mantenga fría y silenciosa bajo presión.',
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
