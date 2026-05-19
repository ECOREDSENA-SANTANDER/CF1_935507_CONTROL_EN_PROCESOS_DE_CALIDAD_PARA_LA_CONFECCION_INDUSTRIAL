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

    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-right')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los textiles se clasifican por su composición, teniendo en cuenta que su unidad es la fibra textil, de esta resultan los hilados, los tejidos y mallas, cuerdas y otras manufacturas semejantes. Las fibras pueden ser de origen natural o artificial. También se diferencian por sus propiedades físicas, químicas y geométricas. Existen también microfibras y nano fibras las cuales son mucho más finas.
          br
          br
          | Se debe conocer cuáles son las propiedades de los textiles para conocer su aplicación en el vestuario. Varias de esas propiedades las asociamos a los sentidos como percepción al tacto, aspecto visual, caída, capacidad de protección al clima, cuidado y conservación, confort, durabilidad y mantenimiento de la prenda.


    .tarjeta--container.row.mb-4(data-aos='fade-right')
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
      
      .col-md.tarjeta.bg12.p-5(data-aos='fade-right')
        .row.justify-content-center.mb-4
          .col-6.col-md-3
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

    .tarjeta--container.row.mb-4(data-aos='fade-right')
      .col-md.tarjeta.bg4.p-5.text-white
        .row.justify-content-center.mb-4
          .col-3.col-md-5
            figure
              img(src='@/assets/curso/Tema2/1.svg', alt='Texto que describa la imagen')          
        h3.text-center Sistema directo
        ul.lista-ul
          li.d-flex
            i.fas •
            p.mb-0  TEX: Unidad de medida del peso en gramos de 1000 metros de hilo.
          li.d-flex
            i.fas •
            p.mb-0 Se utiliza principalmente para medir hilos de filamento continuo: poliéster, poliamida, rayón, entre otros.
          li.d-flex
            i.fas •
            p.mb-0 DeciTex (dTex): 1/10 Tex.
          li.d-flex
            i.fas •
            p.mb-0 DENIER: Unidad de medida del peso en gramos de 9000 metros de hilo.
          li.d-flex
            i.fas •
            p.mb-0 Por lo tanto: 1 d TEX = 0,9 Denier.
      
      .col-md.tarjeta.bg13.p-5.text-white
        .row.justify-content-center.mb-4
          .col-3.col-md-5
            figure
              img(src='@/assets/curso/Tema2/2.svg', alt='Texto que describa la imagen')          
        h3.text-center Sistema inverso
        ul.lista-ul
          li.d-flex
            i.fas •
            p.mb-0 Expresa cuánto mide un determinado peso de hilo.
          li.d-flex
            i.fas •
            p.mb-0 Número métrico (Nm): número de metros que pesan un gramo o miles de metros por kilogramo.
          li.d-flex
            i.fas •
            p.mb-0 Teniendo en cuenta lo anterior se presenta la equivalencia de los dos sistemas:
          li.d-flex
            i.fas •
            p.mb-0 En el sistema inverso, entre más alta es la numeración el hilo es menos grueso.
          li.d-flex
            i.fas •
            p.mb-0  En el sistema directo, entre menor sea la numeración el hilo es menos grueso.

    p A continuación, se establece la equivalencia de los dos sistemas.
    .titulo-sexto.color-secundario(data-aos='fade-right')
      h5 Tabla 4.
      span Equivalencia de sistemas de titulación de hilos.

    .tabla-a.color-acento-botones.mb-5(data-aos='fade-right')
      table
        tbody
          tr.bg14
            td.text-center Nm
            td.text-center 120
            td.text-center 75
            td.text-center 50
            td.text-center 36
            td.text-center 30
            td.text-center 25
            td.text-center 16
          tr
            td.text-center Tex
            td.text-center 24
            td.text-center 40
            td.text-center 60
            td.text-center 80
            td.text-center 105
            td.text-center 120
            td.text-center 160


    .row.justify-content-center.align-items-center.mb-4.bg9(data-aos='fade-right')
      .col-lg-5
        img.izq.d-none.d-lg-block(src='@/assets/curso/Tema2/img02.png', alt='')
      .col-lg-7.mb-0.p-4
        p La composición de los hilos debe semejarse a la composición del textil y a las propiedades que se requieren en el producto final, pueden ser en 100% algodón, 100% poliéster, en nylon o mezclas de las fibras ya mencionadas.
        p.mb-0 Es importante identificar el hilo en su rótulo, el cual indica cada uno de los elementos que lo caracteriza, en la imagen se puede observar un ejemplo del hilo de la industria colombiana según las normas existentes:


    .titulo-sexto.color-secundario(data-aos='fade-right')
      h5 Figura 3.
      span Información etiqueta de hilos COATS.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
      .col-lg-10
        img(src='@/assets/curso/Tema2/fig3.svg', alt='Una ilustración técnica de una etiqueta circular de hilo marca COATS. Se identifican mediante líneas informativas los datos relevantes para la persona interesada, tales como el nombre de la marca, el país de procedencia, el grosor, el metraje, la composición de la fibra y los códigos de referencia y color.')
        figcaption Fuente. Marca registrada COATS (s.f.).

    .cajon.color-acento-contenido.p-4.mb-4(data-aos='fade-right')
      h5 Para profundizar…
      p Si quiere saber más sobre la titulación de hilos y su uso consulte del material complementario Especificaciones técnicas hilos COATS.
      p Además, puede consultar el sitio web de COATS, una empresa de talla mundial en la fabricación de hilos industriales.

    separador
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3  Clasificación y usos de tejidos

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4(data-aos="zoom-in-left")
      .row.justify-content-center(titulo="Telas a partir de disoluciones")
        .col-lg-6.mb-4.mb-md-0
          ul.lista-ul
            li.d-flex
              i.fas •
              p.mb-0 #[b Películas:] solución pasada por presión a través de agua o aire caliente y prensado entre rodillos.
            li.d-flex
              i.fas •
              p.mb-0 #[b Espumas:] se agrega aire a una sustancia que tenga elongación o con aditivos gasificantes.
        .col-lg-5.col-md-9.col-10
          img(src='@/assets/curso/Tema2/aco1.png', alt='')

      .row.justify-content-center(titulo="Telas elaboradas directamente a partir de fibras")
        .col-lg-6.mb-4.mb-md-0
          ul.lista-ul
            li.d-flex
              i.fas •
              p.mb-0 #[b Fieltro:] se obtiene a partir del prensado de lana o pelo aglomerado.
            li.d-flex
              i.fas •
              p.mb-0 #[b Aglomerados (géneros no tejidos):] se producen por entrelazados o enlazado de fibras textiles, por medios mecánicos o químicos, o mecanismos combinados. Se obtienen las entretelas o tejidos para prendas quirúrgicas o desechables.
        .col-lg-5.col-md-9.col-10
          img(src='@/assets/curso/Tema2/aco2.png', alt='')

      .row.justify-content-center(titulo="Telas elaboradas a partir de hilos")
        .col-lg-8.mb-4.mb-md-0
          p Las fibras una vez se limpian, se cardan, se peinan para dejarlas estiradas y dispuestas paralelas entre sí, se someten a torsión y bobinado obteniéndose los hilos.
          p #[b Se tienen dos tipos de hilo:] a partir de fibras de gran longitud, denominados filamentos y a partir de fibras cortadas denominados hilados.
          p #[b Entretejido:] los hilos entrelazan en forma vertical y diagonal, dando como resultado una tela angosta.
          p #[b Tejido de punto:] entretejido de uno o varios hilos que forman bucles o mallas, a mayor cantidad de hilos la tela será de mayor calidad. Tiene propiedades de elasticidad y resistencia. Los hilos longitudinales se denominan urdimbre y los horizontales trama y su posición en la tela se denomina grano.
        .col-lg-3.col-md-9.col-10
          img(src='@/assets/curso/Tema2/aco3.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Entretejido y tejido de punto

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
      .col-lg-8.bg11.p-4
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-secundario(data-aos='fade-right')
              h5 Figura 4.
              span Trama y urdimbre.
          .col-lg-8.col-md-8
            img(src='@/assets/curso/Tema2/fig4.svg', alt='Un diagrama explicativo ilustra la estructura de un tejido, diferenciando entre la urdimbre y la trama. Se utiliza un código numérico y de colores para que la persona que observa identifique los hilos verticales en rojo (urdimbre) y el hilo horizontal en azul (trama) entrelazándose sobre una base gris.')
            figcaption Fuente: Kette und Schuß (2009)

    p El tejido de punto puede ser de trama en el cual el entrelazamiento de los hilos se realiza de forma horizontal quedando unidos en una sola pasada; o por urdimbre en el que el entrelazamiento se realiza de forma vertical y los hilos se unen en pasadas adyacentes haciendo conexiones diagonales y verticales. Este tejido utiliza máquinas de tricotar y pueden ser rectilínea o circular, obteniendo así tejidos abiertos o tubulares.
    p En las siguientes figuras se observa una muestra del tejido realizado a máquina.

    .row.justify-content-center.align-items-center.mb-5.bg11.p-5
      .col-lg-6.mb-3.col-md-8
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Figura 5.
          span Tejido punto por trama.
        img(src='@/assets/curso/Tema2/img27.png', alt='Un esquema técnico muestra la estructura del "Tejido de punto por trama". Una flecha roja horizontal indica la dirección del hilo a medida que forma bucles entrelazados, permitiendo que la persona que observa comprenda la formación transversal de la tela.')
        figcaption Fuente: Gavilán. (2015).
      .col-lg-6.mb-3.col-md-8
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Figura 6.
          span Tejido punto por urdimbre.
        img(src='@/assets/curso/Tema2/img28.png', alt='Una ilustración detalla la composición del "Tejido de punto por urdimbre". Se utiliza una flecha roja vertical para señalar la dirección del hilo hacia arriba, mostrando cómo se entrelazan los bucles de forma longitudinal para facilitar la comprensión de la persona interesada.')
        figcaption Fuente: Gavilán. (2015).


    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-8
        p En tejidos de punto se clasifican el jersey, el piquet, rib y franelas que son los más utilizados para prendas deportivas.
        p De acuerdo con Alonso Felipe, los hilos de urdimbre y de trama se reconocen por las siguientes características:
        ul.lista-ul.lista-ul--separador
          li
            i.fas.fa-hilo
            | El orillo siempre corre a lo largo de la tela (dirección de la urdimbre). El orillo se presenta en los laterales de la pieza de tela y suele ir encolado para evitar su destejido.

          li
            i.fas.fa-hilo
            | La mayoría de las telas se estiran menos en la dirección de la urdimbre que en la de la trama.

          li
            i.fas.fa-hilo
            | Los hilos de urdimbre son más rectos en la tela debido a que están sujetos a la tensión del telar. Presentan menos ondulaciones.

          li
            i.fas.fa-hilo
            | Los hilos decorativos de más variedad colores o para un funcionamiento especial casi siempre corresponden a la trama.

          li
            i.fas.fa-hilo
            | Suele haber más número de hilos/ cm en la urdimbre que en la trama, es decir, más tupida la urdimbre.

          li
            i.fas.fa-hilo
            | Los hilos de urdimbre suelen ser más finos que los de trama. La densidad lineal, título o número tex de los hilos de urdimbre menor que para los de trama.

          li
            i.fas.fa-hilo
            | En general, los hilos de urdimbre presentan mayor resistencia a la tracción (medido con dinamómetro) y más torsión (n° vueltas/ cm, medido con torsiómetro) que los de trama. Manual control de calidad en productos textiles y afines (2015, p. 81)).
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/Tema2/img03.png', alt='')

    .fondo02.p-5(data-aos="zoom-in-left").mb-4
        .tarjeta.fondo-interno.p-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-5.mb-4.mb-md-0
                h4 Tejio en telar
                p Entretejido de dos o más hilos de forma perpendicular. La mayoría de los tejidos se obtienen a través de esta técnica. Las telas son rígidas, sin elongación en cualquiera de los dos sentidos.
                p Un telar elemental actualmente utilizado está compuesto por dos soportes, uno para los hilos de urdimbre y el otro sostiene la tela conformada al pasar el hilo de trama.
              .col-lg-5.col-md-8
                img(src='@/assets/curso/Tema2/tela1.png', alt='')

            .row.justify-content-center
              .col-lg-5.mb-4.mb-md-0
                h4 Telas compuestas (no separables)
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Telas con revestimiento:] se adicionan materiales a una tela base para obtener una característica especial, como las imitaciones de pieles.
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Flocadura:] sobre la tela se aplican pegantes o energía electrostática para dibujar o dar terminado aterciopelado.
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Telas de espuma y fibra:] mezcla de fibras como poliéster, rayón o nylon con solución de poliuretano de la cual se obtiene una película de textura gamuzada.
              .col-lg-5.col-md-8
                img(src='@/assets/curso/Tema2/tela2.png', alt='')

            .row.justify-content-center
              .col-lg-5.mb-4.mb-md-0
                h4 Telas compuestas (no separables)
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Afelpado:] sobre la base de la tela mediante agujas se forman rizos que pueden rasurarse. En este caso se hablan de panas, terciopelos y telas afelpadas.
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Telas adheridas o laminadas:] unión de telas por medio de pegantes o termofijado, produciendo una tela de bajo costo.
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Acolchadas:] telas unidas con costuras con un relleno puede ser espuma, estopa o guata.
              .col-lg-5.col-md-8
                img(src='@/assets/curso/Tema2/tela2.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/subt.svg")
            h3.bg2.py-2.w-card-text Ligamentos básicos tejido en telar

    p La disposición de los hilos de urdimbre y trama en un tejido son el ligamento y existen tres clases:

    .row.justify-content-center.align-items-center.mb-5.bg11.p-5(data-aos='fade-right')
      .col-lg-11
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Figura 7.
          span Tejido tipo tafetán.
        img(src='@/assets/curso/Tema2/fig7.svg', alt='Una infografía técnica ilustra el "Tejido tipo tafetán" a través de cuatro representaciones gráficas. Se muestra el entrelazado básico de hilos de urdimbre y trama en diferentes perspectivas, incluyendo un esquema de colores marrón y amarillo, una vista de patrón cuadriculado y planos técnicos lineales en azul, facilitando a la persona interesada la comprensión de esta estructura textil.')
        figcaption Fuente: IKONET, (s.f.)

    .cajon.color-secundario.p-4.mb-4
      p Tafetán: hilos dispuestos en forma perpendicular, se organizan alternando la pasada por encima y por debajo. En la tela no se aprecia diferencia entre derecho y revés.
    
    .row.justify-content-center.align-items-center.mb-5.bg11.p-5
      .col-lg-11
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Figura 8.
          span Tejido tipo sarga.
        img(src='@/assets/curso/Tema2/fig8.svg', alt='Una infografía técnica describe el "Tejido tipo sarga" mediante cuatro representaciones gráficas. Se expone el entrelazado característico de hilos de urdimbre y trama que crea un patrón de líneas diagonales, utilizando esquemas en colores violeta y amarillo, junto con planos técnicos lineales en azul para facilitar la comprensión de esta estructura textil a la persona interesada.')
        figcaption Fuente: IKONET, (s.f.)

    .cajon.color-secundario.p-4.mb-4
      p Sarga: la alternancia de los hilos es de dos hilos, sea por trama o por urdimbre, el entretejido forma una línea diagonal nombrada como espiga. Se aprecia el derecho y revés de la tela.
    .row.justify-content-center.align-items-center.mb-5.bg11.p-5
      .col-lg-11
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Figura 9.
          span Tejido tipo satén.
        img(src='@/assets/curso/Tema2/fig9.svg', alt='Una infografía técnica representa el "Tejido tipo satén" mediante cuatro gráficos explicativos. Se detalla el entrelazado de hilos de urdimbre y trama que genera una superficie lisa, utilizando esquemas en colores verde y amarillo, junto con diagramas técnicos en azul para que la persona usuaria comprenda la estructura de este ligamento textil.')
        figcaption Fuente: IKONET, (s.f.)

    .tarjeta.color-primario.p-4.mb-5(data-aos='fade-right')
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/Tema4/fashion.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.text-white Tejeduría. Tejido de Punto y de calada
              p Para comprender mejor el proceso de los ligamentos básicos del telar observe el video sobre tejeduría, en los que se observa “el tejido de punto en máquina circular y tricotosa y el tejido a la plana o calada” (Canal Planeta Moda, 2018, 8:03 m)
            .col-sm-auto
              a.boton.color-acento-botones(href="https://youtu.be/JtKDv_xH9VI" target="_blank")
                span Abrir video
                i.fas.fa-video

    p Teniendo en cuenta los dos tipos de tejido más utilizados se expone la siguiente comparación:

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-9.d-flex
        .w-100
          .titulo-sexto.color-secudario(data-aos='fade-right')
            h5 Tabla 5.
            span Comparación tejido telar y tejido de punto.

          .tabla-a.color-acento-contenido.h-100
            table.h-100
              thead
                tr
                  th.bg6.text-white Característica
                  th.bg6.text-white Tejido de punto
                  th.bg6.text-white Tejido de telar
              tbody
                tr
                  td Comodidad y formación de arrugas
                  td Tela elástica, adaptable al movimiento y figura del cuerpo. Se recupera fácil de la torsión y no
                  td No tiene elongación. Dependiendo del tejido puede o no formar arrugas.
                tr
                  td Capacidad para cubrir
                  td Porosa, menos opaca, más espacios entre los hilos que dejan penetrar el aire.
                  td Proporciona máximo cubrimiento, de acuerdo con el peso del hilo.
                tr
                  td Estabilidad dimensional
                  td Pueden encogerse por el lavado y con temperaturas altas.
                  td Más estable, se encogen menos.
                tr
                  td Versatilidad
                  td Varían de transparentes a pesadas. Se encuentran tejidos lisos y de fantasía.
                  td Telas de muy delgadas a muy pesadas.
                tr
                  td Economía
                  td Los diseños se pueden adaptar en las máquinas con los debidos cambios. La velocidad de producción no depende del ancho de
                  td La maquinaria es menos adaptable a los cambios de la moda. Los telares más anchos son más lentos.
  
      .col-lg-3.d-flex.mb-5
        img.w-100.h-100.d-none.d-lg-block(src='@/assets/curso/Tema2/img05.png', alt='', style='object-fit: cover; border-radius: 16px;')

    .cajon.color-acento-contenido.p-4
      .h5 Para profundizar…
      p Consulte en el manual control de calidad en productos textiles y afines, para conocer más sobre los tipos de tejido y telas en la sección de material complementario.


    separador
    #t_2_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.4  Aplicación de textiles de acuerdo con líneas de producción

    p De acuerdo con las líneas del producto se analiza el origen del textil, en lo cual es importante tener en cuenta el tipo de tejido. Observe en la siguiente tabla las aplicaciones de los textiles en los productos.

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
      .col-lg-7
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Tabla 6.
          span Aplicaciones de fibras en prendas

        .tabla-a.color-acento-contenido.mb-4
          table
            caption Fuente: Sena, 2020
            thead
              tr
                th.text-center.bg6.text-white.text-izq Fibra
                th.text-center.bg6.text-white.text-izq Aplicaciones en prendas
            tbody
              tr
                td Algodón
                td Prendas de ropa exterior, ropa interior, ropa de trabajo, productos de lencería, camisas, pantalones.

              tr
                td Cáñamo
                td Ropa exterior con mezclas de algodón.

              tr
                td Coco
                td Cordones, sogas, colchones, soporte de alfombras, asientos de automóviles.

              tr
                td Lino
                td Textiles para el tapizado, prendas de verano, pantalones, camisas, abrigos.

              tr
                td Yute, sisal
                td Tapizados, tapetes, cortinas, sacos, elementos de decoración.

              tr
                td Bambú
                td Toallas, calcetería, ropa interior, de baño y para bebé, en mezclas con algodón, spandex.

              tr
                td Soja
                td Mezcla con el algodón en prendas de bebé. Otras prendas de alto costo como suéteres y bufandas.

              tr
                td Lana, mohair, alpaca, llama, vicuña, camello, conejo, qiviut
                td Suéteres, chaquetas, abrigos, bufandas, guantes, calcetines, gorros.

              tr
                td Seda
                td Lencería hogar, pijamas, blusas.

              tr
                td Seda araña
                td Prendas de seguridad, chalecos antibalas.

              tr
                td Rayón - Viscosa / Rayón - Acetato
                td Blusas, vestidos, tapicería, corbatas, colchas.

              tr
                td Poliamidas - nylon
                td Ropa deportiva, ropa interior, panty medias.

              tr
                td Poliacrílicas
                td Ropa interior, chaquetas, muñequería.

              tr
                td Poliéster
                td Todo tipo de prendas como camisas, pantalón, camisetas, tapicería, cortinas, también en mezclas con algodón, viscosa, lino, lana y seda.

              tr
                td Spandex - Lycra
                td Prendas deportivas e interiores.

              tr
                td Acrílicas
                td Pijamería, cobijas, mantelerías, tapicería.

              tr
                td Aramidas
                td Prendas de seguridad, en el área militar, naval, aeroespacial.

              tr
                td Nomex - Kevlar
                td Prendas de seguridad en automovilismo, chalecos antibalas.


    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-right')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es importante diferenciar el nombre de la tela y la composición, ya que cada fábrica textilera asigna un nombre o referencia a cada una de las telas de su portafolio de productos, por lo que es importante apreciar al tacto varias de sus propiedades, teniendo en cuenta que no se pueden apreciar ciertas desventajas. Para identificarlas plenamente se requiere la descripción completa de la tela en un documento denominado ficha técnica, mediante la cual el cliente puede conocer todas las propiedades y analizar si la tela se puede utilizar en la prenda a producir. Se debe revisar la funcionalidad, el confort y la estética del textil para que el producto final sea óptimo.
          br
          br
          | Los anteriores aspectos están relacionados con el gramaje de las telas, es decir, el grosor del tejido y los hilos; también con la densidad de las fibras textiles, las cuales se miden en gramo por metro cuadrado, o en onzas por yarda cuadrada. Según el gramaje es posible determinar el nivel de la tela y así definir su aplicación para el tipo de prenda a producir.

    p En la siguiente tabla se muestran ejemplos de la densidad de algunas telas:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-9.d-flex
        .w-100
          .titulo-sexto.color-secudario(data-aos='fade-right')
            h5 Tabla 7.
            span Densidad de telas.

          table.w-100
            caption Fuente: Sena, 2020
            thead
              tr
                th.bg6.text-white Densidad
                th.bg6.text-white Telas
                th.bg6.text-white Prendas
            tbody
              tr
                td Entre 40 y 100 Sgr/m^2S
                td Ultralán, bonlam o tejido quirúrgico.
                td Cofias, batas, overoles, escafandras, polainas, bolsas.

              tr
                td Entre 135 y 180 Sgr/m^2S
                td Algodón o polialgodón.
                td Camisetas, pijamas.

              tr
                td Entre 180 y 220 Sgr/m^2S
                td Telas piqué Lacoste.
                td Camisetas tipo polo.

              tr
                td Entre 110 y 225 Sgr/m^2S
                td Telas antifluido.
                td Chalecos, chaquetas, pantalón de sudaderas, pantalonetas.

              tr
                td Entre 130 y 150 Sgr/m^2S
                td Telas livianas en seda, poliéster.
                td Blusas, camisas.

              tr
                td Entre 4 y 16 onzas
                td Telas denim.
                td Jeans, overoles, chalecos, chaquetas, faldas, short.

              tr
                td Entre 280 y 340 Sgr/m^2S
                td Telas dril, gabardinas.
                td Prendas de trabajo como camisas, pantalones y overoles.

      .col-lg-3.d-flex
        img.w-100.h-100.d-none.d-lg-block(
          src='@/assets/curso/Tema2/img10.png', alt='', style='object-fit: cover; border-radius: 16px;')

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
