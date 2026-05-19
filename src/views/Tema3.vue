<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Puesta a punto y manejo básico de maquinaria de confección

    #t_3_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.1  Enhebrados de maquinaria de confección industrial

    .tarjeta.color-primario.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/Tema4/fashion.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.text-white Enhebrados de maquinaria de confección industrial
            .col-sm-auto
              a.boton.color-acento-botones(href="https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Procesamiento/935500/Contenido/OVA/AP1/CALIDAD_CONFECCION_CF1/media/documentos/Enhebrados_de_maquinaria_de_confeccion.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download
    separador
    #t_3_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.2  Graduación de tensiones de los hilos

    .fondo02.p-5(data-aos="zoom-in-left")
        .tarjeta.fondo-interno.p-5
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-lg-5.mb-4.mb-md-0
                p El tensor de hilo es un mecanismo encargado de hacer la oposición necesaria al paso del hilo, ya sea a un hilo superior o inferior, la presión ejercida por los discos tensores debe ser la correcta conforme a la necesidad de generar una puntada pareja.
              .col-lg-5.col-md-8
                .titulo-sexto.color-secundario(data-aos='fade-right')
                  h5 Figura 11.
                  span Formación de la puntada a máquina
                img(src='@/assets/curso/Tema3/fig11.svg', alt='')

            .row.justify-content-center.align-items-center
              .col-lg-5.mb-4.mb-md-0
                p Si se gira el botón tensor en dirección derecha se aumenta la tensión del hilo y en dirección izquierda se disminuye la tensión del hilo enhebrado.
              .col-lg-5.col-md-8
                .titulo-sexto.color-secundario(data-aos='fade-right')
                  h5 Figura 12.
                  span Tensores de hilo de máquina recubridora
                img(src='@/assets/curso/Tema3/fig12.png', alt='')

            .row.justify-content-center.align-items-center
              .col-lg-5.mb-4.mb-md-0
                p Una vez enhebrados los hilos adecuados en cada una de las máquinas se debe revisar la tensión del hilo de la aguja; tenga en cuenta la densidad del material y la operación a desarrollar; las variables anteriores se relacionan directamente con el óptimo ajuste de tensiones.
              .col-lg-5.col-md-8
                .titulo-sexto.color-secundario(data-aos='fade-right')
                  h5 Figura 13.
                  span Tensores de hilo de máquina fileteadora
                img(src='@/assets/curso/Tema3/fig13.png', alt='')

            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-md-0
                p Por medio de la observación y el tacto se puede apreciar si la puntada es correcta y es indispensable que la tensión del hilo de la aguja sea la adecuada, por lo que se pueden presentar los siguientes casos:
                p Exceso de tensión: el hilo de la aguja se encuentra muy tensionado y se observa totalmente por encima de la tela, pues la fuerza que ejerce es mayor a la del hilo de la bobina.
                p Poca tensión: el hilo de la aguja se encuentra poco tensionado y no tensa el hilo de la bobina hacia el centro del material, quedando en la parte inferior de la tela.
                p Tensión correcta: el hilo de la aguja y de la bobina tienen una tensión adecuada de forma que el entrelazamiento de los hilos queda en la mitad de la tela.
              .col-lg-4.col-md-8
                .titulo-sexto.color-secundario(data-aos='fade-right')
                  h5 Figura 14.
                  span Tensiones de puntada
                img(src='@/assets/curso/Tema3/fig14.svg', alt='')


    separador
    #t_3_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.3  Maquinaria básica
    br

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Máquina plana

    .bloque-texto-g.bloque-texto-g--inverso.bg8.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema3/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Al observar y percibir al tacto que la costura no se encuentra equilibrada o pareja se debe ajustar la tensión del hilo superior e inferior:
            br
            br
            | #[b Tensión del hilo superior:] para ajustar el hilo superior se debe tener el pie prensa tela abajo y se gira la tuerca según lo requerido
            br
            br
            | #[b Tensión del hilo de la cajabobina:] para ajustar el hilo se mueve el tornillo utilizando un destornillador a la medida de la ranura del tornillo.

    .row.justify-content-center.align-items-center.mb-3.bg11.p-5
      .col-lg-12
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Figura 15.
          span Costura máquina plana.
        img(src="@/assets/curso/Tema3/fig15.png", alt="Una fotografía en primer plano muestra el detalle de una Costura máquina plana sobre una tela de jean azul. Se observa una puntada doble y paralela realizada con hilo de color naranja, lo que permite a la persona interesada apreciar el acabado técnico y estético de este tipo de unión textil en una prenda real.")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Máquina fileteadora
    p Se ajustan los tensores según corresponda al hilo. La costura de fileteadora con puntada de refuerzo muestra en la siguiente figura.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Máquina recubridora
    p Teniendo en cuenta las costuras generadas se ajustan lo tensores que corresponden a cada hilo según el enhebrado.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Maquinaria especializada
  
    .row.justify-content-center.align-items-center.mb-3.bg11.p-5
      .col-lg-12
        img(src='@/assets/curso/Tema3/img02.png', alt='')

    p Máquinas de doble pespunte donde se utiliza caja bobina como:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8.bg11.p-4.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-4.col-7.mb-3
            img(src='@/assets/curso/Tema3/img04.svg', alt='')
          .col-lg-6
            ul.lista-ul
              li.d-flex
                i.fas •
                p.mb-0 Dos agujas

              li.d-flex
                i.fas •
                p.mb-0 Zigzadora

              li.d-flex
                i.fas •
                p.mb-0 Presilladora

              li.d-flex
                i.fas •
                p.mb-0 Ojaladora de ojal recto

              li.d-flex
                i.fas •
                p.mb-0 Botonadora

              li.d-flex
                i.fas •
                p.mb-0 Cerradora de codo

              li.d-flex
                i.fas •
                p.mb-0 Ojaladora de lágrima

              li.d-flex
                i.fas •
                p.mb-0 Multiagujas

      .col-lg-4.col-9.mb-3
        img(src='@/assets/curso/Tema3/img03.png', alt='')
    p La puntada de las máquinas se encuentra suelto o recogido el hilo de encima que pasan en medio de los tensores se mueve a la derecha o la izquierda según corresponda. En el caso tengan gancho giratorio, el hilo debajo de la caja bobina se mueve el tornillo de la caja bobina a la derecha o la izquierda según se requiera soltar o ajustar la tensión.


    separador
    #t_3_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.4  Nivel de arrastre: ajuste de maquinaria

    .row.justify-content-center.align-items-center.mb-4.bg9(data-aos="zoom-in-left")
      .col-lg-5.d-none.d-lg-block
        img.izq(src='@/assets/curso/Tema3/img05.png', alt='')
      .col-lg-7
        .row.p-2
          .col-lg-2.mb-3.col-3.col-md-2
            img(src='@/assets/curso/Tema3/ico.png', alt='')
          .col-lg-12
            p El nivel de arrastre relaciona el contacto de la pieza y los mecanismos de arrastre de la máquina, los cuales dependen del tipo de tejido y origen del textil que se esté utilizando, además de la operación a realizar.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Tipos de ajustes de maquinaria según línea de producto

    p El nivel de arrastre relaciona el contacto de la pieza y los mecanismos de arrastre de la máquina, los cuales dependen del tipo de tejido y origen del textil que se esté utilizando, además de la operación a realizar.

    .row
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/Tema3/1.svg', alt='')
          h4.text-center Arrastre pesado
          p.mb-0 Corresponde al conjunto formado por pie, dientes y planchuela fija los cuales son más gruesos para lograr el óptimo transporte en tejidos de alta densidad o grosor. Prendas de trabajo, prendas en denim mayor a 10 onzas.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/Tema3/2.svg', alt='')
          h4.text-center Arrastre semipesado
          p.mb-0 El conjunto de arrastre es menos grueso para tejidos semipesados. Se pueden trabajar telas como driles, gabardinas, telas para pantalón, composiciones en poliéster o polialgodón.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/Tema3/3.svg', alt='')
          h4.text-center Arrastre liviano
          p.mb-0 El conjunto de arrastre es para tejidos livianos como telas de ropa interior lycras, dacrones, chifones, satines, sedas.


    separador
    #t_3_5.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.5  Calibración de puntada

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ekwF948qscg?si=x7tKBv9AJS6XINsB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Operaciones basicas para el manejo en maquina plana de una aguja Paso 1.

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Z9ZCp_foHH4?si=Fw-9wJ4BH_RV4ALh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Operaciones basicas para el manejo en maquina plana de una aguja Paso 2.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Maquinaria básica

    .fondo02.p-5.mb-4(data-aos="zoom-in-left")
        SlyderE(indicadores="derecha").fondo-interno.p-5
          .row.justify-content-center
            .col-lg-4.mb-4.mb-md-0
              h5 Máquina plana
              p Para calibrar la puntada de la máquina plana se debe ajustar moviendo el mecanismo del dial o botón regulador de puntada, el cual se encuentra ubicado en el lado derecho del cabezote de la máquina y tiene unos números, 1 al 5 (máquinas ajuste liviano y semipesado) si el dial tiene 6, la máquina es de ajuste pesado. Entre más se mueva el dial aumentando el número la puntada es más larga y por lo tanto se tiene menos P.P.P se utilizan puntadas de 8 o 6 P.P.P para puntadas de pespuntes. En el caso contrario se disminuye el dial, obteniéndose más puntadas por pulgada en el caso de costuras internas 12 P.P.P.
            .col-lg-6.col-md-8
              figure
                img(src='@/assets/curso/Tema3/1.png', alt='Texto que describa la imagen')
      
          .row.justify-content-center
            .col-lg-4.mb-4.mb-md-0
              h5 Máquina fileteadora y recubridora
              p Se calibra la puntada activando un botón el cual se encuentra en la parte frontal del cabezote, que desengrana el mecanismo para que al mover el volante se pueda cambiar el largo de puntada, una vez se cambia el largo de puntada se deja de oprimir el volante. En el caso de sobrehilado y según lo especificado en la ficha técnica del producto, en panty o prendas deportivas como leggins por ejemplo se utilizan 14 a 16 P.P.P. para prendas en denim se utilizan sobrehilados entre 9 y 6 P.P.P. En la recubridora una operación como los dobladillos de camiseta se manejan 10 a 8 P.P.P.
            .col-lg-6.col-md-8
              figure
                img(src='@/assets/curso/Tema3/2.png', alt='Texto que describa la imagen')
    separador
    #t_3_6.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.6  Puesta a punto de la maquinaría y prueba de costura según operación de confección

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/98kBVOcq-2w?si=WFyGghOjLUmfsrCT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Puesta a punto máquina plana de una aguja paso 7 calibración de acuerdo con las especificaciones.

    separador
    #t_3_7.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.7  Manejo y operaciones básicas de máquinas de confección industrial
   
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ekwF948qscg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Operaciones basicas para el manejo en maquina plana de una aguja Paso 1.







</template>

<script>
export default {
  name: 'Tema3',
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
