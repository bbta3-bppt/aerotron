export const pengujian = [
  { path: "", component: () => import("pages/pengujian/pengujian.vue") },
  {
    path: ":id", component: () => import("pages/pengujian/RincianPengujian/Rincian.vue"),
    name: "RincianFasilitasPengujian"
  },
]
