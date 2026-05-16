<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Normas de calidad
      
    #t_4_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.1  Normas técnicas colombianas en confección

    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema4/bg01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Norma técnica es la descripción documentada de los procesos estandarizados, resultado de un estudio y un consenso generalizado, por un organismo reconocido y especializado. A nivel nacional el ICONTEC es el organismo que realiza las funciones de normalizar las técnicas de calidad, el comité 062 está dedicado en las normas de confecciones y textiles.
          br
          br
          | A la fecha se encuentran en uso alrededor de 63 Normas Técnicas Colombianas (NTC), especializadas en el tema de textiles y confecciones. Estas normas otorgan certificados al cumplir con lo descrito. Varias de ellas tienen equivalencia en la normatividad internacional como el caso de las normas generadas por el Organismo Internacional de Estandarización (ISO).

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Normas técnicas en textiles

    p Estas normas técnicas especifican los requisitos necesarios para cumplir con las propiedades de los textiles y así controlar su calidad.
    p Algunas de las normas son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-7
        ul.lista-ul.lista-ul--separador
          li
            i.fas.fa-hilo
            | NTC 2398:1988 Textiles y confecciones. Ropa interior femenina de tejido plano.
          li
            i.fas.fa-hilo
            | NTC 1990:1994 Textiles y confecciones. Fibras. Fibras cortada de poliéster.
          li
            i.fas.fa-hilo
            | NTC 2337:1987 Textiles y confecciones. Hilazas de poliéster.

          li
            i.fas.fa-hilo
            | NTC 2089:2013 Hilos de algodón para coser.

          li
            i.fas.fa-hilo
            | NTC 730-1:2001 Textiles. Telas de tejido plano y telas de tejido de punto. Requisitos generales.

          li
            i.fas.fa-hilo
            | NTC 730-2:2001 Textiles. Telas de tejido plano. Requisitos generales.

          li
            i.fas.fa-hilo
            | NTC 730-3:2001 Textiles. Telas de tejido de punto. Requisitos generales.
      .col-lg-5.col-10.col-md-8
        img(src='@/assets/curso/Tema4/img01.png', alt='')



    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Normas técnicas en confección

    p Las normas técnicas en confección especifican los requisitos indispensables para cumplir con las necesidades y expectativas del cliente en las prendas confeccionadas.
    p Entre ellas se encuentran:

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.col-10.mb-3.col-md-8
        img(src="@/assets/curso/Tema4/img02.png")
      .col-lg-7
        ul.lista-ul.lista-ul--separador
          li.d-flex
            i.fas.fa-hilo
            p.mb-0 NTC-ISO 8559:1995 Fabricación de vestuario estudios antropométricos. dimensiones corporales.

          li.d-flex
            i.fas.fa-hilo
            p.mb-0 NTC 2399:2014 Textiles y confecciones. Ropa interior femenina de tejido de punto.

          li.d-flex
            i.fas.fa-hilo
            p.mb-0 NTC 1806:2014 Textiles. Código de rotulado para el cuidado de telas y confecciones mediante el uso de símbolos.

          li.d-flex
            i.fas.fa-hilo
            p.mb-0 NTC 2509:1988 Textiles y confecciones. Ropa para deporte.

    p Adicionalmente se cuenta con la GTC 230:2012 Guía para las buenas prácticas en la confección de prendas de vestir. Esta al ser un documento guía es de cumplimiento voluntario.

    separador
    #t_4_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.2  Normas de calidad internacional: ISO 9001 Versión 2015. Sistema de Gestión de la Calidad – Requisitos

    .row.justify-content-center.align-items-center.mb-4.bg9(data-aos="zoom-in-left")
      .col-lg-5.d-none.d-lg-block
        img.izq(src='@/assets/curso/Tema4/img03.png', alt='')
      .col-lg-7
        .row.p-2
          .col-lg-2.mb-3.col-3.col-md-2
            img(src='@/assets/curso/Tema4/img04.png', alt='')
          .col-lg-12
            p Norma reconocida a nivel internacional, está orientada a la eficacia del sistema de gestión de la calidad y es certificable, es decir, que un organismo acreditado, asegura por escrito que un producto, proceso o servicio, cumple con los requisitos especificados previamente para el mismo, lo que garantiza al cliente un nivel de calidad adecuado del bien o servicio que adquiere.


    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-8.bg10.p-5.mb-3
        p La norma está comprendida de la siguiente manera:
        h4 Generalidades
        h4 Principios
        ul.lista-ul
          li.d-flex.mb-0
            i.fas •
            p.mb-0 Objeto y campo de aplicación

          li.d-flex.mb-0
            i.fas •
            p.mb-0 Referencias normativas

          li.d-flex.mb-0
            i.fas •
            p.mb-0 Términos y definiciones

          li.d-flex.mb-0
            i.fas •
            p.mb-0 Contexto de la organización

          li.d-flex.mb-0
            i.fas •
            p.mb-0 Liderazgo

          li.d-flex.mb-0
            i.fas •
            p.mb-0 Planificación

          li.d-flex.mb-0
            i.fas •
            p.mb-0 Apoyo

          li.d-flex.mb-0
            i.fas •
            p.mb-0 Operación

          li.d-flex.mb-0
            i.fas •
            p.mb-0 Evaluación del desempeño

          li.d-flex.mb-0
            i.fas •
            p.mb-0 Mejora
      .col-lg-4.col-7.col-md-6
        img(src='@/assets/curso/Tema4/ico.svg', alt='')






























</template>

<script>
export default {
  name: 'Tema4',
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
