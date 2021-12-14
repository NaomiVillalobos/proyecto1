<script>
export default {
  name: "new-user",
  data() {
    return {
      modeSet: false,
      userSet: null,
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
        mail: "",
        group: "",
        securityQuestion: "",
        securityQuestionConfirm: "",
      },
      nameErrors: [],
    };
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
        <v-form ref="form" @submit="submit" lazy-validation v-model="valid">
          <v-card>
            <v-card-text>
              <v-text-field
                v-model="userModel.name"
                :error-messages="nameErrors"
                :rules="rules.generic"
                label="User name"
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
              <v-text-field
                v-model="userModel.group"
                :error-messages="nameErrors"
                :rules="rules.generic"
                label="Grupo"
                type="text"
                required
              ></v-text-field>
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
                label="Confirm Password"
                required
              ></v-text-field>

              <v-text-field
                v-if="!modeSet"
                v-model="userModel.securityQuestion"
                :error-messages="nameErrors"
                :rules="rules.generic"
                label="Security Question"
                required
              ></v-text-field>
              <v-text-field
                v-if="!modeSet"
                v-model="userModel.securityQuestionConfirm"
                :rules="rules.confirmQuestion"
                :error-messages="nameErrors"
                label="Confirm Security Question"
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