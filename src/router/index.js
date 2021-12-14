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
    path: "/createUser",
    name: "Usuarios",
    component: () => import("../components/users/newUser.vue"),
  },
  {
    path: "/createUser/:id",
    name: "Usuarios",
    component: () => import("../components/users/newUser.vue"),
  },
  {
    path: "/assing-Roles",
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

    path: "/setSeq/:id",
    name: "Consecutivos",
    component: () => import("../components/consecutivos/newSeq.vue"),
  },
  {
    path: "/Tarifas",
    name: "Tarifas",
    component: () => import("../components/consecutivos/Tarifas.vue"),
  },
  {
    path: "/newSeq",
    name: "Tarifas",
    component: () => import("../components/consecutivos/newSeq.vue"),
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
  {
    path: "/Crear_Cuenta",
    name: "Crear_Cuenta",
    component: () => import("../components/menu/Crear_Cuenta.vue"),
  },
  {
    path: "/TheMenu",
    name: "E-Descargas_BackEnd",
    component: () => import("../components/TheMenu.vue"),
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
    path: "/Tarjeta",
    name: "tarjeta",
    component: () => import("../components/menu/Tarjeta.vue"),
  },
  {
    path: "/Easy_Pay",
    name: "Easy_Pay",
    component: () => import("../components/menu/Easy_Pay.vue"),
  },
  {
    path: "/roles",
    name: "Roles",
    component: () => import("../components/Roles/role-list.vue"),
  },
  {
    path: "/new-role",
    name: "Roles",
    component: () => import("../components/Roles/role-add.vue"),
  },






];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;