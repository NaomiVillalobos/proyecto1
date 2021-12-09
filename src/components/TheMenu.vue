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
                          <router-link to="/createUser">Asignar roles</router-link>
                        </v-list-item-title>
                      </v-list-item>
                      
                       <v-list-item>
                        <v-list-item-title>
                          <router-link to="/verUsuario">Ver Usuario</router-link>
                        </v-list-item-title>
                      </v-list-item>
                      
                      
                        <v-list-item>
                        <v-list-item-title>
                          <router-link to="/cambiarContraseña">Cambiar Contraseña</router-link>
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
                <v-expansion-panel-header>Administracion</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list nav dense>
                    <v-list-item-group
                      v-model="group"
                      active-class="deep-purple--text text--accent-4"
                    >
                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Consecutivos">Consecutivos</router-link>
                        </v-list-item-title>
                      </v-list-item>
                      
                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/tarifas">Tarifas</router-link>
                        </v-list-item-title>
                      </v-list-item>
                      
                        <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Parametros">Parametros</router-link>
                        </v-list-item-title>
                      </v-list-item>
                      
                        <v-list-item>
                        <v-list-item-title>
                          <router-link to="/ProductosyServicios">Productos y Servicios</router-link>
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
                          <router-link to="/ProductosyServicios">Productos y Servicios</router-link>
                        </v-list-item-title>
                      </v-list-item>
                      
                      <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Bitacora">Bitacora</router-link>
                        </v-list-item-title>
                      </v-list-item>
                      
                       <v-list-item>
                        <v-list-item-title>
                          <router-link to="/Transacciones">Transacciones</router-link>
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

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
