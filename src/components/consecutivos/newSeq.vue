<script>
export default {
  name: "new-seq",
  data() {
    return {
      rules: {
        valid: true,
        generic: [(v) => !!v || "Valor es requerido"],
        confirmPassWord: [
          (v) =>
            (!!v && v === this.seqModel.passwordConfirm) ||
            "Contraseña no coincide",
        ],

        confirmQuestion: [
          (v) =>
            (!!v && v === this.seqModel.securityQuestionConfirm) ||
            "Pregunta de seguridad no coincide",
        ],
        emailRules: [
          (v) => !!v || "E-mail es requerido",
          (v) => /.+@.+\..+/.test(v) || "E-mail no valido",
        ],
      },

      seqModel: {
        description: "",
        seq: "",
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
        const raw = await fetch("../app/seqs/add", {
          method: this.setMode ? "PUT" : "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.seqModel),
        });
        const res = await raw.json();
        if (typeof res === "object" && "code" in res && res.code === 200) {
          this.$swal({
            icon: "success",
            title: "Registro añadido de manera correcta",
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push("/Consecutivos");
            }
          });
        } else {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: res.msg || "",
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
                v-model="seqModel.seq"
                :error-messages="nameErrors"
                :rules="rules.generic"
                label="Consecutivo"
                required
              ></v-text-field>
              <v-text-field
                v-model="seqModel.description"
                :error-messages="nameErrors"
                :rules="rules.generic"
                label="Descripción del consecutivo"
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