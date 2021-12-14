<script>
export default {
  name: "new-seq",
  data() {
    return {
      modeSet: false,
      seqSet: null,
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
        descripcion: "",
        has_prefix: false,
        prefix: "  ",
        has_range: false,
        inf_range: 0,
        max_range: 1000,
      },
      nameErrors: [],
    };
  },
  props: {
    id: {
      default: null,
    },
  },

  async beforeMount() {
    if (this.$route.params.id) {
      this.modeSet = true;
      this.seqSet = this.$route.params.id;
      const raw = await fetch("../app/seqs/" + this.seqSet);
      const seq = await raw.json();
      this.seqModel = { ...this.seqModel, ...seq.rows[0] };
    }
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
        const raw = await fetch(
          !this.modeSet ? "../app/seqs/add" : "../app/seqs/set/" + this.seqSet,
          {
            method: this.modeSet ? "PUT" : "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.seqModel),
          }
        );
        const res = await raw.json();
        if (
          typeof res === "object" &&
          "errCode" in res &&
          res.errCode === "200"
        ) {
          this.$swal({
            icon: "success",
            title: `Registro ${
              this.modeSet ? "modificado" : "añadido"
            } de manera correcta`,
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
  watch: {
    "seqModel.inf_range": function (_new) {
      const newVal = parseInt(_new);
      if (newVal > this.seqModel.max_range) {
        this.seqModel.inf_range = this.seqModel.max_range - 1;
      }
    },
    "seqModel.max_range": function (_new) {
      const newVal = parseInt(_new);
      if (newVal < this.seqModel.inf_range) {
        this.seqModel.max_range = this.seqModel.inf_range + 1;
      }
    },
  },
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form
          ref="form"
          @submit="submit"
          lazy-validation
          v-model="rules.valid"
        >
          <v-card>
            <v-card-text>
              <v-text-field
                v-model="seqModel.descripcion"
                :error-messages="nameErrors"
                :rules="rules.generic"
                label="Descripción del consecutivo"
                required
              ></v-text-field>
              <v-checkbox
                v-model="seqModel.has_prefix"
                label="¿Tiene prefijo?"
                hide-details
              ></v-checkbox>
              <v-text-field
                v-show="seqModel.has_prefix"
                v-model="seqModel.prefix"
                :error-messages="nameErrors"
                :rules="rules.generic"
                label="Prefijo"
              ></v-text-field>
              <v-checkbox
                v-model="seqModel.has_range"
                label="¿Tiene rangos?"
                hide-details
              ></v-checkbox>
              <v-text-field
                v-show="seqModel.has_range"
                v-model="seqModel.inf_range"
                :error-messages="nameErrors"
                label="Rango inferior"
                type="number"
              ></v-text-field>
              <v-text-field
                v-show="seqModel.has_range"
                v-model="seqModel.max_range"
                :error-messages="nameErrors"
                label="Rango superior"
                type="number"
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