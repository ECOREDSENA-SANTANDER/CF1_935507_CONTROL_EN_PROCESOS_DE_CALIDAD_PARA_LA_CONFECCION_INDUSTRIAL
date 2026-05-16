<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta un esquema gráfico que sintetiza los elementos clave del componente formativo 'Insumos, textiles y maquinaria de confección'. A través de este mapa, podrá visualizar de manera estructurada los cuatro ejes temáticos desarrollados: la clasificación de materiales e insumos, las propiedades y usos de los textiles, los procedimientos para la puesta a punto y manejo de la maquinaria industrial, y las normas de calidad (como la ISO 9001 y las normas técnicas colombianas). Le invitamos a explorar este recurso para repasar y consolidar los conocimientos adquiridos, comprendiendo cómo se integran de manera integral en los procesos de producción.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Un mapa conceptual organiza los componentes de Insumos, textiles y maquinaria de confección. El diagrama se desglosa en cuatro ejes principales: materiales e insumos, textiles, puesta a punto y manejo de maquinaria, y normas de calidad. Cada sección detalla procesos técnicos, clasificaciones y normativas internacionales (como ISO 9001) para orientar a la persona interesada en la cadena de producción textil.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
