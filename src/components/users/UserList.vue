<script>
export default {
  name: "user-list",
  data() {
    return {
      loading: true,
      dialog: false,
      users: [],
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    close() {
      this.dialog = false;
    },

    async getData() {
      this.loading = true;
      try {
        const raw = await fetch("../app/users");
        const data = await raw.json();
        if (Array.isArray(data)) {
          this.users = data;
        }
      } catch (e) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Ha ocurrido un error",
        });
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    editItem(item) {
      console.log(item);
    },
    async deleteItem(item) {
      try {
        this.$swal({
          icon: "question",
          title: `¿Seguro que desea eliminar al usuario ${item.name}?`,
          showCancelButton: true,
          cancelButtonText: "Cancelar",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const raw = await fetch(`../app/users/delete/${item.id}`, {
              method: "DELETE",
            });
            const res = await raw.json();
            if (res.code === 200) {
              this.$swal({
                icon: "success",
                title: "Registro eliminado correctamente",
              });
            } else {
              this.$swal({
                icon: "error",
                title: "Oops...",
                text: "Ha ocurrido un error",
              });
            }
            this.getData();
          }
        });
      } catch (e) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Ha ocurrido un error",
        });
      }
    },
  },

  computed: {
    tableHeaders() {
      return [
        {
          text: "User name",
          value: "name",
        },
        {
          text: "E-mail",
          value: "mail",
        },
        {
          text: "User group",
          value: "group",
        },
        { text: "Actions", value: "actions", sortable: false, align: "center" },
      ];
    },
  },
  
  <b-button variant = "asignar">Actualizar Roles</b-button>
  
  
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
};

<div id='asignar'>
  <input type="checkbox" id="administrador" value="Administrador" v-model="checked">
  <label for="jack">Administrador</label>
  <input type="checkbox" id="seguridad" value="Seguridad" v-model="checked">
  <label for="john">Seguridad</label>
  <input type="checkbox" id="mantenimiento" value="Mantenimiento" v-model="checked">
  <label for="mike">Mantenimiento</label>
  <input type="checkbox" id="consultas" value="Consultas" v-model="checked">
  <label for="mike">Consultas</label>
  <br>
  <span>Checked names: {{ checked }}</span>
</div>
new Vue({
  el: '#asignar',
  data: {
    Roles Asignados: []
  }
})



</script>
<template>
  <v-card class="mx-auto" outlined>
    <v-card-text>
      <v-data-table
        class="elevation-1"
        :headers="tableHeaders"
        :items="users"
        :items-per-page="5"
        loading="loading"
        loading-text="Loading... Please wait"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" to="/createUser">
              New Item
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
