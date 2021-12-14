<script>
export default {
  name: "new-user",
  data() {
    return {
      modeSet: false,
      userSet: null,
      roles: [],
      seqs: [],
      rules: {
        valid: true,
        generic: [(v) => !!v || "Valor es requerido"],
        confirmPassWord: [
          (v) =>
            (!!v && v === this.userModel.passwordConfirm) ||
            "Contraseña no coincide",
        ],

        confirmQuestion: [
          (v) =>
            (!!v && v === this.userModel.securityQuestionConfirm) ||
            "Pregunta de seguridad no coincide",
        ],
        emailRules: [
          (v) => !!v || "E-mail es requerido",
          (v) => /.+@.+\..+/.test(v) || "E-mail no valido",
        ],
      },

      userModel: {
        name: "",
        password: "",
        passwordConfirm: "",
        IDRol: "",
        IDConsecutive: "",
        mail: "",
        group: "",
        securityQuestion: "",
        securityQuestionConfirm: "",
      },
      nameErrors: [],
    };
  },

  mounted() {
    this.getRoles();
    this.getSeqs();
  },

  async beforeMount() {
    if (this.$route.params.id) {
      this.modeSet = true;
      this.userSet = this.$route.params.id;
      const raw = await fetch("../app/users/" + this.userSet);
      const user = await raw.json();
      this.userModel = { ...this.userModel, ...user };
    }
  },
  methods: {
    async getRoles() {
      const raw = await fetch("../app/roles");
      const data = await raw.json();
      this.roles = data.rows;
    },
    async getSeqs() {
      const raw = await fetch("../app/seqs");
      const data = await raw.json();
      this.seqs = data.rows;
    },

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
        const raw = await fetch("../app/users/add", {
          method: this.modeSet ? "PUT" : "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.userModel),
        });
        const res = await raw.json();
        if (typeof res === "object" && "code" in res && res.code === 200) {
          this.$swal({
            icon: "success",
            title: `Registro ${
              this.modeSet ? "modificado" : "añadido"
            } de manera correcta`,
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push("/users");
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
        <v-form
          ref="form"
          @submit="submit"
          lazy-validation
          v-model="rules.valid"
        >
          <v-card>
            <v-card-text>
              <v-text-field
                v-model="userModel.name"
                :error-messages="nameErrors"
                :rules="rules.generic"
                label="Nombre del usuario"
                required
              ></v-text-field>
              <v-text-field
                v-model="userModel.mail"
                :error-messages="nameErrors"
                :rules="rules.emailRules"
                label="E-mail"
                type="email"
                required
              ></v-text-field>
              <v-select
                return-object
                data-app
                :items="roles"
                v-model="userModel.IDRol"
                item-Text="descripcion"
                item-Value="rol_id"
                label="Seleccione el rol del usuario"
              ></v-select>
              <v-select
                return-object
                :items="seqs"
                v-model="userModel.consecutive"
                item-Text="descripcion"
                item-Value="Id"
                label="Seleccione la secuencia del usuario"
              ></v-select>
              <v-text-field
                v-if="!modeSet"
                v-model="userModel.password"
                :error-messages="nameErrors"
                :rules="rules.generic"
                type="password"
                label="Password"
                required
              ></v-text-field>
              <v-text-field
                v-if="!modeSet"
                v-model="userModel.passwordConfirm"
                :error-messages="nameErrors"
                :rules="rules.passwordConfirm"
                type="password"
                label="Confirmar Password"
                required
              ></v-text-field>

              <v-text-field
                v-if="!modeSet"
                v-model="userModel.securityQuestion"
                :error-messages="nameErrors"
                :rules="rules.generic"
                label="¿Helado favorito?"
                required
              ></v-text-field>
              <v-text-field
                v-if="!modeSet"
                v-model="userModel.securityQuestionConfirm"
                :rules="rules.confirmQuestion"
                :error-messages="nameErrors"
                label="Confirmar helado favorito"
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