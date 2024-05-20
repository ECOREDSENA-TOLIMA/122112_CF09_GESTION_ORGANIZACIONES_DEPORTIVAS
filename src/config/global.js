export default {
  global: {
    componenteFormativo:
      'Elementos conceptuales de la gestión de talento humano en organizaciones deportivas',
    descripcionCurso:
      'En este componente, se abordará, de forma general, la conceptualización referente al talento humano, la importancia y su rol dentro de la organización, además de la gestión y ejecución dentro de esta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
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
        titulo: 'Elementos conceptuales de la gestión del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Concepto y diferenciación de talento humano y recursos humanos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Rol e importancia de la gestión del talento humano en una empresa',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Gestión del talento humano en organizaciones deportivas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Planeación de la gestión del talento humano de acuerdo con objetivo y estrategias organizacionales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Construcción del plan de acción y cronograma de gestión del talento humano',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Técnicas para incorporar, recompensar, desarrollar, supervisar, retener y colocar a las personas en la empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Ejecución de un programa de reclutamiento y selección de personal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ejecución de un programa de incentivos y remuneración',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Aplicar el cumplimiento de prestaciones y servicios legales vigentes',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Ejecución de un programa de gestión del conocimiento',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Ejecución de un programa de sistemas integrados de gestión',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Ejecución de un programa de evaluación de desempeño',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Gestión del talento humano según estrategia y tipo de organización',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/121112_CF009_DU.pdf',
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
      tema:
        'Aplicar el cumplimiento de prestaciones y servicios legales vigentes',
      referencia: 'Gerencie.com. (2020). <em>Prestaciones sociales</em>.',
      tipo: 'Enlace de blog',
      link: 'https://www.gerencie.com/prestaciones-sociales.html',
    },
    {
      tema: 'Ejecución de un programa de evaluación de desempeño',
      referencia:
        'Araujo, R. (2021). <em>Calibración en la Evaluación de Desempeño.</em>',
      tipo: 'Página web',
      link:
        'https://qulture.rocks/es/blog/evaluacion-de-desempeno-como-funciona/',
    },
  ],
  glosario: [
    {
      termino: 'Gestión',
      significado:
        'conjunto de operaciones que se realizan para dirigir y administrar un negocio o una empresa.',
    },
    {
      termino: 'Recurso',
      significado:
        'ayuda o medio del que una persona se sirve para conseguir un fin o satisfacer una necesidad.',
    },
    {
      termino: 'Reclutamiento',
      significado:
        'es un conjunto de acciones que tiene por objetivo atraer candidatos potencialmente calificados con el fin de que se incorporen a la organización.',
    },
    {
      termino: 'Selección',
      significado:
        'acción y efecto de elegir a una o varias personas o cosas entre otras, separándolas de ellas y prefiriéndolas.',
    },
    {
      termino: 'Talento humano',
      significado:
        'conjunto de saberes, acciones, valores, aptitudes, actitudes, habilidades, motivaciones y expectativas que tiene un individuo dentro de un grupo de trabajo o en una organización.',
    },
  ],
  referencias: [
    {
      referencia: 'Mondy, R. W. (2055). Administración de Recursos Humanos.',
    },
    {
      referencia:
        'Chang, R. (1994). Mejora continua de procesos. Ediciones Granica.',
    },
    {
      referencia:
        'Chiavenato, I. (2009). Gestión del talento humano. McGraw-Hill.',
    },
    {
      referencia:
        'Código Sustantivo del Trabajo [CST]. Ley 141 de 1961. Artículos, 99, 230, 249, 306. Diciembre 16 de 1961 (Colombia).',
    },
    {
      referencia:
        'Mendoza, D., López, D. y Salas, E. (2016). Planificación estratégica de recursos humanos: Efectiva forma de identificar necesidades de personal. <em>Económicas CUC</em>, 37(1), p. 61-78.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5794127',
    },
    {
      referencia:
        'Norma Internacional [ISO]. (2015). Sistemas de gestión ambiental — Requisitos con orientación para su uso (ISO 14001).',
    },
    {
      referencia:
        'Organización Internacional de Normalización [ISO]. (2018). Sistemas de gestión de la seguridad y salud en el trabajo – Requisitos con orientación para uso (ISO 45001).',
    },
    {
      referencia: 'NormasIso.org. (s.f.). Norma ISO 30414:2018. Recuperado de.',
      link: 'https://normasiso.org/iso-30414-2018/',
    },
    {
      referencia:
        'Rondón, I. (2017). <em>Gerencia del talento humano</em>. Ediciones Universidad Cooperativa de Colombia. ',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/20363/1/2017_NC_Gerencia%20del%20talento%20humano_Rondon.pdf',
    },
    {
      referencia:
        'Taylor, B. y Harrison, J. (1991). Planeación estratégica exitosa. Legis Editores.',
    },
    {
      referencia:
        'Wayne, R. (2010). Administración de recursos humanos. Pearson Educación.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima. Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Tatiana Cristina Vargas',
          cargo: 'Experta temática',
          centro: 'Regional Antioquia. Centro de Servicios de Salud',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital. Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de Estilo',
          centro: 'Regional Tolima. Centro Agropecuario La Granja',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuadora Instruccional',
          centro:
            'Regional Distrito Capital. Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro:
            'Regional Distrito Capital. Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Tolima. Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima. Centro de Comercio y Servicios',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo Fullstack ',
          centro: 'Regional Tolima. Centro de Comercio y Servicios',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción Audiovisual',
          centro:
            'Regional Distrito Capital. Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluación de Contenidos Inclusivos y Accesibles',
          centro: 'Regional Tolima. Centro de Comercio y Servicios',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de Recursos Educativos Digitales',
          centro: 'Regional Tolima. Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de Recursos Educativos Digitales',
          centro: 'Regional Tolima. Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
