<script>
export default {
  name: "new-user",
  data() {
    return {
      userModel: {
        name: "",
        password: "",
        passwordConfirm: "",
        mail: "",
        securityQuestion: "",
        securityQuestionConfirm: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form ref="form">
          <v-text-field
            v-model="userModel.name"
            :error-messages="nameErrors"
            label="User name"
            required
          ></v-text-field>
          <v-text-field
            v-model="userModel.password"
            :error-messages="nameErrors"
            type="password"
            label="Password"
            required
          ></v-text-field>
          <v-text-field
            v-model="userModel.passwordConfirm"
            :error-messages="nameErrors"
            type="password"
            label="Confirm Password"
            required
          ></v-text-field>
          <v-text-field
            v-model="userModel.email"
            :error-messages="nameErrors"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            type="email"
            required
          ></v-text-field>
          <v-text-field
            v-model="userModel.securityQuestion"
            :error-messages="nameErrors"
            label="Security Question"
            required
          ></v-text-field>
          <v-text-field
            v-model="userModel.securityQuestionConfirm"
            :error-messages="nameErrors"
            label="Confirm Security Question"
            required
          ></v-text-field>
          <v-btn class="mr-4" @click="submit"> submit </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>