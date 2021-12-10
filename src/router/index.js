import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/users",
    name: "Usuarios",
    component: () => import("../components/users/UserList.vue"),
  },
  {
    path: "/Roles",
    name: "Asignar_Roles",
    component: () => import("../components/users/Roles.vue"),
  },
  {
    path: "/verUsuario",
    name: "Ver_Usuario",
    component: () => import("../components/users/UserList.vue"),
  },

  {
    path: "/cambiarContraseña",
    name: "Cambiar_Contraseña",
    component: () => import("../components/users/cambiarContraseña.vue"),
  },



  {
    path: "/Consecutivos",
    name: "Consecutivos",
    component: () => import("../components/consecutivos/Consecutivos.vue"),
  },
  {
    path: "/Tarifas",
    name: "Tarifas",
    component: () => import("../components/consecutivos/Tarifas.vue"),
  },
  {
    path: "/Parametros",
    name: "Parametros",
    component: () => import("../components/consecutivos/Parametros.vue"),
  },
  {
    path: "/ProductosyServicios",
    name: "ProductosyServicios",
    component: () => import("../components/consecutivos/ProductosyServicios.vue"),
  },
  {
    path: "/Peliculas",
    name: "Peliculas",
    component: () => import("../components/consecutivos/Peliculas.vue"),
  },
  {
    path: "/Libros",
    name: "Libros",
    component: () => import("../components/consecutivos/Libros.vue"),
  },
  {
    path: "/Musica",
    name: "Musica",
    component: () => import("../components/consecutivos/Musica.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/login/login.vue"),
  },



  {
    path: "/ProductosyServicios",
    name: "ProductosyServicios",
    component: () => import("../components/consecutivos/ProductosyServicios.vue"),
  },
  {
    path: "/Bitacora",
    name: "Bitacora",
    component: () => import("../components/consultas/Bitacora.vue"),
  },
  {
    path: "/Transacciones",
    name: "Transacciones",
    component: () => import("../components/consultas/Transacciones.vue"),
  },
  {
    path: "/Descargas",
    name: "Descargas",
    component: () => import("../components/consultas/Descargas.vue"),
  },
  {
    path: "/Errores",
    name: "Errores",
    component: () => import("../components/consultas/Errores.vue"),
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;