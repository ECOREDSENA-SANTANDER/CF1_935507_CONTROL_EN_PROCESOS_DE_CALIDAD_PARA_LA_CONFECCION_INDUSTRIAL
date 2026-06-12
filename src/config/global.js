export default {
  global: {
    Name: 'Insumos, textiles y maquinaria de confección',
    Description:
      'Mediante el estudio de este componente formativo el aprendiz logrará identificar y reconocer los insumos requeridos en cada una de las líneas de producto, las propiedades de los textiles y su composición para diferenciar su uso en las diferentes líneas de producción. Clasificar la maquinaria de confección, analizar los mecanismos de funcionamiento de la maquinaria para una óptima puesta a punto y proceder a su manejo, además, describe los ejercicios básicos para el manejo de las máquinas básicas. Reconocer las normas de calidad y la estructura de la norma internacional ISO 9001:2015.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Materiales e insumos de confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Clasificación y descripción de materiales de acuerdo con procesos de producción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Clasificación y descripción de insumos de acuerdo con líneas de producción',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación y descripción de textiles',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación y propiedades de hilos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: ' Clasificación y usos de tejidos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Aplicación de textiles de acuerdo con líneas de producción',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Maquinaria de confección industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Enhebrados de maquinaria de confección industrial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Graduación de tensiones de los hilos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Maquinaria básica',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Nivel de arrastre: ajuste de maquinaria',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Calibración de puntada',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo:
              'Puesta a punto de la maquinaría y prueba de costura según operación de confección',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo:
              'Manejo y operaciones básicas de máquinas de confección industrial',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Normas de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Normas técnicas colombianas en confección',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Normas de calidad internacional: ISO 9001 Versión 2015. Sistema de Gestión de la Calidad – Requisitos',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_935507_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Alfiler',
      significado:
        'clavo metálico muy fino que sirve generalmente para prender o sujetar alguna parte de las piezas de la prenda.',
    },
    {
      termino: 'Basta',
      significado:
        'hilo cruzado que cubre dos o más hilos de la dirección contraria, cuando se habla de ligamento de telas.',
    },
    {
      termino: 'Bordado',
      significado:
        'proceso donde se realizan las costuras ornamentales en relieve, que se aplican a una prenda, pueden ser diferentes figuras.',
    },
    {
      termino: 'Bralette',
      significado:
        'prenda que combina elementos de un brasier y top deportivo, principalmente en encaje y telas suaves y delicadas como el algodón o microfibras.',
    },
    {
      termino: 'Cajabobina',
      significado:
        'es la parte encargada de sostener la bobina (carretel) dentro del gancho, además proporciona la tensión necesaria y suficiente al hilo de la bobina para la formación de una puntada correcta.',
    },
    {
      termino: 'Calibrador de puntadas',
      significado:
        'regla calibradora de costuras, plástica provista de un indicador de pulgadas y centímetros, muy útil para detalles precisos. En costura permite medir las puntadas hechas en una costura o disminuir los márgenes de costura, también para medir dobladillos.',
    },
    {
      termino: 'Confección',
      significado:
        'proceso de unir varias piezas con costuras en diferentes operaciones iniciales, ensamble y terminación, para obtener una prenda terminada.',
    },
    {
      termino: 'Costura',
      significado:
        'es el resultado del proceso de coser, en el que se entrelazan hilos para unir dos o más piezas.',
    },
    {
      termino: 'Denim',
      significado:
        'tela en algodón en la que los hilos de trama son de color blanco y los hilos de urdiembre son de color azul, al cual por el nombre de su teñido se dice índigo, que se utiliza en la producción de prendas como jeans, chaquetas, blusas, overoles, chalecos.',
    },
    {
      termino: 'Embalaje',
      significado:
        'proceso de acondicionar las prendas para proteger o agrupar de manera temporal, teniendo en cuenta la manipulación, transporte y almacenamiento, se preserva la calidad del producto por medio de envoltura antes de entregar al cliente.',
    },
    {
      termino: 'Escalado',
      significado:
        'reducción o aumento del patrón de una prenda a una talla distinta en los puntos de medidas especificadas del patrón.',
    },
    {
      termino: 'Estampado',
      significado:
        'proceso de transferencia o impresión de dibujos o figuras, sean planas o en relieve, se colocan en la prenda con el fin de decorarla; existen varias técnicas como son sublimación, transfer, con vinilo textil, serigrafía, impresión directa.',
    },
    {
      termino: 'Hilatura',
      significado:
        'proceso para obtener el hilo uniforme y continuo, por medio de maquinados especializados.',
    },
    {
      termino: 'Hilo',
      significado:
        'producto de longitud sustancial y corte seccional relativamente pequeño, consistente de fibras o filamentos con o sin torsión.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alonso Felipe, J. (2015). Manual Control de calidad en productos textiles y afines [PDF] (p. 81).',
      link: 'http://oa.upm.es/38763/',
    },
    {
      referencia: 'Arcoline. (2020). Arcoline portafolio.',
      link: 'https://arcoline.com/portafolio/',
    },
    {
      referencia:
        'Celestecielo, G. (2012, junio). Montar cremallera El Rincón De celestecielo.',
      link:
        'https://elrincondecelestecielo.blogspot.com/2012/06/coser-cierres-o-cremalleras-de-forma.html',
    },
    {
      referencia: 'CI Estrada Velásquez CIA S.A.S. (2020). Insumos de moda.',
      link: 'https://www.estradavelasquez.com/index.php/insumos-moda',
    },
    {
      referencia: 'COATS Group. (2020). Productos. COATS.',
      link: 'https://www.coats.com/',
    },
    {
      referencia: 'Fabricato. (2020). Fabricato nuestros productos.',
      link: 'https://www.fabricato.com/es/nuestros-productos/vestuario',
    },
    {
      referencia: 'Gavilán, B. (2015, mayo 20). Tejido de punto. SlideShare.',
      link: 'https://www.slideshare.net/bladimirgavilan/tejido-punto',
    },
    {
      referencia:
        'IKONET. (2020). Ligamentos textiles básicos. Diccionario visual.',
      link:
        'http://www.ikonet.com/es/diccionariovisual/arte-y-arquitectura/oficios/tejido/ligamentos-textiles-basicos.php',
    },
    {
      referencia:
        'ISO. (s.f.) ISO 9001: 2015 (es) Sistemas de Gestión de Calidad.',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:es',
    },
    {
      referencia: 'Kette_und_Schuß. (2009, agosto 27). Trama y urdimbre.',
      link: 'https://commons.wikimedia.org/wiki/User:Ryj',
    },
    {
      referencia: 'Lafayette. (2020). Lafayette inspiración que transforma.',
      link: 'https://www.lafayette.com/',
    },
    {
      referencia:
        'ManualsLib. Enhebrado de la máquina - Manuales máquina de coser Brother T-8422A (p. 28).',
      link:
        'https://www.manualslib.com/manual/442249/Brother-T-8422a.html?page=28#manual',
    },
    {
      referencia:
        'ManualsLib. Enhebrado de la máquina - Manuales máquina de coser Brother ZM-851A (p. 47).',
      link:
        'https://www.manualslib.com/manual/442708/Brother-Zm-851a.html?page=47#manual',
    },
    {
      referencia:
        'ManualsLib. Enhebrado de la máquina - Manual de instrucciones JUKI MO-6704D (p. 40).',
      link:
        'https://www.manualslib.com/manual/559355/Juki-Mo-6704d.html?page=40#manual',
    },
    {
      referencia:
        'ManualsLib. Enhebrado de la máquina – Manual de instrucciones Siruba L818F (p. 18).',
      link:
        'https://www.manualslib.com/manual/1246266/Siruba-L818f.html?page=18#manual',
    },
    {
      referencia:
        'ManualsLib. Enhebrado de la máquina - Manual técnico de la serie Pegasus W500 (p. 9).',
      link:
        'https://www.manualslib.com/manual/1227894/Pegasus-W500-Series.html?page=9#manual',
    },
    {
      referencia:
        'ManualsLib. Preparativos antes de coser; Colocación de la aguja; Enhebrado del hilo superior - Brother BE-438D Manual de Instrucción (p. 30).',
      link:
        'https://www.manualslib.com/manual/452334/Brother-Be-438d.html?page=30#manual',
    },
    {
      referencia:
        'ManualsLib. Enhebrado del hilo superior - Brother HE-800B Manual de instrucciones (p. 31).',
      link:
        'https://www.manualslib.com/manual/483228/Brother-He-800b.html?page=31#manual',
    },
    {
      referencia:
        'ManualsLib. Preparación antes de coser; Instalación de la aguja; Enhebrado del hilo superior - Brother KE-430F Manual de instrucciones (p. 35).',
      link:
        'https://www.manualslib.com/manual/440963/Brother-Ke-430f.html?page=35#manual',
    },
    {
      referencia:
        'ManualsLib. Enhebrado del hilo superior - Brother RH-9820 Manual de instrucciones.',
      link:
        'https://www.manualslib.com/manual/814434/Brother-Rh-9820.html?page=40#manual',
    },
    {
      referencia:
        'ManualsLib. Enhebrando los hilos inferiores; enhebrado los hilos superiores - Manual de instrucciones Brother DA-9280 (p. 19).',
      link:
        'https://www.manualslib.com/manual/482480/Brother-Da-9280.html?page=19#manual',
    },
    {
      referencia:
        'Planeta Moda. (2018). Tejeduría. Tejido de punto y de calada.',
      link: 'https://youtu.be/JtKDv_xH9VI',
    },
    {
      referencia:
        'Salas, M. (2013). Análisis de textiles: curso básico. Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Sánchez, Á. (2012). Iniciación en materiales, productos y procesos textiles. IC Editorial.',
      link: '',
    },
    {
      referencia: 'SENA. (2012). La máquina de coser (pp. 6,14).',
      link:
        'https://repositorio.sena.edu.co/sitios/modisteria_conocimientos_basicos/hilos_maquina/pdf/maquina_coser.pdf',
    },
    {
      referencia: 'SENA. (2020). Alistamiento de máquina plana.',
      link: 'https://www.youtube.com/watch?v=YntKFwKopvQ',
    },
    {
      referencia:
        'S. L. Innovación y Cualificación. (2018). Técnicas básicas de corte, ensamblado y acabado de productos textiles (2. ed.). IC Editorial.',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=5885418',
    },
    {
      referencia: 'Sutex. (2020). Sutex textiles.',
      link:
        'https://www.sutex.com/?gclid=EAIaIQobChMIyqDz2_-b6wIVGP3jBx2q8Ad2EAAYASAAEgKmJ_D_BwE',
    },
    {
      referencia: 'Telas Patprimo. (2020). Telas PatPrimo Nuestras Telas.',
      link: 'http://www.telaspatprimo.com/inicio/nuestras-telas/',
    },
    {
      referencia:
        'Virtualpro. (2002). Procesos industriales, manufactura y producción.',
      link:
        'https://www-virtualpro-co.bdigital.sena.edu.co/download/fibras-textiles.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Cecilia Gutiérrez',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
