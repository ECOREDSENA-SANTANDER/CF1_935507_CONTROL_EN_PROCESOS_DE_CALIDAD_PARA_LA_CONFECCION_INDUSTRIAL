<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Materiales e insumos de confección
      

      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1  Clasificación y descripción de materiales de acuerdo con procesos de producción

      p Los materiales de confección son los insumos utilizados en los procesos de fabricación de una prenda, en los que se utilizan materiales indirectos que en el producto final no se evidencian.

      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4(data-aos="zoom-in-left")
        .row.justify-content-center(titulo="Proceso de diseño y desarrollo de producto")
          .col-lg-6.mb-4.mb-md-0
            p Para realizar este proceso de forma manual se requiere papel, lápices y colores para diseñar los bocetos; pero actualmente existen programas de software especializados para apoyar el proceso, lo cual reduce o elimina el uso de estos materiales. Para desarrollar el producto se realiza una muestra física que contenga todos los materiales necesarios para entregar la prenda terminada.
          .col-lg-5.col-md-9.col-10
            img(src='@/assets/curso/Tema1/1.png', alt='')
        
        .row.justify-content-center(titulo="Proceso de patronaje y escalado")
          .col-lg-6.mb-4.mb-md-0
            p Al igual que en el proceso anterior, si se realiza de manera digital, se disminuye el uso de materiales físicos. Para su realización de forma manual se requieren los siguientes materiales:
            ul.lista-ul
              li.d-flex.mb-0
                i.fas •
                | Lápiz HB o portaminas.
              li.d-flex.mb-0
                i.fas •
                | Borrador.
              li.d-flex.mb-0
                i.fas •
                | Papel manifold.
              li.d-flex.mb-0
                i.fas •
                | Cartón cartulina.
              li.d-flex.mb-0
                i.fas •
                | Micropuntas de diferentes colores.
              li.d-flex.mb-0
                i.fas •
                | Pegante de papel.
          .col-lg-5.col-md-9.col-10
            img(src='@/assets/curso/Tema1/2.png', alt='')

        .row.justify-content-center(titulo="Proceso de trazo y corte")
          .col-lg-6.mb-4.mb-md-0
            p Para realizar el corte de la tela es necesario trazar previamente sobre la misma el modelo desarrollado con sus piezas; para el corte se requieren los siguientes materiales:
            ul.lista-ul
              li.d-flex.mb-0
                i.fas •
                | Alfileres.
              li.d-flex.mb-0
                i.fas •
                | Papel kraft: ancho de 1,60 mts y gramaje entre 60 y 90 grs.
              li.d-flex.mb-0
                i.fas •
                | Papel bond: según ancho del plotter; gramaje de 75 grs.
              li.d-flex.mb-0
                i.fas •
                | Lápiz de color: color blanco o colores contrastantes.
              li.d-flex.mb-0
                i.fas •
                | Tiquetes: para maquinaria tiqueteadora para rotular piezas.
              li.d-flex.mb-0
                i.fas •
                | Cinta de enmascarar: se prefiere ancho de 1 pulgada.
          .col-lg-5.col-md-9.col-10
            img(src='@/assets/curso/Tema1/3.png', alt='')

        .row.justify-content-center(titulo="Proceso de confección")
          .col-lg-6.mb-4.mb-md-0
            p Es en el cual se unen las piezas, utilizando varias máquinas y operaciones. Insumo básico:
            ul.lista-ul
              li.d-flex.mb-0
                i.fas •
                | Agujas: su uso varía según el tipo de máquina utilizada en el proceso. Este tema se ampliará en una próxima unidad.
          .col-lg-5.col-md-9.col-10
            img(src='@/assets/curso/Tema1/4.png', alt='')

        .row.justify-content-center(titulo="Proceso de acabados")
          .col-lg-6.mb-4.mb-md-0
            p Son los que se llevan a cabo en la fase de terminado de la prenda como procesos de lavandería, estampación, bordado, rebordados y control de calidad; requieren los materiales utilizados en los procesos anteriores.
          .col-lg-5.col-md-9.col-10
            img(src='@/assets/curso/Tema1/5.png', alt='')

        .row.justify-content-center(titulo="Proceso de empaque y embalaje")
          .col-lg-6.mb-4.mb-md-0
            p Se incluyen materiales para entregar al consumidor para el proceso de ventas.
            ul.lista-ul
              li.d-flex.mb-0
                i.fas •
                | Ganchos para etiquetar.
              li.d-flex.mb-0
                i.fas •
                | Ganchos para colgar la prenda.
              li.d-flex.mb-0
                i.fas •
                | Bolsas.
              li.d-flex.mb-0
                i.fas •
                | Cajas.
          .col-lg-5.col-md-9.col-10
            img(src='@/assets/curso/Tema1/6.png', alt='')
      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2  Clasificación y descripción de insumos de acuerdo con líneas de producción

      p Los insumos son un elemento importante para el proceso de confección de la prenda ya que son elementos que están directamente involucrados debido a que su presencia permanece en el producto final.

      .bloque-texto-g.bg01.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/BG.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Es importante tener en cuenta las unidades de consumo de cada insumo en la confección de cada prenda, así como las unidades de compra para planificar adecuadamente la producción y no incurrir en desperdicios o en faltantes del insumo lo cual puede afectar la entrega oportuna del lote de producción requerido.
            br
            br
            | En las fábricas se establecen líneas de producción, que estarán acordes a las diferentes líneas del producto, especificadas a continuación:

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-11
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Figura 1.
            span Líneas de producto.
          img(src='@/assets/curso/Tema1/fig1.svg', alt='Un diagrama de flujo detalla la Línea de producción, ramificándose en Línea de producto de acuerdo al uso y Línea de producto según la persona consumidora. Varias categorías y subcategorías, como Casual, Formal e Infantil, se presentan visualmente con cuadros de colores.')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Clasificación de insumos

      .row.justify-content-start.mb-4
        .col-12.col-lg-7
          h4.bg3.py-2.w-card-text2 Sistemas de cierre

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-3.col-8.mb-3.col-md-4
          img(src="@/assets/curso/Tema1/img01.png")
        .col-lg-9.bg4.p-5.mb-3
          h4.bg5.py-2.w-card-text3.mb-4 Cremalleras
          p.text-white Las cremalleras son un sistema de cierre compuesto por dos tiras de tela, revestidas en sus orillas con pequeños dientes metálicos o de plástico que se traban o destraban entre sí por medio de un carril y se aplican en prendas de vestir u otros objetos.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Figura 2. 
            span Partes de cremallera.
          img(src='@/assets/curso/Tema1/fig2.svg', alt='Una infografía técnica detalla las partes de una cremallera abierta. Se señalan con flechas elementos como la cinta, los dientes, el jalador, el cursor y los topes, permitiendo a la persona usuaria identificar cada componente de este cierre textil.')
          figcaption Fuente: Celestecielo, (2012)

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Botones

      p Los botones son un sistema de cierre práctico, se clasifican de acuerdo con su diámetro, para ello tenga en cuenta que:

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-4
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Tabla 1.
            span Conversión de líneas de botones.
          .tabla-a.color-acento-contenido.tabla-ajustada.mb-5
            table
              thead
                tr
                  th.text-center.bg6.text-white Líneas
                  th.text-center.bg6.text-white Milímetros
              tbody.text-center
                tr
                  td 1
                  td 0,6325 mm
                tr
                  td 12
                  td 8 mm
                tr
                  td 14
                  td 9 mm
                tr
                  td 16
                  td 10 mm
                tr
                  td 18
                  td 11 mm
                tr
                  td 20
                  td 13 mm
                tr
                  td 22
                  td 14 mm
                tr
                  td 24
                  td 15 mm
                tr
                  td 28
                  td 18 mm
                tr
                  td 32
                  td 20 mm
                tr
                  td 36
                  td 23 mm
                tr
                  td 40
                  td 26 mm
                tr
                  td 44
                  td 28 mm
                tr
                  td 48
                  td 30 mm
                tr
                  td 54
                  td 34 mm
                tr
                  td 60
                  td 38 mm
                tr
                  td 70
                  td 45 mm
                tr
                  td 80
                  td 51 mm
                tr
                  td 90
                  td 58 mm

      .fondo01.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center
          .col-lg-11
            .row.justify-content-center.align-items-center
              .col-lg-3.col-6.mb-3.d-none.d-lg-block
                img(src='@/assets/curso/Tema1/img02.png', alt='')
              .col-lg-9.col-10.col-md-8
                SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-4")
                  .tarjeta.bg01.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/Tema1/1.svg' alt='')
                    h4.text-center.bg7.p-2.text-white Broches
                    p Plásticos o metálicos se colocan en una máquina llamada troqueladora, los troqueles se colocan las partes hembra y macho se cambian según tamaño y diseño.
                  
                  .tarjeta.bg01.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/Tema1/2.svg' alt='')
                    h4.text-center.bg7.p-2.text-white Gafetes o broches extensores
                    p Ganchos utilizados para unir las partes del brasier o de prendas de control.

                  .tarjeta.bg01.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/Tema1/3.svg' alt='')
                    h4.text-center.bg7.p-2.text-white Velcro
                    p Conformado por dos piezas; una sobre la otra se adhiere.

                  .tarjeta.bg01.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/Tema1/4.svg' alt='')
                    h4.text-center.bg7.p-2.text-white Insumos decorativos
                    p En el mercado se encuentran gran variedad en materiales y colores para agregar valor al producto debido a la diferenciación derivada de su uso como los encajes, cinta, cordones, pedrería, entre otros.

                  .tarjeta.bg01.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/Tema1/5.svg' alt='')
                    h4.text-center.bg7.p-2.text-white Insumos funcionales
                    p En la clasificación expuesta se pueden diferenciar usos diferenciados de los siguientes insumos: ojaletes u ojetes, taches, elásticos, sesgos, tancas, terminales, varillas, tensores, marquillas.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Insumos según prenda

      .bloque-texto-g.bloque-texto-g--inverso.bg8.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/BG1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En el diseño y desarrollo del producto se analiza y establecen los insumos necesarios cumpliendo con las expectativas del cliente.
            br
            br
            | La persona encargada de diseño debe determinar la mejor opción de los insumos que se adapte a su diseño teniendo en cuenta la tela y los procesos de confección para obtener la prenda terminada.
            br
            br
            | Teniendo en cuenta las líneas de producción se describen los insumos de las prendas más distinguidas.

      .fondo02.p-5(data-aos="zoom-in-left")
        .tarjeta.fondo-interno.p-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-5.mb-4.mb-md-0
                h4 Línea ropa exterior
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Camisa básica:] botones e hilos.
                  li.d-flex.mb-0
                    i.fas •
                    p #[b Pantalón básico:] cremallera, botones, cintas.
              .col-lg-5.col-md-8
                  img(src='@/assets/curso/Tema1/sly1.png', alt='')

            .row.justify-content-center
              .col-lg-5.mb-4.mb-md-0
                h4 Línea ropa deportiva
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Camiseta tipo polo:] botones, hiladillos, cuello y puños tejidos.
                  li.d-flex.mb-0
                    i.fas •
                    p #[b Pantalón sudadera:] sesgos, cordones, elásticos, tancas, terminales.
              .col-lg-5.col-md-8
                img(src='@/assets/curso/Tema1/sly2.png', alt='')

            .row.justify-content-center
              .col-lg-5.mb-4.mb-md-0
                h4 Línea ropa interior
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Panty femenino:] sesgos, elásticos, encaje elástico.
                  li.d-flex.mb-0
                    i.fas •
                    p #[b Bóxer masculino:] elásticos.
              .col-lg-5.col-md-8
                img(src='@/assets/curso/Tema1/sly3.png', alt='')

            .row.justify-content-center
              .col-lg-5.mb-4.mb-md-0
                h4 Línea ropa especialidad jean
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Chaqueta:] botón puntilla, taches.
                  li.d-flex.mb-0
                    i.fas •
                    p #[b Pantalón clásico:] cremallera metálica, botón puntillas, taches.
              .col-lg-5.col-md-8
                img(src='@/assets/curso/Tema1/sly4.png', alt='')
                      







































































  </template>

<script>
export default {
  name: 'Tema1',
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
