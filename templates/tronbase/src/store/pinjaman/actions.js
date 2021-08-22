import {api} from "boot/axios"
import {Cookies} from "quasar"

export async function getAllPinjamanAction (ctx, {page, id}) {
  const header = Cookies.get("_msk")

  return await api.get(
    `stok/api/barang/${id}/pinjaman/`,
    {
      headers: { authorization: `Bearer ${header}` },
      params: {
        page: page != null ? page : null,
      }
    }
  )
}
