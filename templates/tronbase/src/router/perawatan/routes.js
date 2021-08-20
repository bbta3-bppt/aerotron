export const perawatan = [
  { path: "", component: () => import("pages/perawatan/perawatan.vue") },
  { path: "dokumentasiILST", component: () => import("pages/perawatan/dokumentasi/dokumentasiILST.vue") },
  { path: "dokumentasiIWET", component: () => import("pages/perawatan/dokumentasi/dokumentasiIWET.vue") },
  { path: "dokumentasiESWT", component: () => import("pages/perawatan/dokumentasi/dokumentasiESWT.vue") },
  { path: "dokumentasiAREAS", component: () => import("pages/perawatan/dokumentasi/dokumentasiAREAS.vue") },
  { path: "dokumentasiVIENTA", component: () => import("pages/perawatan/dokumentasi/dokumentasiVIENTA.vue") },
  { path: "dokumentasiPenunjang", component: () => import("pages/perawatan/dokumentasi/dokumentasiPenunjang.vue") },
]

export const sop = [
  { path: "", component: () => import("pages/operasi/operasi.vue") },
  { path: "sopfandrivepowerhouseON", component: () => import("src/pages/operasi/sop/sopfandrivepowerhouseON.vue") },
  { path: "sopfandrivepowerhouseOFF", component: () => import("src/pages/operasi/sop/sopfandrivepowerhouseOFF.vue") },
  { path: "sopfandriveremoteON", component: () => import("src/pages/operasi/sop/sopfandriveremoteON.vue") },
  { path: "sopfandriveremoteOFF", component: () => import("src/pages/operasi/sop/sopfandriveremoteOFF.vue") },
  { path: "sopcompressorON", component: () => import("src/pages/operasi/sop/sopcompressorON.vue") },
  { path: "sopcompressorOFF", component: () => import("src/pages/operasi/sop/sopcompressorOFF.vue")},
  { path: "sopcoolingON", component: () => import("src/pages/operasi/sop/sopcoolingON.vue") },
  { path: "sopcoolingOFF", component: () => import("src/pages/operasi/sop/sopcoolingOFF.vue") }
]
