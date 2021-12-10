<script>
export default {
  data: () => ({
    group: null,
  }),
  props: {
    drawer: {
      type: Boolean,
    },
  },
  methods: {
    async logout() {
      await fetch("/logout");
      this.$router.push("/login");
    },
  },
};
</script>
<template>
  <v-navigation-drawer v-model="drawer" absolute>
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>Inicio</v-expansion-panel-header>
                <v-expansion-panel-content>
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
                          <router-link to="/TheMenu">E-Descargas_BackEnd</router-link>
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Busqueda"
                            >Busqueda</router-link
                          >
                        </v-list-item-title>
                      </v-list-item>

                      
                    </v-list-item-group>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Busqueda</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <v-list nav dense>
                    <v-list-item-group
                      v-model="group"
                      active-class="deep-purple--text text--accent-4"
                    >
                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Peliculas"
                            >Peliculas</router-link
                          >
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Libros">Libros</router-link>
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Musica">Musica</router-link>
                        </v-list-item-title>
                      </v-list-item>

                  
                    </v-list-item-group>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>Compras</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list nav dense>
                    <v-list-item-group
                      v-model="group"
                      active-class="deep-purple--text text--accent-4"
                    >
                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Tarjeta"
                            >Tarjeta</router-link
                          >
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Easy_Pay">Easy_Pay</router-link>
                        </v-list-item-title>
                      </v-list-item>

                   
                    </v-list-item-group>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn @click="logout">Cerrar sesión</v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
