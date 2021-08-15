import {Cookies} from "quasar"

export const refreshToken = async (store, next=null, router=null) => {
  try {
    const refresh = Cookies.get("_mskr")
    const res = await store.dispatch(
      "otentikasi/refreshAccessToken",
      {refresh}
    )
    const fresh = res.data

    Cookies.set("_msk", fresh["access"])
    if (next != null) next()
  }

  catch (err) {
    Cookies.remove("_msk")
    Cookies.remove("_mskr")

    if (next != null) next({name: "masuk"})
    else if (router != null) router.push({name: "masuk"})
  }
}
