<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En resumen, la gestión del talento humano en organizaciones deportivas abarca tres áreas clave. La primera se enfoca en comprender el talento humano, su distinción de los recursos humanos, su relevancia estratégica y su planificación. La segunda se centra en técnicas para atraer, motivar, desarrollar, supervisar y retener al personal, abordando temas como el reclutamiento y la evaluación de desempeño. La tercera se ocupa de adaptar la gestión del talento humano a la estrategia y tipo de organización. Un mapa conceptual visualiza este proceso.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
