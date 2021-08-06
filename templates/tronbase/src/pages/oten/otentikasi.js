import {defineComponent, ref} from "vue"
import {Cookies, Notify} from "quasar"


export default defineComponent({
  name: 'HalamanOtentikasi',
  beforeRouteEnter(to, from, next) {
    const check = to.matched.some(value => value.name === "masuk")

    if (check) {
      if (Cookies.has("_msk")) next({ path: from.path })
      else next()
    } else next()
  },
  setup() {
    const username = ref(null)
    const usernameRef = ref(null)
    const password = ref(null)
    const passwordRef = ref(null)

    return {
      username,
      usernameRef,
      usernameRules: [
        val => (val && val.length > 0) || 'Username harus diisi'
      ],

      password,
      passwordRef,
      passwordRules: [
        val => (val !== null && val !== '') || 'Password harus diisi'
      ],

      async onSubmit() {
        usernameRef.value.validate()
        passwordRef.value.validate()

        if (!usernameRef.value.hasError || !passwordRef.value.hasError) {
          try {
            const res = await this.$store.dispatch("otentikasi/getTokenAction", {
              username: username.value,
              password: password.value
            })
            const token = res.data

            Cookies.set("_msk", token.access, {
              sameSite: 'Strict'
            })

            Cookies.set("_mskr", token.refresh, {
              sameSite: 'Strict',
              httpOnly: true
            })
          } catch (err) {
            let message = null

            if (err.response) {
              message = err.response.data.detail
            } else if (err.request) {
              message = err.request
            } else {
              message = err.message
            }

            Notify.create({
              type: "negative",
              message: message
            })
          }
        }
      },
      onReset() {
        username.value = null
        password.value = null

        usernameRef.value.resetValidation()
        passwordRef.value.resetValidation()
      }
    }
  }
})
