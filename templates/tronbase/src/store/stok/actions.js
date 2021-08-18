import {api} from "boot/axios"
import {Cookies} from "quasar"

export async function getBarangAction (ctx, {page, kategori}) {
  const header = Cookies.get("_msk")

  return await api.get(
    `stok/api/barang/`,
    {
      headers: { authorization: `Bearer ${header}` },
      params: {
        page: page != null ? page : null,
        kategori: kategori != null ? kategori : null
      }
    }
  )
}

export async function getKategoriAction (ctx, {page}) {
  const header = Cookies.get("_msk")

  return await api.get(
    `stok/api/kategori/`,
    {
      headers: { authorization: `Bearer ${header}` },
      params: { page: page != null ? page : null }
    }
  )
}
