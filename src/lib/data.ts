
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
      cpu: 'N/A',
      gpu: 'N/A',
      ram: 'N/A',
      storage: 'N/A',
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
      cpu: 'N/A',
      gpu: 'N/A',
      ram: 'N/A',
      storage: 'N/A',
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
      cpu: 'N/A',
      gpu: 'N/A',
      ram: 'N/A',
      storage: 'N/A',
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
      cpu: 'AMD Ryzen 5 5600X',
      gpu: 'N/A',
      ram: 'N/A',
      storage: 'N/A',
    },
  },
];

export const teamMembers = [
  {
    name: 'Julián',
    role: 'Ingeniero Especialista',
    bio: 'Julián es el cerebro detrás de nuestros ensambles más complejos, asegurando rendimiento y estabilidad.',
    image: '/A33.png',
  },
  {
    name: 'Jhon',
    role: 'Líder de Soluciones',
    bio: 'Jhon se especializa en crear soluciones a medida para las necesidades de cada cliente, desde gaming hasta producción.',
    image: '/A11.png',
  },
  {
    name: 'Anderson',
    role: 'Sales Manager',
    bio: 'Anderson te guiará para encontrar el equipo perfecto que se ajuste a tus metas y presupuesto.',
    image: '/A22.png',
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
        content: `
          <p>La VRAM, o Video RAM, es uno de los componentes más discutidos y, a menudo, malinterpretados al elegir una tarjeta gráfica (GPU). Actúa como una memoria ultrarrápida dedicada exclusivamente a las tareas gráficas, almacenando texturas, shaders y otros datos que la GPU necesita para renderizar imágenes en tu pantalla. En 2024, con juegos cada vez más complejos y aplicaciones más demandantes, la pregunta es más relevante que nunca: ¿cuánta VRAM necesitas realmente? Para una explicación más detallada, puedes consultar <a href="https://www.techspot.com/article/2670-what-is-vram/" target="_blank" rel="noopener noreferrer">este excelente artículo de TechSpot</a>.</p>
          
          <h2>Para el Gaming: Más Allá de los Números</h2>
          <p>La cantidad de VRAM necesaria para jugar depende en gran medida de tres factores: la resolución a la que juegas, la calidad de las texturas y si usas tecnologías como el <a href="https://www.nvidia.com/es-la/geforce/technologies/ray-tracing/" target="_blank" rel="noopener noreferrer">Ray Tracing</a>.</p>
          <ul>
              <li><strong>1080p (Full HD):</strong> Para la mayoría de los títulos actuales en alta calidad, 8 GB de VRAM son un punto de partida sólido y cómodo. Te permitirá disfrutar de texturas de alta resolución sin experimentar "stuttering" o caídas de rendimiento.</li>
              <li><strong>1440p (QHD):</strong> A esta resolución, la demanda de VRAM aumenta. 12 GB se están convirtiendo en el nuevo estándar para una experiencia fluida y sin compromisos, especialmente en juegos AAA con texturas de ultra calidad.</li>
              <li><strong>4K (UHD):</strong> Para jugar en 4K, la VRAM es crucial. Recomendamos un mínimo de 16 GB para evitar cuellos de botella. Juegos con mundos abiertos masivos y Ray Tracing pueden llegar a consumir incluso más.</li>
          </ul>
          
          <h2>Creación de Contenido: El Espacio es Poder</h2>
          <p>Para profesionales que trabajan con video, modelado 3D o diseño gráfico, la VRAM es tan importante como la potencia de procesamiento de la GPU. Programas como Adobe Premiere, DaVinci Resolve y Blender utilizan la VRAM para previsualizaciones en tiempo real, renderizado y manejo de assets complejos.</p>
          <blockquote>"En la edición de video 4K u 8K, cada GB de VRAM adicional se traduce en una línea de tiempo más fluida y exportaciones más rápidas."</blockquote>
          <p>Para estas tareas, 16 GB es un buen punto de partida, pero si trabajas con proyectos muy complejos o en resoluciones superiores a 4K, una GPU con 24 GB o más, como las de la serie RTX 4090 o las Quadro de NVIDIA, puede marcar una diferencia abismal en tu flujo de trabajo.</p>

          <h2>Inteligencia Artificial y Machine Learning</h2>
          <p>En el campo de la IA, la VRAM es el recurso más preciado. Los modelos de lenguaje grandes (LLMs) y los modelos de difusión para generación de imágenes requieren cargar enormes conjuntos de datos en la memoria de la GPU. Aquí, la regla es simple: más es siempre mejor. Para entrenar modelos o incluso para ejecutar modelos avanzados de forma local, 24 GB es a menudo el mínimo indispensable para no tener limitaciones severas.</p>
          
          <h2>Conclusión</h2>
          <p>La cantidad de VRAM que necesitas depende enteramente de tu caso de uso. No te dejes llevar únicamente por el marketing. Analiza tus necesidades reales: si eres un gamer de 1080p, 8-12 GB serán suficientes por ahora. Si eres un creador de contenido o un entusiasta del 4K, apunta a 16 GB o más. Y si la IA es tu campo de batalla, no hay límite para la cantidad de VRAM que puedes llegar a necesitar. En Gamers4Gamers, te ayudamos a encontrar el equilibrio perfecto para que tu inversión valga cada centavo.</p>
        `
    },
    {
        slug: 'duelo-de-cpus-intel-vs-amd-para-gaming',
        title: 'Duelo de CPUs: Intel vs. AMD para el máximo rendimiento en juegos',
        excerpt: 'La batalla por el trono del gaming continúa. Comparamos las últimas ofertas de Intel y AMD para ayudarte a elegir el procesador adecuado para tu próximo ensamble.',
        date: '2024-05-18',
        author: 'Jhon',
        image: 'https://picsum.photos/1200/801',
        content: `
          <p>La elección de la CPU es una de las decisiones más críticas al construir un PC para gaming. Durante años, Intel y AMD han luchado ferozmente por la supremacía, y en 2024, la competencia está más reñida que nunca. Ambos gigantes ofrecen procesadores con un rendimiento excepcional, pero con arquitecturas y filosofías diferentes. ¿Quién se lleva la corona?</p>
          
          <h2>Intel: El Rey de la Velocidad de un Solo Núcleo</h2>
          <p>Tradicionalmente, Intel ha destacado por su rendimiento superior en un solo núcleo. Esto es particularmente importante en muchos juegos que no aprovechan eficientemente múltiples núcleos. Con sus <a href="https://www.intel.la/content/www/xl/es/gaming/resources/performance-hybrid-architecture.html" target="_blank" rel="noopener noreferrer">arquitecturas híbridas (P-cores y E-cores)</a> en las últimas generaciones, Intel ofrece una combinación potente de velocidad para las tareas principales y eficiencia para las tareas en segundo plano.</p>
          <ul>
              <li><strong>Ventajas:</strong> Frecuencias de reloj más altas, liderazgo en rendimiento de un solo hilo, y una plataforma muy madura.</li>
              <li><strong>Ideal para:</strong> Gamers que buscan exprimir hasta el último fotograma por segundo (FPS) en títulos competitivos y juegos que dependen fuertemente de la velocidad de un solo núcleo.</li>
          </ul>
          
          <h2>AMD: El Campeón del Multitarea y la Eficiencia</h2>
          <p>AMD, con su arquitectura Zen, revolucionó el mercado al ofrecer un mayor número de núcleos y subprocesos a precios competitivos. Su tecnología <a href="https://www.amd.com/es/technologies/3d-v-cache.html" target="_blank" rel="noopener noreferrer">3D V-Cache</a>, presente en modelos como los Ryzen X3D, ha demostrado ser un cambio de juego para el gaming al aumentar drásticamente la caché L3, lo que reduce la latencia y mejora los FPS en muchos títulos.</p>
          <blockquote>"La tecnología 3D V-Cache de AMD ha posicionado a sus CPUs como una de las mejores opciones puramente para gaming, a menudo superando a la competencia en escenarios de juego reales."</blockquote>
          <p>Además, la eficiencia energética de los procesadores Ryzen suele ser superior, lo que se traduce en sistemas más frescos y silenciosos.</p>
           <ul>
              <li><strong>Ventajas:</strong> Excelente rendimiento multinúcleo (ideal para streaming y gaming simultáneo), eficiencia energética, y la innovadora tecnología 3D V-Cache.</li>
              <li><strong>Ideal para:</strong> Gamers que también son creadores de contenido, o aquellos que valoran una plataforma más eficiente y con un rendimiento de juego excepcional gracias a la caché extra.</li>
          </ul>

          <h2>¿Cómo elegir? Factores a Considerar</h2>
          <p>La elección final depende de tu presupuesto y tus prioridades:</p>
          <ol>
            <li><strong>Presupuesto:</strong> En la gama media, la competencia es feroz y ambas marcas ofrecen un valor increíble. En la gama alta, la decisión se inclina hacia qué tipo de rendimiento priorizas.</li>
            <li><strong>Uso Principal:</strong> Si solo juegas, un AMD Ryzen con 3D V-Cache puede darte una ligera ventaja. Si también trabajas con aplicaciones que demandan un alto rendimiento de un solo hilo, Intel podría ser la opción. Si haces mucho streaming o multitarea intensiva, la cantidad de núcleos de AMD puede ser decisiva.</li>
            <li><strong>Plataforma:</strong> Considera el costo total de la plataforma (CPU + placa base). A veces, una CPU puede ser más barata, pero requerir una placa base más cara.</li>
          </ol>
          
          <h2>Veredicto Final</h2>
          <p>En 2024, no hay un ganador absoluto. ¡Y eso es una gran noticia para los consumidores! Tanto Intel como AMD ofrecen productos fantásticos. La mejor CPU para ti es la que se alinea con tus necesidades específicas y tu presupuesto. En Gamers4Gamers, hemos construido innumerables sistemas con ambas marcas y podemos asesorarte para tomar la decisión perfecta para tu próximo PC de alto rendimiento.</p>
        `
    },
    {
        slug: 'construyendo-una-estacion-de-trabajo-silenciosa',
        title: 'El Arte del Silencio: Guía para construir una estación de trabajo silenciosa',
        excerpt: 'El rendimiento no tiene por qué ser ruidoso. Sigue nuestra guía para seleccionar componentes y técnicas para una estación de trabajo que se mantenga fría y silenciosa bajo presión.',
        date: '2024-05-25',
        author: 'Anderson',
        image: 'https://picsum.photos/1200/802',
        content: `
          <p>Una estación de trabajo potente es una herramienta esencial para cualquier profesional creativo. Sin embargo, el ruido constante de los ventiladores puede ser una gran distracción y afectar la concentración. Afortunadamente, con una selección cuidadosa de componentes y algunas técnicas de ensamblaje, es posible construir una máquina que sea tanto un monstruo de rendimiento como un susurro silencioso.</p>
          
          <h2>1. La Elección del Gabinete (Case)</h2>
          <p>El primer paso hacia el silencio es el gabinete. Busca modelos diseñados específicamente para la reducción de ruido. Estos gabinetes suelen tener características como:</p>
          <ul>
              <li><strong>Paneles insonorizados:</strong> Materiales densos que absorben las vibraciones y el sonido.</li>
              <li><strong>Diseño de flujo de aire optimizado:</strong> Permite que los ventiladores giren a velocidades más bajas sin sacrificar la refrigeración.</li>
              <li><strong>Construcción robusta:</strong> Acero grueso y pies de goma para minimizar la vibración estructural.</li>
          </ul>
          <p>Marcas como <a href="https://www.bequiet.com/es/" target="_blank" rel="noopener noreferrer">Be Quiet!</a>, Fractal Design y NZXT ofrecen excelentes opciones en esta categoría.</p>

          <h2>2. Refrigeración: Aire vs. Líquida</h2>
          <p>La refrigeración es la principal fuente de ruido en un PC. La clave es la eficiencia: un sistema de refrigeración más eficiente puede mantener las temperaturas bajas con velocidades de ventilador más lentas.</p>
          <ul>
              <li><strong>Refrigeración por Aire:</strong> Un disipador de CPU de torre grande con ventiladores de 140 mm puede ser increíblemente silencioso. Modelos como el Noctua NH-D15 o el Be Quiet! Dark Rock Pro son legendarios por su rendimiento y bajo nivel de ruido.</li>
              <li><strong>Refrigeración Líquida (AIO):</strong> Un AIO con un radiador grande (280 mm o 360 mm) permite una disipación de calor masiva. Esto significa que los ventiladores del radiador pueden funcionar a RPM muy bajas, resultando en un funcionamiento casi inaudible en reposo.</li>
          </ul>
           <blockquote>"El secreto no es eliminar los ventiladores, sino permitirles hacer su trabajo a la velocidad más baja posible."</blockquote>

          <h2>3. Ventiladores y Curvas de Ventilación</h2>
          <p>No todos los ventiladores son iguales. Invierte en ventiladores de alta calidad optimizados para la presión estática (para radiadores y disipadores) o para el flujo de aire (para el gabinete). Marcas como <a href="https://noctua.at/" target="_blank" rel="noopener noreferrer">Noctua</a>, Be Quiet! y Phanteks son líderes en este campo.</p>
          <p>Una vez instalados, es crucial configurar una <strong>curva de ventilación personalizada</strong> en la BIOS o mediante software. Ajusta los ventiladores para que permanezcan a bajas RPM (o incluso apagados) cuando la temperatura del sistema sea baja, y que solo aumenten de velocidad gradualmente bajo carga intensa.</p>
          
          <h2>4. La Fuente de Poder (PSU) y la GPU</h2>
          <p>Finalmente, no olvides la fuente de poder y la tarjeta gráfica.</p>
          <ul>
            <li><strong>PSU:</strong> Elige una fuente de poder con una alta calificación de eficiencia (80+ Gold o superior) y un modo "cero RPM" o "híbrido". Esto permite que el ventilador de la PSU se apague por completo bajo cargas bajas o medias.</li>
            <li><strong>GPU:</strong> Muchas tarjetas gráficas modernas también vienen con la función de parada de ventilador (0dB), donde los ventiladores no giran hasta que la GPU alcanza una cierta temperatura (generalmente alrededor de 50-60°C). Prioriza modelos con sistemas de refrigeración robustos de tres ventiladores.</li>
          </ul>

          <h2>Conclusión</h2>
          <p>Construir una estación de trabajo silenciosa es un acto de equilibrio entre rendimiento térmico y acústico. Al elegir componentes diseñados para el silencio y optimizar la forma en que funcionan juntos, puedes crear un entorno de trabajo tranquilo y productivo. En Gamers4Gamers, nos especializamos en ensambles personalizados que no solo son potentes, sino que también respetan tu necesidad de concentración.</p>
        `
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
