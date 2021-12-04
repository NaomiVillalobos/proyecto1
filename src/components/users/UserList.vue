<script>
export default {
  name: "user-list",
  data() {
    return {
      users: [
        {
          name: "Nahomi Villalobos",
          email: "nao@gmail.com",
          group: "admin",
        },
        {
          name: "Jose Salas",
          email: "jose@gmail.com",
          group: "other 1",
        },
        {
          name: "Bruno Salas",
          email: "ferm@gmail.com",
          group: "other 2",
        },
        {
          name: "Valentio Salas V.",
          email: "vale@gmail.com",
          group: "other 3",
        },
      ],
    };
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
          value: "email",
        },
        {
          text: "User group",
          value: "group",
        },
      ];
    },
  },
};
</script>
<template>
  <v-card class="mx-auto" outlined>
    <v-data-table
      :headers="tableHeaders"
      :items="users"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
  </v-card>
</template>
