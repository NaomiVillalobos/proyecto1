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
