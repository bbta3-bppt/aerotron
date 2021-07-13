
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/perawatan/perawatan.vue') }
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
