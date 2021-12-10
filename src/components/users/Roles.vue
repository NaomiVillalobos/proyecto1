<script>
export default {
  data() {
    return {
      Roles: "Estos son los roles:",
      Administrador: "Administrador",
      Seguridad: "Seguridad",
      Consecutivo: "Consecutivo",
      Mantenimiento: "Mantenimiento",
      Consulta: "Consulta",
    };
  },
};
</script>
<template>
  <div id="">
    <h1>{{ Roles }}</h1>
    <h2>{{ Administrador }}</h2>
    <h2>{{ Seguridad }}</h2>
    <h2>{{ Consecutivo }}</h2>
    <h2>{{ Mantemiento }}</h2>
    <h2>{{ Consulta }}</h2>
  </div>
</template>


