import {perawatan, sop} from "src/router/perawatan/routes"
import {stok} from "src/router/stok/routes"
import {pengujian} from "src/router/pengujian/routes"

const routes = [
  {
    path: "/",
    meta: { kunci: false },
    component: () => import("layouts/MainLayout/MainLayout.vue"),
    children: perawatan
  },

  {
    path: "/operasi",
    meta: { kunci: false },
    component: () => import("layouts/MainLayout/MainLayout.vue"),
    children: sop
  },

  {
    path: "/stok",
    meta: { kunci: true },
    component: () => import("layouts/MainLayout/MainLayout.vue"),
    children: stok
  },

  {
    path: "/pengujian",
    meta: { kunci: true },
    component: () => import("layouts/MainLayout/MainLayout.vue"),
    children: pengujian
  },

  {
    path: "/masuk",
    component: () => import("layouts/OtenLayout/OtenLayout.vue"),
    children: [
      { path: "", component: () => import("pages/oten/otentikasi.vue"), name: "masuk", }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue")
  }
]

export default routes
