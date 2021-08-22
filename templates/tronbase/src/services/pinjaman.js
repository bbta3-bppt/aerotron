import {refreshToken} from "src/services/refresh"
import {Notify} from "quasar"

export const getAllPinjamanTertentu = async (store, router, page=1, id) => {
  const st = store
  const rt = router
  const pg = page
  const i = id

  try {
    store.commit("pinjaman/resetAllPinjamanMutation")
    const res = await st.dispatch("pinjaman/getAllPinjamanAction", {page: pg, id: i})

    return res.data
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
