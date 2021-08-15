import {ref, onBeforeMount} from "vue"
import {Notify} from "quasar"
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {refreshToken} from "src/services/refresh"

export default {
  name: "KategoriDropdownComponent",
  setup() {
    const store = useStore()
    const router = useRouter()
    const kategori = ref(null)
    const lastPage = ref(0)
    const options = ref([])
    const nextPage = ref(1)

    onBeforeMount(async () => {
      await getKategori(1)

      const kategori = store.getters["stok/kategoriGetter"]
      options.value = kategori.results
      lastPage.value = Math.ceil(kategori.count / process.env.PAGE_SIZE)
    })

    const onScroll = async (props) => {
      const lastIndex = options.value.length - 1

      if (nextPage.value < lastPage.value && props.to === lastIndex) {
        nextPage.value++
        await getKategori(nextPage.value)
        const kategori = store.getters["stok/kategoriGetter"]
        options.value = kategori.results
      }
    }

    const getKategori = async (page) => {
      try {
        const res = await store.dispatch("stok/getKategoriAction", {page})
        const payload = res.data

        store.commit("stok/setKategoriMutation", {
          count: payload["count"],
          results: payload["results"],
          next: payload["next"],
          previous: payload["previous"]
        })
      }

      catch (err) {
        let message

        if (err.response) {
          await refreshToken(store, null, router)
          await getKategori()
        }

        else {
          message = err.message

          Notify.create({
            type: "negative",
            message: message
          })
        }
      }
    }

    return {
      kategori,
      options,
      onScroll
    }
  }
}
