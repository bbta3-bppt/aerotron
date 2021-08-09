import {boot} from "quasar/wrappers"
import {Cookies} from "quasar"

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({store, router}) => {
  router.beforeEach(async (to, from, next) => {
    const kunci = to.matched.some(value => value.meta["kunci"])
    const token = Cookies.get("_msk")
    const refresh = Cookies.get("_mskr")

    if (kunci) {
      try {
        await store.dispatch("otentikasi/checkUser", {token})

        next()
      }

      catch (err) {
        try {
          const res = await store.dispatch(
            "otentikasi/refreshAccessToken",
            {refresh}
          )
          const refresh = res.data

          Cookies.set("_msk", refresh["access"])
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
