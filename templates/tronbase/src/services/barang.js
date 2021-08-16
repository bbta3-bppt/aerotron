import {refreshToken} from "src/services/refresh"
import {Notify} from "quasar"

export const getBarang = async (store, page=1, router, kategori=null) => {
  const st = store
  const pg = page
  const rt = router
  const kat = kategori

  try {
    const res = await st.dispatch("stok/getBarangAction", {page: pg, kategori: kat})
    const payload = res.data

    st.commit("stok/resetBarangMutation")
    st.commit("stok/setBarangMutation", {
      count: payload["count"],
      results: payload["results"],
      next: payload["next"],
      previous: payload["previous"]
    })
  }

  catch (err) {
    let message

    if (err.response) {
      await refreshToken(st, null, rt)
      await getBarang(st, pg, rt, kat)
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
