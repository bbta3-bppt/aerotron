import {refreshToken} from "src/services/refresh"
import {Notify} from "quasar"

export const getAllPengujian = async (store, router, page=1, id) => {
  const st = store
  const rt = router
  const pg = page
  const i = id

  try {
    if (page === 1) store.commit("pengujian/resetAllPengujianMutation")

    const res = await st.dispatch("pengujian/getPengujianAction", {page: pg, id: i})
    store.commit("pengujian/setAllPengujianMutation", {
      count: res.data["count"] ? res.data["count"] : 0,
      results: res.data["results"] ? res.data["results"] : [],
      next: res.data["next"] ? res.data["next"] : null,
      previous: res.data["previous"] ? res.data["previous"] : null
    })
  }

  catch (err) {
    let message

    if (err.response) {
      await refreshToken(st, null, rt)
      await getAllPengujian(st, rt, pg, i)
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
