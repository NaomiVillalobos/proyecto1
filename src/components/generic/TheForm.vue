<script>
export default {
  data() {
    return {
      valid: true,
      values: {},
      rules: {
        valid: true,
        generic: [(v) => !!v || "Valor es requerido"],
        emailRules: [
          (v) => !!v || "E-mail es requerido",
          (v) => /.+@.+\..+/.test(v) || "E-mail no valido",
        ],
      },
    };
  },
  props: {
    model: {
      required: true,
      type: Array,
    },
  },

  beforeMount() {
    this.model.forEach((data) => {
      this.values[data.id] = data.default || "";
    });
  },

  methods: {
    submit(event) {
      event.preventDefault();
      event.stopPropagation();
      if (!this.$refs.form.validate()) {
        this.$emit("error");
      } else {
        this.$emit("ok", this.values);
      }
    },
  },
};
</script>
<template>
  <v-form ref="form" @submit="submit" lazy-validation v-model="valid">
    <v-card>
      <v-card-text>
        <v-text-field
          v-for="data in this.model"
          :key="data.id"
          v-model="values[data.id]"
          :rules="rules[data.rule || 'generic']"
          :label="data.label"
          :required="data.required"
          :type="data.type"
        >
        </v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn class="mr-4" @click="submit"> submit </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>