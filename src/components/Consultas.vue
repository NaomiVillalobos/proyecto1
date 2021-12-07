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
            <router-link to="/Bitacora.vue">Bitacora</router-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <router-link to="/Transacciones.vue">Transacciones</router-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
           <router-link to="/Descargas.vue">Descargas</router-link>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
           <router-link to="/Errores.vue">Errores</router-link>
        </v-list-item>
    
 

      
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
