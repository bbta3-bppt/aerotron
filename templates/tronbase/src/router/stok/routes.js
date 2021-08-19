export const stok = [
  { path: '', component: () => import('pages/stok/stok.vue'), name: "stok_page" },
  { path: ':id', component: () => import('pages/stok/RincianStok/Rincian.vue'), name: "rincian_stok_page" },
]
