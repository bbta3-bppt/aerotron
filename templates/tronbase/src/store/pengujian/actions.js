import {api} from "boot/axios"
import {Cookies} from "quasar"

export async function getPengujianAction (ctx, {page, id}) {
  const header = Cookies.get("_msk")

  return await api.get(
    `pengujian/api/daftar/${id}`,
    {
      headers: { authorization: `Bearer ${header}` },
      params: {
        page: page != null ? page : null,
      }
    }
  )
}

export async function getPaketPengujianAction (ctx, {page, id}) {
  const header = Cookies.get("_msk")

  return await api.get(
    `pengujian/api/daftar/${id}/rincian`,
    {
      headers: { authorization: `Bearer ${header}` },
      params: {
        page: page != null ? page : null,
      }
    }
  )
}
