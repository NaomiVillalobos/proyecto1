<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    async submit(event) {
      event.stopPropagation();
      event.preventDefault();
      const raw = await fetch("../app/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      });
      const res = await raw.json();
      if (res.errCode === "200") {
        this.$router.push("/");
      }
    },
  },
};
</script>
<template>
  <div class="login-form">
    <h1>Login Form</h1>
    <form action="app/auth" method="POST">
      <input
        type="text"
        name="username"
        placeholder="Username"
        v-model="user.name"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        v-model="user.password"
        required
      />
      <input type="submit" @click="submit" />
    </form>
  </div>
</template>
<style scoped>
.login-form {
  width: 300px;
  margin: 0 auto;
  font-family: Tahoma, Geneva, sans-serif;
}
.login-form h1 {
  text-align: center;
  color: #4d4d4d;
  font-size: 24px;
  padding: 20px 0 20px 0;
}
.login-form input[type="password"],
.login-form input[type="text"] {
  width: 100%;
  padding: 15px;
  border: 1px solid #dddddd;
  margin-bottom: 15px;
  box-sizing: border-box;
}
.login-form input[type="submit"] {
  width: 100%;
  padding: 15px;
  background-color: #535b63;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
  color: #ffffff;
}
</style>