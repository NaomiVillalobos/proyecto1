
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
 
<title>Inicio</title>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
</head>
  <body>
 
 <div id="app">
   <input v-model='search' />
    <ul v-for="item in searchData ">
    <li> {(item.name}}, usuario: {{item.usuario}} </ li>
   </ul>
 </div>
 
 
<script>
  var vm = new Vue({
      el: '#app',
      data: {
    search: '',
    products: [{
         nombre: 'Hassell',
    usuario : hasseljp08,"
  }, 
}]
},
computed: {
searchData: function() {
var search = this.search;
 
if (search) {
return this.products.filter(function(product) {
return Object.keys(product).some(function(key) {
return String(product[key]).toLowerCase().indexOf(search) > -1
})
})
}
 
return this.products;
}
}
})
</script>
 
 
</body>
</html>


<div id="app">
<h1>{{ message }} </h1>
</div>

<script src = "https://cdn.jsdelivr.net/npm/vue/dist/vue.js">
</script>

<script>
new Vue({
el: '#app',
data: {
message: "Bienvenido a nuestra pagina"
}
})
</script>


<div id="aceptar">
  <button v-on:click="counter += 1">Aceptar</button>
  <p>Se ha hecho clic en el botón de arriba {{ counter }} veces.</p>
</div>

<div v-if= "ShowAlert">
  <p> Veamos el menu principal </p>
</div>

var example1 = new Vue({
  el: '#aceptar',
  data: {
    counter: 0
  }
})


<div id= "app1">
  <ul>
    <li v-for="menuprincipal">
      {{ menup }}
    </li>
  </ul>
</div>

<script>
  new Vue({
    el: '#app1',
    data: {
      menuprincipal: ["Seguridad", "Administracion", "Consultas"]
    }
  })
</script>


<script>
export default {
  data: () => ({
    group: null,
  }),
  props : {
      drawer : {
        type : Boolean
      }
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<template>
  <v-navigation-drawer v-model="drawer" absolute bottom temporary>
    
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>
            <router-link to="/Crear_Cuenta">Crear_Cuenta</router-link>
          </v-list-item-title>
        </v-list-item>
        
         <v-list-item>
          <v-list-item-title>
            <router-link to="/E-Descargas_BackEnd">E-Descargas_BackEnd"</router-link>
          </v-list-item-title>
        </v-list-item>
        
  </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
