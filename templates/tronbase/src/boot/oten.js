import {boot} from "quasar/wrappers"
import {Cookies} from "quasar"
import {refreshToken} from "../services/refresh"

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
        await refreshToken(store, next)
      }
    }

    else {
      next()
    }
  })
})
