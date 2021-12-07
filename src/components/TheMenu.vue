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
            <router-link to="/createUser">Create User</router-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <router-link to="/users">Usuario</router-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
           <router-link to="/Seguridad">Seguridad</router-link>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
           <router-link to="/Administracion">Administracipn</router-link>
        </v-list-item>
    
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
           <router-link to="/Consultas">Consultas</router-link>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
