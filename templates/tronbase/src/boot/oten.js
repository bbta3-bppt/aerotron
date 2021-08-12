import {boot} from "quasar/wrappers"
import {Cookies} from "quasar"

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({store, router}) => {
  router.beforeEach(async (to, from, next) => {
    const kunci = to.matched.some(value => value.meta["kunci"])
    const token = Cookies.get("_msk")

    if (kunci) {
      try {
        await store.dispatch("otentikasi/checkUser", {token})

        next()
      }

      catch (err) {
        try {
          const refresh = Cookies.get("_mskr")
          const res = await store.dispatch(
            "otentikasi/refreshAccessToken",
            {refresh}
          )
          const fresh = res.data

          Cookies.set("_msk", fresh["access"])
          next()
        }

        catch (err) {
          Cookies.remove("_msk")
          Cookies.remove("_mskr")
          next({name: "masuk"})
        }
      }
    }

    else {
      next()
    }
  })
})
