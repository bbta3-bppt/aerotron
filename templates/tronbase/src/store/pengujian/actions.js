import {api} from "boot/axios"
import {Cookies} from "quasar"

export async function getPengujianAction (ctx, {page}) {
  const header = Cookies.get("_msk")

  return await api.get(
    `pengujian/api/daftar/`,
    {
      headers: { authorization: `Bearer ${header}` },
      params: {
        page: page != null ? page : null,
      }
    }
  )
}
