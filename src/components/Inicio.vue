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
