<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Técnicas para incorporar, recompensar, desarrollar, supervisar, retener y colocar a las personas en la empresa
    p.mb-5(data-aos="fade-right") El papel de selección de personal es una oportunidad para reclutar al personal que realmente requiere la organización. En la gestión del talento humano, están integrados estos seis procesos:

    SlyderF.slider-card-edit.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img.img-float(src="@/assets/curso/temas/tema2/img-1.svg" alt="imagen decorativa")
        p.mb-1.fw-bold Proceso para incorporar personas
        p.mb-0 Reclutamiento y selección.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img.img-float(src="@/assets/curso/temas/tema2/img-2.svg" alt="imagen decorativa")
        p.mb-1.fw-bold Proceso para colocar personas
        p.mb-0 Diseño de puesto de trabajo y evaluación de desempeño.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img.img-float(src="@/assets/curso/temas/tema2/img-3.svg" alt="imagen decorativa")
        p.mb-1.fw-bold Proceso para recompensar a las personas
        p.mb-0 Remuneración, prestación y servicio.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img.img-float(src="@/assets/curso/temas/tema2/img-4.svg" alt="imagen decorativa")
        p.mb-1.fw-bold Proceso para desarrollar a personas
        p.mb-0 Capacitación, cambios y comunicación.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img.img-float(src="@/assets/curso/temas/tema2/img-5.svg" alt="imagen decorativa")
        p.mb-1.fw-bold Proceso para retener personas
        p.mb-0 Disciplina, seguridad y salud en el trabajo, calidad de vida, relacionamiento sindical.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img.img-float(src="@/assets/curso/temas/tema2/img-6.svg" alt="imagen decorativa")
        p.mb-1.fw-bold Proceso para supervisar personas
        p.mb-0 Banco de datos, sistemas de información administrativa.
    
    separador
    #t_2_1.titulo-segundo.color-acento-botones
      h2 2.1. Ejecución de un programa de reclutamiento y selección de personal
    
    p.mb-5(data-aos="fade-right") El reclutamiento y la selección de personal es el proceso por el cual la organización contrata el talento humano adecuado para los puestos de trabajo. Dentro de la planeación estratégica, deben estar incluidos el reclutamiento y la selección del personal. El reclutamiento, la incorporación y la selección de personal son conceptos que van de la mano, pero no tienen el mismo significado:

    .tarjeta.py-4.px-2(style="background-color: #DFE5FF")
      SlyderF.slider-card-edit(columnas="col-12" data-aos="fade-left")
        .d-flex.flex-wrap.align-content-center.w-100.px-2
          .col-lg-7.order-lg-1.order-2.pe-lg-4
            p.fw-bold La selección
            p.mb-0 En esta fase, se involucra directamente toda el área de recursos humanos de las organizaciones. Acá se ejecutan acciones y tácticas para incorporar el talento. En esta fase es donde se elige al aspirante con el mejor perfil, tras una serie de pruebas que dan como resultado al personal idóneo, que responde a las necesidades del puesto de trabajo. El proceso de selección compara candidatos usando entrevistas, pruebas de conocimiento, pruebas psicológicas y técnicas de simulación.
          img.col-lg-5.order-lg-2.order-1.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-7.png" style="max-width: 400px" alt="Imagen decorativa")
        
        .d-flex.flex-wrap.align-content-center.w-100.px-2
          .col-lg-7.order-lg-1.order-2.pe-lg-4
            p.fw-bold La incorporación
            p.mb-0 La etapa final del proceso es la incorporación del empleado. En esta fase, se definen roles y reglas laborales. Las organizaciones usan distintos métodos para seleccionar personas con habilidades adecuadas y que encajen en la cultura interna. El proceso busca una coincidencia entre lo que ofrecen las personas y lo que buscan las organizaciones. Además, las personas también eligen organizaciones que se ajusten a sus objetivos y valores.
          img.col-lg-5.order-lg-2.order-1.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-8.png" style="max-width: 400px" alt="Imagen decorativa")
        
        .d-flex.flex-wrap.align-content-center.w-100.pb-4.px-2
          .col-lg-7.order-lg-1.order-2.pe-lg-4
            p.fw-bold El esquema tradicional
            p En este esquema predomina lo operacional, obedece a un conjunto de rutinas y procedimientos que se ejecutan en secuencia, de manera uniforme. Bajo este enfoque, cada puesto vacante detona el proceso, que es totalmente orientado a la ejecución, por ello, se habla de una acción micro-orientada: lo que interesa es que se ocupe el puesto, es decir, el enfoque molecular del proceso. El modelo que se utiliza, entonces, es un modelo vegetativo, puesto que lo que se busca es que se ocupe la vacante para mantener el equilibrio de la organización.
            .col-auto.px-1.position-relative
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true; mostrarIndicador = false" style="border-radius: 40px")
                span.fw-bold(style="color: #FFCA00") Esquema tradicional
                .indicador--click(:style="mostrarIndicador ? '' : 'display: none'")
          img.col-lg-5.order-lg-2.order-1.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-9.png" style="max-width: 400px" alt="Imagen decorativa")
        
        .d-flex.flex-wrap.align-content-center.w-100.pb-4.px-2
          .col-lg-7.order-lg-1.order-2.pe-lg-4
            p.fw-bold El esquema moderno
            p En este esquema, predomina el enfoque estratégico. Desde aquí, el proceso busca incorporar personal para satisfacer las necesidades de la organización a largo plazo. Este va más allá de cada puesto e involucra la organización entera, es decir, la acción está macro-orientada, de ahí, su enfoque molar y global. Su modelo es incremental, ya que busca el crecimiento del capital humano a través de la mejora continua y la inclusión de los talentos, buscando innovación y creatividad como valores humanos.
            .col-auto.px-1.position-relative
              a.boton.color-acento-botones(@click="modal2 = true" style="border-radius: 40px")
                span.fw-bold(style="color: #FFCA00") El esquema moderno
          img.col-lg-5.order-lg-2.order-1.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-10.png" style="max-width: 400px" alt="Imagen decorativa")

    ModalA(:abrir-modal.sync="modal1")
      .d-block
        .card-img-float.mx-auto.mx-xxl-0.py-2.px-4.mt-0.mb-3(style="background-color: #2D54FE; border-radius: 40px")
          p.mb-0.fw-bold(style="color: white") Esquema tradicional
        .card-img-float.mx-auto.mx-xxl-0.p-3.mt-3(style="background-color: #FFCA00; border-radius: 10px")
          ul.mb-0
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Enfoque operacional
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Acción micro-orientada
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Enfoque molecular
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Modelo vegetativo
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Estabilidad
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Conservadurismo
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Importancia en la eficiencia del proceso
            li.d-flex.mb-0.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Centralización de la selección  en una sola  área
        img.mx-auto(src="@/assets/curso/temas/tema2/img-11.svg" style="max-width: 23px")
        .card-img-float.mx-auto.mx-xxl-0.py-2.px-4.mt-0.mb-3(style="background-color: #2D54FE; border-radius: 20px")
          p.mb-0.text-start(style="color: white") Ejecución de un programa de reclutamiento y selección de personal
    
    ModalA(:abrir-modal.sync="modal2")
      .d-block
        .card-img-float.mx-auto.mx-xxl-0.py-2.px-4.mt-0.mb-3(style="background-color: #2D54FE; border-radius: 40px")
          p.mb-0.fw-bold(style="color: white") Esquema moderno
        .card-img-float.mx-auto.mx-xxl-0.p-3.mt-3(style="background-color: #FFCA00; border-radius: 10px")
          ul.mb-0
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Enfoque estratégico
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Acción macro-orientada
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Enfoque molar
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Modelo incremental
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Inestabilidad y cambio
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Creatividad e innovación
            li.d-flex.mb-2.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Importancia en la eficacia
            li.d-flex.mb-0.align-items-start
              img.mt-2(src="@/assets/curso/temas/decorador-ul-2.svg" style="max-width: 14px")
              p.ps-2.mb-0(data-aos="fade-left") Descentralización de la selección
        img.mx-auto(src="@/assets/curso/temas/tema2/img-11.svg" style="max-width: 23px")
        .card-img-float.mx-auto.mx-xxl-0.py-2.px-4.mt-0.mb-3(style="background-color: #2D54FE; border-radius: 20px")
          p.mb-0.text-start(style="color: white") Ejecución de un programa de reclutamiento y selección de personal
    
    separador
    #t_2_2.titulo-segundo.color-acento-botones
      h2 2.2 Ejecución de un programa de incentivos y remuneración

    .d-flex.flex-wrap.mb-5.align-items-center
      img.col-lg-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-12.png" style="max-width: 400px" data-aos="fade-right")
      .col-lg-8.ps-lg-4(data-aos="fade-left")
        p Los incentivos y la remuneración de las personas tienen una relación directamente proporcional con el desempeño de las funciones. Los métodos más tradicionales son: el escalafón simple, las categorías previamente determinadas, la evaluación con puntos, etc. Este factor es la principal motivación para la eficiencia de los empleados, por lo cual se convierte en un punto estratégico de la organización; este factor, sin duda, repercute en el cumplimiento de los objetivos de la organización y, por ende, en la misión de la empresa.
        p.mb-0 Es necesario determinar las remuneraciones idóneas para la organización. Este término de remuneración se puede confundir con el sueldo mes a mes, pero se refiere, más bien, a la compensación en forma de incentivos, formación, capacitación, o beneficios no económicos. La remuneración total es un componente que utilizan muchas organizaciones, existen tres componentes de la remuneración total:

    img.d-none.d-lg-flex.mx-auto.mb-5(
      src="@/assets/curso/temas/tema2/img-13.svg"
      alt="Muestra diagrama de la remuneración total descrita en la parte inferior de la imagen"
      data-aos="fade-right"
    )
    img.d-flex.d-lg-none.mx-auto.mb-5(
      src="@/assets/curso/temas/tema2/img-13_2.svg"
      alt="Muestra diagrama de la remuneración total descrita en la parte inferior de la imagen"
      data-aos="fade-right"
    )

    p.mb-5(data-aos="fade-right") El sistema de un programa de incentivos y remuneración es un método que determina cómo recibe el trabajador los pagos y compensaciones por las tareas realizadas en la organización. Entre estas clases de remuneraciones económicas, también están:

    .row.justify-content-center.mb-5
      .col-xl.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.tarjeta(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-14.jpg", alt="Imagen decorativa sueldos y salarios")
          .text-white.crd_hover_txt--body(style="background-color: #2D54FE")
            h4.mb-3.text-center Sueldos y salarios
            p.mb-0.text-center Son los importes fijos; están determinados por las funciones ejecutadas y el cargo en la organización.
      .col-xl.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.tarjeta(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-15.jpg", alt="Imagen decorativa sobresueldos")
          .crd_hover_txt--body(style="background-color: #FFCA00")
            h4.mb-3.text-center Sobresueldos
            p.mb-0.text-center Es el pago de horas extras, cuando un trabajador labora más de las horas acordadas o días no laborales.
      .col-xl.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.tarjeta(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-16.jpg", alt="Imagen decorativa incentivos")
          .crd_hover_txt--body(style="background-color: #FE502D")
            h4.mb-3.text-center Incentivos
            p.mb-0.text-center Es otra manera de remunerar a los empleados y atraer nuevos talentos. Dentro de los incentivos, se encuentran: bonos, participación de utilidades y opciones de compra de acciones.
      .col-xl.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.tarjeta(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-17.jpg", alt="Imagen decorativa comisiones")
          .crd_hover_txt--body(style="background-color: #FFCA00")
            h4.mb-3.text-center Comisiones
            p.mb-0.text-center Es una forma de remuneración para asegurar la venta de productos o servicios. Las comisiones se calculan a través de porcentajes; el pago puede hacerse directamente o en una combinación de salario y comisión.
      .col-xl.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.tarjeta(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-18.jpg", alt="Imagen decorativa prestaciones")
          .text-white.crd_hover_txt--body(style="background-color: #2D54FE")
            h4.mb-3.text-center Prestaciones
            p.mb-0.text-center pueden ser los beneficios extras, como seguros de salud o de vida, también pueden ser dineros que se reciben anualmente.

    separador
    #t_2_3.titulo-segundo.color-acento-botones
      h2 2.3 Aplicar el cumplimiento de prestaciones y servicios legal vigentes
    
    p.mb-5(data-aos="fade-right") Las prestaciones sociales en Colombia son ayudas económicas que son implementadas por el gobierno para mejorar la calidad de vida de las personas y disminuir las brechas de desigualdad entre los trabajadores. En Colombia, las prestaciones sociales se definen a partir de la sentencia de la Corte Suprema de Justicia del 18 de julio de 1985, como: 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-19.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 …lo que debe el patrono al trabajador en dinero, especie, servicios u otros beneficios, por ministerio de la Ley, o por haberse pactado en convenciones colectivas o en pactos colectivos o en el contrato de trabajo, o establecida en el Reglamento Interno de Trabajo, en fallos arbitrales o en cualquier acto unilateral del patrono, para cubrir los riesgos o necesidades del trabajador que se originan durante la relación de trabajo o con motivo de la misma. Se diferencia del salario en que no es retributiva de los servicios prestados y de las indemnizaciones laborales en que no repara perjuicios prestados por el patrono.
    
    p.mb-5 Las prestaciones legales en Colombia las conforman:

    TabsB.color-acento-botones(data-aos="fade-left")
      .py-4.py-md-5(titulo="Prima de servicios" :icono="require('@/assets/curso/temas/tema2/icon-1.svg')" style="background-color: #FFFAE5")
        .row.col-xl-10.mx-auto
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2.order-md-1
            h4(style="color: #2D54FE") Artículo 306 del código sustantivo del trabajo
            p El empleador está obligado a pagar a su empleado o empleados la prestación social denominada prima de servicios, que corresponderá a 30 días de salario por año, la cual se reconocerá en dos pagos, así: la mitad, máximo el 30 de junio, y la otra mitad, a más tardar los primeros veinte días de diciembre.

          .col-md-6.col-lg-5.order-1.order-md-2.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-20.png' alt='Imagen decorativa prima de servicios' style="max-width: 365px")
      
      .py-4.py-md-5(titulo="Auxilio de cesantías" :icono="require('@/assets/curso/temas/tema2/icon-2.svg')" style="background-color: #FFFAE5")
        .row.col-xl-10.mx-auto
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2.order-md-1
            h4(style="color: #2D54FE") Artículo 249 del código sustantivo del trabajo
            p Todo empleador está obligado a pagar a sus trabajadores y a las demás personas que se indican en este Capítulo, al terminar el contrato de trabajo, como auxilio de cesantía, un mes de salario por cada año de servicios y proporcionalmente por fracción de año.

          .col-md-6.col-lg-5.order-1.order-md-2.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-21.png' alt='Imagen decorativa prima de servicios' style="max-width: 365px")
      
      .py-4.py-md-5(titulo="Interés sobre las cesantías" :icono="require('@/assets/curso/temas/tema2/icon-3.svg')" style="background-color: #FFFAE5")
        .row.col-xl-10.mx-auto
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2.order-md-1
            h4(style="color: #2D54FE") Artículo 99 de ley 50 de 1990
            ul
              li.d-flex.mb-2.pb-2.align-items-start
                p.fw-bold.mb-0(style="color: #FE502D") 1ª.
                p.ps-2.mb-0(data-aos="fade-left") El 31 de diciembre de cada año se hará la liquidación definitiva de cesantía, por la anualidad o por la fracción correspondiente, sin perjuicio de la que deba efectuarse en fecha diferente por la terminación del contrato de trabajo.
              li.d-flex.mb-2.pb-2.align-items-start
                p.fw-bold.mb-0(style="color: #FE502D") 2ª.
                p.ps-2.mb-0(data-aos="fade-left") El empleador cancelará al trabajador los intereses legales del 12% anual o proporcionales por fracción, en los términos de las normas vigentes sobre el régimen tradicional de cesantía, con respecto a la suma causada en el año o en la fracción que se liquide definitivamente.

          .col-md-6.col-lg-5.order-1.order-md-2.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-22.png' alt='Imagen decorativa prima de servicios' style="max-width: 365px")
      
      .py-4.py-md-5(titulo="La dotación" :icono="require('@/assets/curso/temas/tema2/icon-4.svg')" style="background-color: #FFFAE5")
        .row.col-xl-10.mx-auto
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2.order-md-1
            h4(style="color: #2D54FE") Artículo 230 del código sustantivo del trabajo
            p Todo empleador que habitualmente ocupe uno (1) o más trabajadores permanentes deberá suministrar cada cuatro (4) meses, en forma gratuita, un (1) par de zapatos y un (1) vestido de labor al trabajador cuya remuneración mensual sea hasta dos (2) veces el salario mínimo más alto vigente.  Tiene derecho a esta prestación el trabajador que en las fechas de entrega de calzado y vestido haya cumplido más de tres (3) meses al servicio del empleador.

          .col-md-6.col-lg-5.order-1.order-md-2.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-23.png' alt='Imagen decorativa prima de servicios' style="max-width: 365px")
      
      .py-4.py-md-5(titulo="Base para el pago de prestaciones sociales" :icono="require('@/assets/curso/temas/tema2/icon-5.svg')" style="background-color: #FFFAE5")
        .row.col-xl-10.mx-auto
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2.order-md-1
            h4(style="color: #2D54FE") Se liquidan a partir del artículo 127 del Código Sustantivo del Trabajo
            p Constituye salario no sólo la remuneración ordinaria, fija o variable, sino todo lo que recibe el trabajador en dinero o en especie como contraprestación directa del servicio, sea cualquiera la forma o denominación que se adopte, como primas, sobresueldos, bonificaciones habituales, valor del trabajo suplementario o de las horas extras, valor del trabajo en días de descanso obligatorio, porcentajes sobre ventas y comisiones.

          .col-md-6.col-lg-5.order-1.order-md-2.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-24.png' alt='Imagen decorativa prima de servicios' style="max-width: 365px")

      .py-4.py-md-5(titulo="La liquidación de las prestaciones sociales" :icono="require('@/assets/curso/temas/tema2/icon-6.svg')" style="background-color: #FFFAE5")
        .row.col-xl-10.mx-auto
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2.order-md-1
            h4(style="color: #2D54FE") Se realiza con base en el salario y los días trabajados, se estipulan unas fechas determinadas para cada concepto:
            ul
              li.d-flex.mb-2.pb-2.align-items-start
                .pe-2.mt-1(style="background-color: #2D54FE; width: 14px; min-width: 14px; height: 14px; border-radius: 50%")
                p.ps-2.mb-0(data-aos="fade-left") <b>Prima de servicio:</b> se debe de liquidar en Junio y Diciembre, o en la fecha que termine su contrato.
              li.d-flex.mb-2.pb-2.align-items-start
                .pe-2.mt-1(style="background-color: #2D54FE; width: 14px; min-width: 14px; height: 14px; border-radius: 50%")
                p.ps-2.mb-0(data-aos="fade-left") <b>Cesantías e intereses de cesantías:</b> al 31 de diciembre, o en el momento que se termine el contrato.

          .col-md-6.col-lg-5.order-1.order-md-2.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-25.png' alt='Imagen decorativa prima de servicios' style="max-width: 365px")
      
      .py-4.py-md-5(titulo="Las vacaciones" :icono="require('@/assets/curso/temas/tema2/icon-7.svg')" style="background-color: #FFFAE5")
        .row.col-xl-10.mx-auto
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2.order-md-1
            p No son consideradas prestaciones, puesto que se consideran un descanso remunerado.

          .col-md-6.col-lg-5.order-1.order-md-2.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-26.png' alt='Imagen decorativa prima de servicios' style="max-width: 365px")

    separador
    #t_2_4.titulo-segundo.color-acento-botones
      h2 2.4. Ejecución de un programa de gestión del conocimiento 

    p(data-aos="fade-right") La gestión del conocimiento es el conjunto de actividades y procesos para adquirir, aumentar, garantizar, distribuir y compartir el conocimiento entre todos los empleados, con el fin de mejorar el rendimiento de la organización o los resultados de un proyecto. La gestión del conocimiento en las organizaciones se produce cuando se transfieren conocimientos y experiencias de un colaborador a un equipo de trabajo, o de un colaborador a otro que forma parte de la organización. El conocimiento no puede ser exclusivo de cada empleado, debe ser  un patrimonio  de la empresa y, como tal, debe ser compartido. 

    p.mb-5(data-aos="fade-right") Para la ejecución, existe el conocimiento, el cual se constituye en un conjunto de saberes que se encuentran en continua evolución, continuamente están cambiando y mejorando. Hay varios tipos de conocimiento:

    .w-100.d-flex.flex-wrap.justify-content-center.mb-5
      .col-md-6.col-lg-5.px-2.d-flex.mb-5
        .text-white.card-img-float.mx-auto.w-100(style="background-color: #2D54FE; max-width: 505px; padding-top: 5.2rem" data-aos="flip-up")
          img.img-float(src="@/assets/curso/temas/tema2/img-27.svg" alt="imagen decorativa" style="max-width: 125px; top: -60px")
          p.mb-0.text-start <b>Explícito:</b> es el conocimiento que alcanza un grado de formalización, su proceso de transmisión se puede realizar más fácil a través de capacitaciones y cursos; en este tipo de conocimiento se elaboran documentos, reglas, códigos y normas. 
      .col-md-6.col-lg-5.px-2.d-flex.mb-5
        .card-img-float.mx-auto.w-100(style="background-color: #FFCA00; max-width: 505px; padding-top: 5.2rem" data-aos="flip-up")
          img.img-float(src="@/assets/curso/temas/tema2/img-28.svg" alt="imagen decorativa" style="max-width: 125px; top: -60px")
          p.mb-0.text-start <b>Táctico:</b> este es el conocimiento que posee cada persona y que se encuentra relacionado con su experiencia y habilidades adquiridas; es más difícil de compartir y comunicar.
    
    .d-flex.flex-wrap.mb-5.align-items-start
      .col-lg-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p Los beneficios de quienes aplican la gestión del conocimiento en las organizaciones son:
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Accesibilidad al conocimiento.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Reducción de tiempos para el desarrollo de nuevos productos y menor tiempo para mejorar productos existentes.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Disminución de costos asociados con la repetición de errores.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Manejo del conocimiento actualizado e innovador. Se podrá renovar continuamente el conocimiento útil y relevante.
      img.col-lg-4.mb-4.mb-lg-auto.mx-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-29.png" style="max-width: 400px" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") Estas son algunas herramientas utilizadas en la gestión del conocimiento:

    .container-100.py-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: bottom center; background-size: 100% auto;"
    )
      img.mx-auto.py-3.mb-5(src="@/assets/curso/temas/tema2/img-30.png" alt="Imagen decorativa" style="max-width: 1030px" data-aos="fade-left")
      p La aplicación de la gestión del conocimiento es importante para cualquier tipo de organización, permite emplear las mejores estrategias y soluciones, lo que resulta en una mejora en la eficiencia y en la productividad.

    separador
    #t_2_5.titulo-segundo.color-acento-botones
      h2 2.5 Ejecución de un programa de sistemas integrados de gestión 
    
    .d-flex.flex-wrap.mb-5.align-items-start
      .col-lg-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p Los sistemas integrados de gestión ayudan a las organizaciones a mejorar permanentemente la calidad de los productos y servicios. Los productos integrados de gestión ofrecen mayores beneficios que la ejecución de los diferentes sistemas por separado. En sí, se trata de un sistema diseñado para la gestión de múltiples elementos en concordancia con las diferentes áreas de la organización; esto implica una fusión de los diferentes sistemas de la organización y la aplicación de mejores prácticas específicas. Se obtienen varios beneficios con respecto a la integración de los diferentes sistemas:
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Se evita que los esfuerzos se repitan en diferentes sistemas por separado.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Se optimiza el uso del tiempo y los recursos.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Se mejora el trabajo en equipo y se agilizan los procesos.
      img.col-lg-4.mb-4.mb-lg-auto.mx-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-31.png" style="max-width: 400px" data-aos="fade-left")

    p.mb-5 La estructura de los sistemas integrados de gestión está conformada por un tronco y varias ramas, las cuales se determinan por los sistemas que están integrados en la organización. Los sistemas integrados de gestión generalmente están compuestos por:

    .d-flex.flex-wrap
      .col-lg-6.col-xl-3.px-2.d-flex
        .mb-5.position-relative.tarjeta.p-4(style="background-color: #D5DDFF; margin-top: 16rem;")
          img.mb-3.mx-auto.position-absolute(src="@/assets/curso/temas/tema2/img-32.svg" style="max-width: 150px; top: -274px; left: calc(50% - 75px)" data-aos="fade-left")
          h4.text-center(data-aos="fade-right") Sistema de calidad
          p.mb-0.text-center(data-aos="fade-right" style="font-size: 14px") Es el que garantiza los estándares de calidad, en cuanto a productos y servicios de la organización. En este sistema, aplica la norma ISO 901 de 2015.
      .col-lg-6.col-xl-3.px-2.d-flex
        .mb-5.position-relative.tarjeta.p-4(style="background-color: #FFDCD5; margin-top: 16rem;")
          img.mb-3.mx-auto.position-absolute(src="@/assets/curso/temas/tema2/img-33.svg" style="max-width: 150px; top: -274px; left: calc(50% - 75px)" data-aos="fade-left")
          h4.text-center(data-aos="fade-right") Sistema de seguridad y salud en el trabajo
          p.mb-0.text-center(data-aos="fade-right" style="font-size: 14px") Se ocupa de la prevención de riesgos laborales. Se trata de un conjunto de medidas para el bienestar físico, mental y social del trabajador. Para este sistema, aplican las normas: ISO 45001: 2018, OHSAS 18000.
      .col-lg-6.col-xl-3.px-2.d-flex
        .mb-5.position-relative.tarjeta.p-4(style="background-color: #FFF5CC; margin-top: 16rem;")
          img.mb-3.mx-auto.position-absolute(src="@/assets/curso/temas/tema2/img-34.svg" style="max-width: 150px; top: -274px; left: calc(50% - 75px)" data-aos="fade-left")
          h4.text-center(data-aos="fade-right") Sistema de gestión ambiental
          p.mb-0.text-center(data-aos="fade-right" style="font-size: 14px") Aquí se promueve la prevención en la protección del medio ambiente, la mitigación de los impactos ambientales y hacer cumplir las normativas relacionadas con el cuidado del medio ambiente. Para este sistema, aplica la norma: ISO 14001:2015.
      .col-lg-6.col-xl-3.px-2.d-flex
        .mb-5.position-relative.tarjeta.p-4(style="background-color: #FFDCD5; margin-top: 16rem;")
          img.mb-3.mx-auto.position-absolute(src="@/assets/curso/temas/tema2/img-35.svg" style="max-width: 150px; top: -274px; left: calc(50% - 75px)" data-aos="fade-left")
          h4.text-center(data-aos="fade-right") Sistema de gestión humana
          p.mb-0.text-center(data-aos="fade-right" style="font-size: 14px") Desde aquí se orientan todas las directrices para la gestión del talento humano dentro de la cultura empresarial y organizacional. Entre otras, busca captar el talento humano, mejorar la productividad de la empresa a partir del capital humano. Para este sistema aplica la norma: ISO 30414: 2019.

    separador
    #t_2_6.titulo-segundo.color-acento-botones
      h2 2.6 Ejecución de un programa de evaluación de desempeño

    .d-flex.flex-wrap.mb-5.align-items-start
      .col-lg-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p La evaluación de desempeño es un instrumento de medición del desempeño laboral de los trabajadores de la organización. Para el sistema de gestión del talento humano, es una de las herramientas más importantes para evaluar el desempeño de los colaboradores en todos los niveles de trabajo; incluye la parte directiva y la operativa. El objetivo de la evaluación de desempeño es identificar las fortalezas y debilidades de los colaboradores, con el ánimo de aplicar los correctivos de mejora continua en función de los objetivos de la organización.
        p.mb-0 Para realizar la evaluación de desempeño, es de vital importancia tener claridad sobre los perfiles y las respectivas funciones del cargo, además, se deben incluir otros aspectos, como las relaciones con los compañeros de trabajo y la gestión del conocimiento. Para ello, se tiene en cuenta la gestión del desempeño, la cual es un proceso cíclico que tiene dos fases; inicia al establecer las funciones que va a desempeñar el trabajador, teniendo en cuenta los objetivos y las metas de la organización, así como los resultados de la evolución de desempeño anterior, y finaliza con la evaluación de desempeño, para luego iniciar nuevamente el ciclo.
      img.col-lg-4.mb-4.mb-lg-auto.mx-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-36.png" style="max-width: 400px" data-aos="fade-left")
    .d-flex.flex-wrap.mb-5.align-items-center
      img.col-lg-4.mb-4.mb-lg-0.mx-auto.mt-auto(src="@/assets/curso/temas/tema2/img-37.png" style="max-width: 400px" data-aos="fade-right")
      .col-lg-8.ps-lg-4(data-aos="fade-left")
        p La evaluación de desempeño es el cierre de la gestión de desempeño, donde se pretende evaluar el desempeño del trabajador con relación a las expectativas que se plantearon al iniciar el ciclo. Generalmente, las evaluaciones de desempeño se dividen en dos dimensiones, la primera apunta a los resultados obtenidos, la segunda hace referencia al comportamiento; estas dos dimensiones son muy importantes en el proceso de desempeño, puesto que forman el eje del ciclo.
        p La evaluación de desempeño tiene como ejes principales:
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Medir el desempeño de los colaboradores, con fines de toma de decisiones.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Obtener insumos para que los colaboradores se desarrollen y mejoren su desempeño en el próximo ciclo.
    p(data-aos="fade-right") La estructura de la evaluación de desempeño generalmente está compuesta por una serie de encuestas, las cuales tratan aspectos de las dos dimensiones: funcional y comportamental. La escala para valorar la encuesta también está previamente definida. Para diseñar y aplicar un instrumento de evaluación de desempeño, existen múltiples metodologías: virtual, presencial, mixta, individual, grupal, anónima, etc.

    p.mb-5(data-aos="fade-right") Se recomienda que se apliquen las evaluaciones de desempeño como mínimo cuatro veces en el año, para poder hacer un seguimiento real. Los líderes del área de gestión de talento humano, en conjunto con los jefes de área, serán quienes se encarguen de evaluar a los colaboradores.

    img(src="@/assets/curso/temas/tema2/img-38.svg" data-aos="fade-right" alt="Diagrama muestra la gestión de desempeño, relacionada en la parte inferior de la imagen")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.slider-card-edit
  .slyder-f__btn
    .fa-chevron-right, .fa-chevron-left
      color: white
      background-color: #FE502D
      padding: .2rem
      min-width: 40px
      height: 40px
      max-height: 40px
      font-size: 30px
      display: flex
      justify-content: center
      align-items: center
      border-radius: 50%
  .slyder-f__slyde
    display: flex
.modal-a
  .modal-a__content
    max-width: 594px
    display: flex
    justify-content: center
</style>
