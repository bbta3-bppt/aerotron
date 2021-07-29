
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/perawatan/perawatan.vue') },
      { path: 'dokumentasiILST', component: () => import('pages/perawatan/dokumentasi/dokumentasiILST.vue') },
      { path: 'dokumentasiIWET', component: () => import('pages/perawatan/dokumentasi/dokumentasiIWET.vue') },
      { path: 'dokumentasiESWT', component: () => import('pages/perawatan/dokumentasi/dokumentasiESWT.vue') },
      { path: 'dokumentasiAREAS', component: () => import('pages/perawatan/dokumentasi/dokumentasiAREAS.vue') },
      { path: 'dokumentasiVIENTA', component: () => import('pages/perawatan/dokumentasi/dokumentasiVIENTA.vue') },
      { path: 'dokumentasiPenunjang', component: () => import('pages/perawatan/dokumentasi/dokumentasiPenunjang.vue') },
    ]
  },

  {
    path: '/stok',
    component: () => import('layouts/MainLayout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/stok/stok.vue') }
    ]
  },

  {
    path: '/pengujian',
    component: () => import('layouts/MainLayout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pengujian/pengujian.vue') }
    ]
  },

  {
    path: '/masuk',
    component: () => import('layouts/OtenLayout/OtenLayout.vue'),
    children: [
      { path: '', component: () => import('pages/oten/otentikasi.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
