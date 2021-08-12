
const routes = [
  {
    path: '/',
    meta: { kunci: false },
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
    path: '/operasi',
    meta: { kunci: false },
    component: () => import('layouts/MainLayout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/operasi/operasi.vue') },
      { path: 'sopfandrivepowerhouseON', component: () => import('src/pages/operasi/sop/sopfandrivepowerhouseON.vue') },
      { path: 'sopfandrivepowerhouseOFF', component: () => import('src/pages/operasi/sop/sopfandrivepowerhouseOFF.vue') },
      { path: 'sopfandriveremoteON', component: () => import('src/pages/operasi/sop/sopfandriveremoteON.vue') },
      { path: 'sopfandriveremoteOFF', component: () => import('src/pages/operasi/sop/sopfandriveremoteOFF.vue') },
      { path: 'sopcompressorON', component: () => import('src/pages/operasi/sop/sopcompressorON.vue') },
      { path: 'sopcompressorOFF', component: () => import('src/pages/operasi/sop/sopcompressorOFF.vue')},
      { path: 'sopcoolingON', component: () => import('src/pages/operasi/sop/sopcoolingON.vue') },
      { path: 'sopcoolingOFF', component: () => import('src/pages/operasi/sop/sopcoolingOFF.vue') }
    ]
  },

  {
    path: '/stok',
    meta: { kunci: true },
    component: () => import('layouts/MainLayout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/stok/stok.vue') }
    ]
  },

  {
    path: '/pengujian',
    meta: { kunci: true },
    component: () => import('layouts/MainLayout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pengujian/pengujian.vue') }
    ]
  },

  {
    path: '/masuk',
    component: () => import('layouts/OtenLayout/OtenLayout.vue'),
    children: [
      { path: '', component: () => import('pages/oten/otentikasi.vue'), name: 'masuk', }
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
