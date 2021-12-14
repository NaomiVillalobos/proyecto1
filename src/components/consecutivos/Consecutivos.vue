<script>
export default {
  name: "Seq-list",
  data() {
    return {
      loading: true,
      dialog: false,
      seqs: [],
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
        const raw = await fetch("../app/seqs");
        const data = await raw.json();
        this.loading = false;
        if (
          typeof data === "object" &&
          "errCode" in data &&
          data.errCode === "403"
        ) {
          this.$router.push("/login");
        } else if (Array.isArray(data.rows)) {
          this.seqs = data.rows;
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
      this.$router.push("/setSeq/" + item.Id);
    },
    async deleteItem(item) {
      try {
        this.$swal({
          icon: "question",
          title: `¿Seguro que desea eliminar la secuencia ${item.descripcion}?`,
          showCancelButton: true,
          cancelButtonText: "Cancelar",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const raw = await fetch(`../app/seqs/delete/${item.Id}`, {
              method: "DELETE",
            });
            const res = await raw.json();
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
          text: "Descripción",
          value: "descripcion",
        },

        {
          text: "Tiene prefijo",
          value: "has_prefix",
        },
        {
          text: "Prefijo",
          value: "prefix",
        },
        {
          text: "Tiene rango",
          value: "has_range",
        },
        {
          text: "Rango inferior",
          value: "inf_range",
        },
        {
          text: "Rango superior",
          value: "max_range",
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
        :items="seqs"
        :items-per-page="5"
        :loading="loading"
        loading-text="Loading... Please wait"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" to="/newSeq">
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
