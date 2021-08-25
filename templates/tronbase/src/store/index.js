import {store} from "quasar/wrappers"
import {createStore} from "vuex"

import otentikasi from "./otentikasi"
import stok from "./stok"
import pinjaman from "./pinjaman"
import pengujian from "./pengujian"
import fasilitas from "./fasilitas"

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  return createStore({
    modules: {
      otentikasi,
      stok,
      pinjaman,
      pengujian,
      fasilitas,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })
})
