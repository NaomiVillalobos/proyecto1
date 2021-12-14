<script>
import TheMenu from "./components/TheMenu.vue";
export default {
  components: {
    TheMenu,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<template>
  <v-app data-app>
    <v-container class="mx-auto overflow-hidden" height="100%">
      <v-app-bar color="deep-purple accent-4" dark> </v-app-bar>
      <v-card-text style="height: 150%">
        <v-container>
          <v-row>
            <v-col md="3" sm="3" lg="3" flat>
              <the-menu :drawer="true"></the-menu>
            </v-col>
            <v-col md="9" sm="9" lg="9" flat>
              <transition>
                <router-view></router-view>
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-container>
  </v-app>
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
