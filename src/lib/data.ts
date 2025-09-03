export const products = [
  {
    id: 1,
    name: 'The Annihilator',
    slug: 'the-annihilator',
    category: 'Gaming PC',
    price: 3499.99,
    description: 'Engineered for elite 4K gaming, this beast handles any AAA title with ease. Featuring the latest generation CPU and GPU, liquid cooling, and a stunning tempered glass case.',
    image: 'https://picsum.photos/800/600',
    specs: {
      cpu: 'Intel Core i9-14900K',
      gpu: 'NVIDIA GeForce RTX 4090',
      ram: '64GB DDR5 6000MHz',
      storage: '4TB NVMe SSD',
    },
  },
  {
    id: 2,
    name: 'Creator\'s Canvas',
    slug: 'creators-canvas',
    category: 'Graphic Design Workstation',
    price: 4299.99,
    description: 'The ultimate machine for creative professionals. Renders, models, and edits in record time. Color-accurate display support and massive storage for all your projects.',
    image: 'https://picsum.photos/800/601',
    specs: {
      cpu: 'AMD Ryzen Threadripper PRO 7965WX',
      gpu: 'NVIDIA Quadro RTX 6000',
      ram: '128GB DDR5 ECC',
      storage: '8TB NVMe SSD + 16TB HDD',
    },
  },
  {
    id: 3,
    name: 'The Vanguard',
    slug: 'the-vanguard',
    category: 'Gaming PC',
    price: 1999.99,
    description: 'The perfect entry point into high-performance 1440p gaming. Balanced, powerful, and upgradeable, The Vanguard is ready for today\'s and tomorrow\'s games.',
    image: 'https://picsum.photos/800/602',
    specs: {
      cpu: 'AMD Ryzen 7 7800X3D',
      gpu: 'NVIDIA GeForce RTX 4070 Super',
      ram: '32GB DDR5 5600MHz',
      storage: '2TB NVMe SSD',
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
      cpu: 'Intel Core i7-14700K',
      gpu: 'NVIDIA GeForce RTX 4060',
      ram: '64GB DDR5 5200MHz',
      storage: '2TB NVMe SSD',
    },
  },
];

export const teamMembers = [
  {
    name: 'Alex "Cable" Johnson',
    role: 'Lead System Architect',
    bio: 'With 15 years of experience, Alex designs our most innovative and powerful systems.',
    image: 'https://picsum.photos/200/200',
  },
  {
    name: 'Maria "Volt" Garcia',
    role: 'Head of Technical Services',
    bio: 'Maria ensures every build is perfect and provides top-tier support to our customers.',
    image: 'https://picsum.photos/201/201',
  },
  {
    name: 'Sam "Glitch" Chen',
    role: 'Pro Gamer & QA Lead',
    bio: 'Sam stress-tests every gaming rig to guarantee competitive-level performance.',
    image: 'https://picsum.photos/202/202',
  },
];

export const blogPosts = [
    {
        slug: 'understanding-vram-how-much-do-you-need',
        title: 'Understanding VRAM: How Much Do You Really Need in 2024?',
        excerpt: 'Dive deep into the world of graphics card memory. We break down how much VRAM is enough for gaming, content creation, and AI development.',
        date: '2024-05-10',
        author: 'Alex "Cable" Johnson',
        image: 'https://picsum.photos/1200/800',
    },
    {
        slug: 'cpu-showdown-intel-vs-amd-for-gaming',
        title: 'CPU Showdown: Intel vs. AMD for Pure Gaming Performance',
        excerpt: 'The battle for the gaming throne continues. We compare the latest offerings from Intel and AMD to help you choose the right processor for your next build.',
        date: '2024-05-18',
        author: 'Sam "Glitch" Chen',
        image: 'https://picsum.photos/1200/801',
    },
    {
        slug: 'building-a-silent-workstation-pc',
        title: 'The Art of Silence: A Guide to Building a Whisper-Quiet Workstation',
        excerpt: 'Performance doesn\'t have to be loud. Follow our guide to selecting components and techniques for a workstation that stays cool and quiet under pressure.',
        date: '2024-05-25',
        author: 'Maria "Volt" Garcia',
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
