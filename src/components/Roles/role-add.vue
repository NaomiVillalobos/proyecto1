<script>
export default {
  name: "new-rol",
  data() {
    return {
      rules: {
        valid: true,
        generic: [(v) => !!v || "Valor es requerido"],
      },

      rolModel: {
        descripcion: "",
        rol_id: "",
      },
      nameErrors: [],
    };
  },
  methods: {
    async submit(event) {
      try {
        event.preventDefault();
        event.stopPropagation();
        if (!this.$refs.form.validate()) {
          return this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Verifique los valores ingresados",
          });
        }
        const raw = await fetch("../app/roles/add", {
          method: this.setMode ? "PUT" : "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.rolModel),
        });
        const res = await raw.json();
        if (
          typeof res === "object" &&
          "errCode" in res &&
          res.errCode === "403"
        ) {
          this.$router.push("/login");
        }
        if (
          typeof res === "object" &&
          "errCode" in res &&
          res.errCode === "200"
        ) {
          this.$swal({
            icon: "success",
            title: "Registro añadido de manera correcta",
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push("/roles");
            }
          });
        } else {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: res.msg || "Verifique si el rol existe",
          });
        }
      } catch (e) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Ha ocurrido un error durante la petición",
        });
      }
    },
  },
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form ref="form" @submit="submit" lazy-validation v-model="valid">
          <v-card>
            <v-card-text>
              <v-text-field
                v-model="rolModel.rol_id"
                :error-messages="nameErrors"
                label="Código del rol"
                type="number"
                required
              ></v-text-field>
              <v-text-field
                v-model="rolModel.descripcion"
                :error-messages="nameErrors"
                :rules="rules.generic"
                label="Descripción del rol"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn class="mr-4" @click="submit"> submit </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>