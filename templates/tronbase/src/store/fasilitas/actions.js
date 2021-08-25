import {api} from "boot/axios"
import {Cookies} from "quasar"

export async function getAllFasilitasAction (ctx, {page}) {
  const header = Cookies.get("_msk")

  return await api.get(
    `perawatan/api/fasilitas/`,
    {
      headers: { authorization: `Bearer ${header}` },
      params: {
        page: page != null ? page : null,
      }
    }
  )
}
