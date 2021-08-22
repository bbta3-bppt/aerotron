import {refreshToken} from "src/services/refresh"
import {Notify} from "quasar"

export const getAllPinjamanTertentu = async (store, router, page=1, id) => {
  const st = store
  const rt = router
  const pg = page
  const i = id

  try {
    if (page === 1) store.commit("pinjaman/resetAllPinjamanMutation")

    const res = await st.dispatch("pinjaman/getAllPinjamanAction", {page: pg, id: i})
    store.commit("pinjaman/setAllPinjamanMutation", {
      count: res.data["count"],
      results: res.data["results"],
      next: res.data["next"],
      previous: res.data["previous"]
    })
  }

  catch (err) {
    let message

    if (err.response) {
      await refreshToken(st, null, rt)
      await getAllPinjamanTertentu(st, rt, pg, i)
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
