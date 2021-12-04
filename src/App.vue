<script>
import TheMenu from "./components/TheMenu.vue";
export default {
  components: {
    TheMenu,
  },
  data: () => ({
    drawer: false,
    group: null,
    users: [],
  }),

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      let res = await fetch("http://localhost:3000/users");
      this.users = await res.json();
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<template>
  <v-card class="mx-auto overflow-hidden" height="500px">
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <the-menu :drawer="drawer"></the-menu>
    <v-card-text style="height: 100%">
      <ul>
        <li v-for="(user, index) in users" :key="index">
          {{ user.name }}
        </li>
      </ul>
      <router-view></router-view>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
