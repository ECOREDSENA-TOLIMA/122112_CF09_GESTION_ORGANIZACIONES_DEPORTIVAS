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
        img(src="@/assets/curso/temas/tema2/img-1.svg" class="img-float" alt="imagen decorativa")
        p.mb-1.fw-bold Proceso para incorporar personas
        p.mb-0 Reclutamiento y selección.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img(src="@/assets/curso/temas/tema2/img-2.svg" class="img-float" alt="imagen decorativa")
        p.mb-1.fw-bold Proceso para colocar personas
        p.mb-0 Diseño de puesto de trabajo y evaluación de desempeño.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img(src="@/assets/curso/temas/tema2/img-3.svg" class="img-float" alt="imagen decorativa")
        p.mb-1.fw-bold Proceso para recompensar a las personas
        p.mb-0 Remuneración, prestación y servicio.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img(src="@/assets/curso/temas/tema2/img-4.svg" class="img-float" alt="imagen decorativa")
        p.mb-1.fw-bold Proceso para desarrollar a personas
        p.mb-0 Capacitación, cambios y comunicación.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img(src="@/assets/curso/temas/tema2/img-5.svg" class="img-float" alt="imagen decorativa")
        p.mb-1.fw-bold Proceso para retener personas
        p.mb-0 Disciplina, seguridad y salud en el trabajo, calidad de vida, relacionamiento sindical.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img(src="@/assets/curso/temas/tema2/img-6.svg" class="img-float" alt="imagen decorativa")
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
      alt="Imagen decorativa"
      data-aos="fade-right"
    )
    img.d-flex.d-lg-none.mx-auto.mb-5(
      src="@/assets/curso/temas/tema2/img-13_2.svg"
      alt="Imagen decorativa"
      data-aos="fade-right"
    )

    p.mb-5 El sistema de un programa de incentivos y remuneración es un método que determina cómo recibe el trabajador los pagos y compensaciones por las tareas realizadas en la organización. Entre estas clases de remuneraciones económicas, también están:


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
