import {refreshToken} from "src/services/refresh"
import {Notify} from "quasar"

export const getAllFasilitas = async (store, router, page=1) => {
  const st = store
  const rt = router
  const pg = page

  try {
    if (page === 1) store.commit("fasilitas/resetFasilitasMutation")

    const res = await st.dispatch("fasilitas/getAllFasilitasAction", {page: pg})
    store.commit("fasilitas/setFasilitasMutation", {
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
      await getAllPinjamanTertentu(st, rt, pg)
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
