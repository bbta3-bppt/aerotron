import {computed, ref} from "vue"
import {getBarang} from "src/services/barang";
import {useStore} from "vuex"
import {useRouter} from "vue-router"

export default {
  name: 'SearchComponent',
  setup () {
    const store = useStore()
    const router = useRouter()
    const temukan = ref(null)

    const computeTemukan = computed({
      get() {
        return temukan.value
      },
      set(val) {
        temukan.value = val
        store.commit("stok/setCariMutation", val)
      }
    })

    const onSearch = async () => {
      await getBarang(store, 1, router)
    }

    const onReset = async () => {
      temukan.value = null
      store.commit("stok/setCariMutation", null)

      await getBarang(store, 1, router)
    }

    return {
      temukan,
      computeTemukan,
      onSearch,
      onReset,
    }
  }
}
