<script>
export default {
  name: "role-list",
  data() {
    return {
      loading: true,
      dialog: false,
      roles: [],
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
        const raw = await fetch("../app/roles");
        const data = await raw.json();
        if (
          typeof data === "object" &&
          "errCode" in data &&
          data.errCode === "403"
        ) {
          this.$router.push("/login");
        } else if ("rows" in data && Array.isArray(data.rows)) {
          this.roles = data.rows;
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
          title: `¿Seguro que desea eliminar el rol ${item.rol_id}?`,
          showCancelButton: true,
          cancelButtonText: "Cancelar",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const raw = await fetch(`../app/roles/delete/${item.rol_id}`, {
              method: "DELETE",
            });
            const res = await raw.json();
            if (
              typeof res === "object" &&
              "errCode" in res &&
              res.errCode === "403"
            ) {
              this.$router.push("/login");
            }
            if (res.errCode === "200") {
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
          text: "Id",
          value: "rol_id",
          align: "start",
        },
        {
          text: "Descripción",
          value: "descripcion",
        },
        { text: "Actions", value: "actions", sortable: false, align: "center" },
      ];
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },
};
</script>
<template>
  <v-card class="mx-auto" outlined>
    <v-card-text>
      <v-data-table
        class="elevation-1"
        :headers="tableHeaders"
        :items="roles"
        :items-per-page="5"
        loading="loading"
        loading-text="Loading... Please wait"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" to="/new-role">
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
<style scoped>
.v-data-table-header th {
  white-space: nowrap;
}
</style>