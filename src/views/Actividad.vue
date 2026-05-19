<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Insumos, textiles y maquinaria de confección',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los aprendices sobre los conceptos básicos relacionados con los materiales e insumos de confección, las líneas de producción, los sistemas de cierre, la clasificación y propiedades de los textiles, los hilos, los tejidos, la aplicación de fibras textiles en prendas, la puesta a punto de maquinaria de confección, los ajustes de arrastre, la calibración de puntadas y las normas técnicas de calidad aplicables al sector textil y de confecciones.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué son los materiales de confección?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elementos que siempre permanecen visibles en la prenda terminada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Insumos utilizados en los procesos de fabricación de una prenda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente máquinas usadas para coser las prendas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Normas técnicas aplicadas al control de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 2,
          texto:
            '¿Cuál de los siguientes materiales se utiliza en el proceso de patronaje y escalado manual?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ganchos para colgar prendas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bolsas y cajas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Papel manifold.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cremallera metálica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 3,
          texto:
            '¿En cuál proceso se unen las piezas de una prenda mediante máquinas y operaciones?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proceso de patronaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proceso de confección.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Proceso de empaque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proceso de diseño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 4,
          texto:
            '¿Por qué es importante planificar las unidades de consumo y compra de los insumos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para evitar desperdicios o faltantes que afecten la producción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para eliminar el control de calidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para reemplazar la ficha técnica de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para usar siempre los mismos insumos en todas las prendas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 5,
          texto:
            '¿Cuál de los siguientes insumos corresponde a un sistema de cierre?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Encaje decorativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cremallera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tela piqué.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Papel kraft.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 6,
          texto: '¿Qué insumos se utilizan en un pantalón de sudadera?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sesgos, cordones, elásticos, tancas y terminales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Botón puntilla, taches y cremallera metálica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Encaje elástico y broches extensores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ganchos, bolsas y cajas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 7,
          texto: '¿Cuál es la unidad básica de los textiles?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ficha técnica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La fibra textil.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La máquina plana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El botón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 8,
          texto: '¿Cómo se clasifican las fibras textiles según su origen?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manuales y digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pesadas y livianas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Naturales y sintéticas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Rectas y diagonales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 9,
          texto: '¿Para qué se mezclan las fibras textiles?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para eliminar la necesidad de confección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para aprovechar fortalezas y compensar debilidades de las fibras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para evitar el uso de hilos en las prendas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para reemplazar las normas técnicas de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 10,
          texto:
            '¿Qué indica técnicamente la numeración o titulación de los hilos?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color comercial del hilo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La marca del fabricante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La longitud específica o longitud por unidad de masa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El tipo de empaque usado en la fábrica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué información puede encontrarse en el rótulo de un hilo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el precio de venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el nombre del operario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Marca, procedencia, título, lote y composición.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo la fecha de lavado de la prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 12,
          texto: '¿Qué son la urdimbre y la trama en un tejido?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dos tipos de maquinaria especializada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Hilos longitudinales y horizontales que conforman la tela.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dos normas técnicas colombianas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Insumos decorativos de la prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 13,
          texto: '¿Qué caracteriza al tejido de punto?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se forma por bucles o mallas de uno o varios hilos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se obtiene únicamente por prensado de lana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No permite elasticidad ni movimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se usa solo para prendas de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 14,
          texto: '¿Cuál es una característica del tejido tipo tafetán?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Forma una línea diagonal llamada espiga.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alterna los hilos por encima y por debajo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se usa únicamente en telas acolchadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Siempre presenta derecho y revés muy diferenciados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 15,
          texto:
            '¿Qué documento permite conocer las propiedades completas de una tela?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ficha técnica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El tiquete de corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La caja bobina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El portahílos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 16,
          texto: '¿Qué es el enhebrado en maquinaria de confección industrial?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El proceso de empacar la prenda terminada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El paso de los hilos por las partes de la máquina para generar la puntada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La clasificación de fibras naturales y sintéticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La aplicación de normas técnicas en textiles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 17,
          texto: '¿Qué máquina también es llamada sobrehiladora u overlock?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Máquina plana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Máquina fileteadora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Máquina botonadora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Máquina ojaladora de lágrima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 18,
          texto:
            '¿Qué tipo de arrastre se utiliza para tejidos de alta densidad o grosor, como denim mayor a 10 onzas?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Arrastre liviano.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Arrastre semipesado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Arrastre pesado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Arrastre manual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 19,
          texto:
            '¿Qué organismo realiza en Colombia funciones de normalización técnica de calidad?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El ICONTEC.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La caja bobina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El portahílos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El área de empaque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 20,
          texto: '¿Cuál es el propósito de la norma ISO 9001:2015?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular únicamente el uso de botones y cremalleras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Orientar la eficacia del sistema de gestión de la calidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Clasificar las fibras textiles por su origen animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir solo los gramajes de las telas denim.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
