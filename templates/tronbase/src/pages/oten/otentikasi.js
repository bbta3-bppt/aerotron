import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {Cookies, Notify} from "quasar"
import {defineComponent, ref} from "vue"


export default defineComponent({
  name: 'HalamanOtentikasi',
  beforeCreate() {
    if (Cookies.has("_msk")) {
      this.$router.push({path: "/"}).then(() => {})
    }
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const username = ref(null)
    const usernameRef = ref(null)
    const usernameRules = [
      val => (val && val.length > 0) || 'Username harus diisi'
    ]

    const password = ref(null)
    const passwordRef = ref(null)
    const passwordRules = [
      val => (val !== null && val !== '') || 'Password harus diisi'
    ]

    const onSubmit = async () => {
      usernameRef.value.validate()
      passwordRef.value.validate()

      if (!usernameRef.value.hasError && !passwordRef.value.hasError) {
        try {
          const res = await store.dispatch("otentikasi/getTokenAction", {
            username: username.value,
            password: password.value
          })
          const token = res.data

          Cookies.set("_msk", token.access, {
            sameSite: 'Lax',
            expires: '1d'
          })

          Cookies.set("_mskr", token.refresh, {
            sameSite: 'Lax',
            expires: '1d'
          })

          router.push({path: "/"}).then(() => {})
        } catch (err) {
          let message

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
    }

    const onReset = () => {
      username.value = null
      password.value = null

      usernameRef.value.resetValidation()
      passwordRef.value.resetValidation()
    }

    return {
      username,
      usernameRef,
      usernameRules,

      password,
      passwordRef,
      passwordRules,

      onSubmit,
      onReset
    }
  }
})
