import {refreshToken} from "src/services/refresh"
import {Notify} from "quasar"

export const getBarang = async (store, page=1, router) => {
  const st = store
  const pg = page
  const rt = router

  try {
    const kategori = st.getters["stok/pilihKategoriGetter"]
    const cari = st.getters["stok/cariGetter"]
    const res = await st.dispatch("stok/getBarangAction", {page: pg, kategori, cari})
    const payload = res.data

    st.commit("stok/resetBarangMutation")
    st.commit("stok/setBarangMutation", {
      count: payload["count"] ? payload["count"] : 0,
      results: payload["results"] ? payload["results"] : [],
      next: payload["next"] ? payload["next"] : null,
      previous: payload["previous"] ? payload["previous"] : null
    })
  }

  catch (err) {
    let message

    if (err.response) {
      await refreshToken(st, null, rt)
      await getBarang(st, pg, rt)
    }

    else {
      message = err.message

      Notify.create({
        type: "negative",
        message: message
      })
    }
  }
}

export const getBarangTertentu = async (store, router, id) => {
  const st = store
  const rt = router
  const i = id

  try {
    return await st.dispatch("stok/getBarangTertentuAction", i)
  }

  catch (err) {
    let message

    if (err.response) {
      await refreshToken(st, null, rt)
      await getBarangTertentu(st, rt, i)
    }

    else {
      message = err.message

      Notify.create({
        type: "negative",
        message: message
      })
    }
  }
}
