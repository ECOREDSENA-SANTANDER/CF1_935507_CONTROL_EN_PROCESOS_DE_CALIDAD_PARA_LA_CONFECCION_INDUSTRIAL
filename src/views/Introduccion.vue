<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    p El componente formativo denominado "Insumos, textiles y maquinaria de confección" tiene como objetivo principal brindar los conocimientos necesarios para que el aprendiz logre identificar y reconocer los insumos requeridos en las diversas líneas de producto. Asimismo, este espacio de aprendizaje permite comprender las propiedades de los textiles y su composición para lograr diferenciar su uso específico en la producción.
    
    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/portada/BG.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para facilitar la asimilación del conocimiento, el programa se encuentra estructurado en cuatro ejes temáticos fundamentales. El primero de ellos corresponde a los materiales e insumos, un apartado que se enfoca en la clasificación y la descripción detallada de estos elementos de acuerdo con los procesos y las líneas de producción. Seguidamente, se aborda el estudio de los textiles, analizando a profundidad sus propiedades, sus principales usos y la correcta aplicación de los diferentes tipos de tejidos.

          br
          br
          | Por otra parte, el componente incluye el estudio de la maquinaria de confección. En esta sección se enseña a clasificar los equipos industriales y a analizar sus mecanismos de funcionamiento para garantizar una óptima puesta a punto, abarcando adicionalmente la descripción de los ejercicios y las operaciones básicas para su correcto manejo. Por último, se integran las normas de calidad mediante la exposición de las normativas vigentes que rigen el sector, lo cual contempla tanto las normas técnicas colombianas aplicadas a la confección como la estructura y los requisitos del Sistema de Gestión de la Calidad bajo la norma internacional ISO 9001:2015.
    
   

</template>

<script>
export default {
  name: 'Introduccion',
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
