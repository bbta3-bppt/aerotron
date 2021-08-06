import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ store, router}) => {
  router.beforeEach(async (to, from, next) => {
    const kunci = to.matched.some(value => value.meta["kunci"])

    if (kunci) {
      next({name: 'masuk'})
    } else {
      next()
    }
  })
})
