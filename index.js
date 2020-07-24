import Vue from 'vue'

new Vue({
  el: '#app',
  data:{ 
        actividad: '',
        actividades: ['comer', 'hacer el aseo', 'programar actividades'],
        codigo: '',
        descripcion: '',
        precio: '',
        articulos: [/*{
          codigo:1,
          descripcion: 'papas',
          precio: 34
        }*/],
      },
   methods: {
        actualizarLista: function() {
          this.actividades.push(this.actividad);
          this.actividad = '';
        },
        agregarArticulo: function() {
          this.articulos.push({
                                codigo: this.codigo,
                                descripcion: this.descripcion,
                                precio: this.precio
                              });
          this.codigo = '';
          this.descripcion = '';
          this.precio = '';
        }
      },
})