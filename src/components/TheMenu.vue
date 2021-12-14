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
  <v-navigation-drawer v-model="drawer">
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>Seguridad</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list nav dense>
                    <v-list-item-group
                      v-model="group"
                      active-class="deep-purple--text text--accent-4"
                    >
                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/users">Usuarios</router-link>
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Roles">Roles</router-link>
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Roles">Asignar_roles</router-link>
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/verUsuario"
                            >Ver_Usuario</router-link
                          >
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/cambiarContraseña"
                            >Cambiar_Contraseña</router-link
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
                  >Administracion</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <v-list nav dense>
                    <v-list-item-group
                      v-model="group"
                      active-class="deep-purple--text text--accent-4"
                    >
                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Consecutivos"
                            >Consecutivos</router-link
                          >
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Tarifas">Tarifas</router-link>
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Parametros">Parametros</router-link>
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/ProductosyServicios"
                            >ProductosyServicios</router-link
                          >
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Peliculas">Peliculas</router-link>
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
                <v-expansion-panel-header>Consultas</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list nav dense>
                    <v-list-item-group
                      v-model="group"
                      active-class="deep-purple--text text--accent-4"
                    >
                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/ProductosyServicios"
                            >ProductosyServicios</router-link
                          >
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Bitacora">Bitacora</router-link>
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Transacciones"
                            >Transacciones</router-link
                          >
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Descargas">Descargas</router-link>
                        </v-list-item-title>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Errores">Errores</router-link>
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
