<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Textiles

    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1  Clasificación y descripción de textiles

    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los textiles se clasifican por su composición, teniendo en cuenta que su unidad es la fibra textil, de esta resultan los hilados, los tejidos y mallas, cuerdas y otras manufacturas semejantes. Las fibras pueden ser de origen natural o artificial. También se diferencian por sus propiedades físicas, químicas y geométricas. Existen también microfibras y nano fibras las cuales son mucho más finas.
          br
          br
          | Se debe conocer cuáles son las propiedades de los textiles para conocer su aplicación en el vestuario. Varias de esas propiedades las asociamos a los sentidos como percepción al tacto, aspecto visual, caída, capacidad de protección al clima, cuidado y conservación, confort, durabilidad y mantenimiento de la prenda.


    .tarjeta--container.row.mb-4
      .col-md.tarjeta.bg7.p-5.text-white
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/Tema2/1.png', alt='Texto que describa la imagen')          
        h2.text-center Propiedades geométricas
        p Longitud, finura, rizado, forma de sección transversal.
      
      .col-md.tarjeta.bg9.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/Tema2/2.png', alt='Texto que describa la imagen')          
        h2.text-center Propiedades físicas
        p Brillo y color, propiedades térmicas, eléctricas, mecánicas y de absorción.
      
      .col-md.tarjeta.bg12.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/Tema2/3.png', alt='Texto que describa la imagen')          
        h2.text-center Propiedades químicas
        p Resistencia del textil a químicos como ácidos, acción ante la luz solar, el agua, el calor (asbesto), microorganismos e insectos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Normas técnicas en textiles

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-12
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Tabla 2.
          span Clasificación de fibras textiles por su origen.
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.text-center.bg6.text-white(colspan="2") Naturales
                th.text-center.bg6.text-white(colspan="2") Sintéticos (hechas por el hombre)
            tbody
              tr
                td.text-center #[b Animales]
                td
                  ul.lista-ul
                    li.d-flex
                      i.fas •
                      p.mb-0 Seda
                    li.d-flex
                      i.fas •
                      p.mb-0 Lana
                    li.d-flex
                      i.fas •
                      p.mb-0 Pelos - alpaca, camello, mohair, cachemir.

                td.text-center(rowspan="2") #[b Polímeros naturales]
                td(rowspan="2")
                  ul.lista-ul
                    li.d-flex
                      i.fas •
                      p.mb-0 Elastodieno – caucho natural
                    li.d-flex
                      i.fas •
                      p.mb-0 Celulosa regenerada - rayón, viscosa, lyoncel
                    li.d-flex
                      i.fas •
                      p.mb-0 Ésteres de celulosa - acetato
                    li.d-flex
                      i.fas •
                      p.mb-0 Poliamidas – nylon
                    li.d-flex
                      i.fas •
                      p.mb-0 Poliéster
                    li.d-flex
                      i.fas •
                      p.mb-0 Poliuretano segmentado – elastano (spandex)
                    li.d-flex
                      i.fas •
                      p.mb-0 Derivados de polivinilo - acrílicas
                    li.d-flex
                      i.fas •
                      p.mb-0 Poliolefinas – polipropileno

              tr
                td.text-center #[b Vegetales]
                td
                  ul.lista-ul
                    li.d-flex
                      i.fas •
                      p.mb-0 Semilla hoja - algodón.
                    li.d-flex
                      i.fas •
                      p.mb-0 Liber (tallo) - fique, piña, sizal, lino, ramio, cáñamo, yute.

              tr
                td.text-center #[b Minerales]
                td
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas •
                      p.mb-0 Asbesto o amianto.

                td.text-center #[b Otras (no poliméricas)]
                td
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas •
                      p.mb-0 Vidrio, carbón, metal. Cerámicas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Mezclas de textiles

    p Las fibras se mezclan para aprovechar las fortalezas de sus fibras y compensar las debilidades de cada uno de los componentes, es así como se logra mejorar su textura, suavidad al tacto, aumentar funcionabilidad, durabilidad, resistencia a la abrasión, y hacerlas de fácil planchado, además de bajar costos de producción; la combinación de estas se puede dar por:

    .fondo02.p-5.mb-4(data-aos="zoom-in-left")
        SlyderE(indicadores="derecha").fondo-interno.p-5
          .row.justify-content-center
            .col-lg-4.mb-4.mb-md-0
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 Dimensiones de longitud y color que uniéndose forman hilos.
                li.d-flex
                  i.fas •
                  p.mb-0 Textil por trama y otro diferente en urdimbre.
                li.d-flex
                  i.fas •
                  p.mb-0 Binarias o terciarias que son muy importantes en las aplicaciones textiles.
                li.d-flex
                  i.fas •
                  p.mb-0 La lana presenta mezclas con poliéster, viscosa, acrílico y poliamida, con otros pelos nobles (alpaca, angora, vicuña y camello), incluso con algodón y lino para obtener sinergias de ambas fibras.
            .col-lg-6.col-md-8
              figure
                img(src='@/assets/curso/Tema2/01.png', alt='')
      
          .row.justify-content-center
            .col-lg-4.mb-4.mb-md-0
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 Franela: es la combinación en su composición de 55 % algodón y 45 % lana.
                li.d-flex
                  i.fas •
                  p.mb-0 Algodón poliéster en varios porcentajes: 50 % - 50 %; 65 % - 35 %; 40 % - 60 %. La mezcla disminuye la rugosidad del textil y por tanto facilita el planchado, además hace que el secado sea más rápido.
                li.d-flex
                  i.fas •
                  p.mb-0 Algodón con acrílico: hace que sea resistente y mejora el proceso de lavado.
            .col-lg-6.col-md-8
              figure
                img(src='@/assets/curso/Tema2/02.png', alt='')
          .row.justify-content-center
            .col-lg-4.mb-4.mb-md-0
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 Lana con acrílico: mejora la vida útil de la prenda.
                li.d-flex
                  i.fas •
                  p.mb-0 También se pueden juntar con poliamida.
                li.d-flex
                  i.fas •
                  p.mb-0 Lana con poliéster: hace que no se arrugue y facilita los procesos de plisado.
                li.d-flex
                  i.fas •
                  p.mb-0 Poliamida con poliuretano y también con lana. Seda con cachemir: es la pashmina, se confunde al reemplazar la viscosa que la hace más económica.
            .col-lg-6.col-md-8
              figure
                img(src='@/assets/curso/Tema2/03.png', alt='')

          .row.justify-content-center
            .col-lg-4.mb-4.mb-md-0
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 Seda con cachemir: es la pashmina, se confunde al reemplazar la viscosa que la hace más económica.
                li.d-flex
                  i.fas •
                  p.mb-0 Cáñamo y seda: telas tejidas en jacquar como damasco.
                li.d-flex
                  i.fas •
                  p.mb-0 Acetato con poliamida: mejora al tacto y es más resistente.
            .col-lg-6.col-md-8
              figure
                img(src='@/assets/curso/Tema2/04.png', alt='')


          .row.justify-content-center
            .col-lg-4.mb-4.mb-md-0
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 Viscosa con poliéster: disminuye el costo de producción de las prendas.
                li.d-flex
                  i.fas •
                  p.mb-0 El algodón se puede mezclar con: viscosa, lino, ramio o poliamida, también se puede mezclar con la poliamida y el poliuretano.
            .col-lg-6.col-md-8
              figure
                img(src='@/assets/curso/Tema2/05.png', alt='')

    separador 
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2  Clasificación y propiedades de hilos

    p En la siguiente tabla se muestra clasificación de los hilos según su elaboración:

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-12
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Tabla 3.
          span Clasificación de los hilos según fabricación.
        .tabla-a.color-acento-contenido.mb-4
          table
            caption Fuente: Sena, 2020
            thead
              tr
                th.text-center.bg6.text-white(colspan="2") Hilados (spun)
                th.text-center.bg6.text-white Filamentos
                th.text-center.bg6.text-white Otros
            tbody
              tr
                td.text-center #[b Sencillos]
                td
                  ul.lista-ul
                    li.d-flex
                      i.fas •
                      p.mb-0 Cardados
                    li.d-flex
                      i.fas •
                      p.mb-0 Peinados
                    li.d-flex
                      i.fas •
                      p.mb-0 Con efecto

                td(rowspan="2")
                  ul.lista-ul
                    li.d-flex
                      i.fas •
                      p.mb-0 Monofilamentos - multifilamentos lisos
                    li.d-flex
                      i.fas •
                      p.mb-0 Texturizados
                    li.d-flex
                      i.fas •
                      p.mb-0 Con o sin torsión

                td(rowspan="2")
                  ul.lista-ul
                    li.d-flex
                      i.fas •
                      p.mb-0 Trenzados
                    li.d-flex
                      i.fas •
                      p.mb-0 Coreply - corespun
                    li.d-flex
                      i.fas •
                      p.mb-0 Fantasía
                    li.d-flex
                      i.fas •
                      p.mb-0 Teñidos

              tr
                td.text-center #[b Doblados]
                td
                  ul.lista-ul
                    li.d-flex
                      i.fas •
                      p.mb-0 Con torsión
                    li.d-flex
                      i.fas •
                      p.mb-0 Retorcidos cableados
                    li.d-flex
                      i.fas •
                      p.mb-0 Sin torsión

          
    p Los hilos se caracterizan por su numeración o titulación, expresión de la longitud específica o la longitud por unidad de masa de un hilo. Cuando se habla de calibre, popularmente se entiende que se habla del grosor del hilo, pero se debe aclarar que técnicamente es la numeración de los hilos.
    p Existen dos sistemas de numeración:














































</template>

<script>
export default {
  name: 'Tema2',
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
