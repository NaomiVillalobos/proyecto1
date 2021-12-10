<template>
  <div class="mt-5">
      <h1>Informacion del Consecutivo</h1>
      
      <form>
      <p>Descripcion</p>
      
        <select v-model="selected">
          <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
          </option>
        </select>
        <span>Seleccionado: {{ selected }}</span>
        new Vue({
          el: '...',
          data: {
            selected: 'A',
            options: [
              { text: 'Peliculas', value: 'Peliculas },
              { text: 'Libros', value: 'Libros' },
              { text: 'Musica', value: 'Musica' }
            ]
          }
        })
        <b-form-input type="number">Consecutivo<b-form-input>
        <br>
        <p>Posee prefijo?</p>
        <div id='prefijo'>
        <input type="checkbox" id="si" value="Si" v-model="prefijocheck">
        <label for="si">Si</label>
       
          <br>
          <span>Respuesta: {{ prefijocheck }}</span>
        </div>
        new Vue({
          el: '#prefijo',
          data: {
            prefijocheck: []
          }
        })
        
        <b-form-input type="text">Prefijo</b-form-input>
        <br>
         <p>Posee rango?</p>
        <div id='rango'>
        <input type="checkbox" id="si" value="Si" v-model="rangocheck">
        <label for="si">Si</label>
       
          <br>
          <span>Respuesta: {{ rangocheck }}</span>
        </div>
        new Vue({
          el: '#rango',
          data: {
            rangocheck: []
          }
        })
        <br>
         <b-form-input type="number">Rango Inicial</b-form-input>
        <br>
         <b-form-input type="number">Rango Final</b-form-input>
        <br>
        <b-button-variant="success">Aceptar</b-button>
        <b-button-variant="danger">Cancelar</b-button>
        <br>
        <a href="proyecto1/src/components/consecutivos/Nuevo.vue">Nuevo</a>
        
  </div>
</template>
