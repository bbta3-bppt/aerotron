import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {defineComponent, onBeforeMount, ref, computed} from "vue"

import DropdownKategori from "components/Stok/Dropdown/DropdownKategori"
import {getBarang} from "src/services/barang"


export default defineComponent({
  name: 'Halaman Stok',
  components: {DropdownKategori},
  setup() {
    const store = useStore()
    const router = useRouter()
    const page_size = ref(process.env.PAGE_SIZE)

    onBeforeMount(async () => {
      await getBarang(store, current.value, router)
    })

    const barang = computed(() => {
      return store.getters["stok/barangGetter"]
    })

    const onGetBarang = async () => {
      await getBarang(store, current.value, router)
    }

    // Pagination
    const count = ref(0)
    const current = ref(1)

    // Pencarian
    const temukan = ref(null)
    const temukanRef = ref(null)
    const temukanRules = [
      val => (val && val.length > 0) || 'perlu diisi'
    ]

    const onSearch = () => {
      temukanRef.value.validate()

      if (!temukanRef.value.hasError) {
        console.log(temukan.value)
      }
    }

    const onReset = () => {
      temukan.value = null
      temukanRef.value.resetValidation()
    }

    return {
      barang,
      page_size,
      count,
      current,
      temukan,
      temukanRef,
      temukanRules,
      onSearch,
      onReset,
      onGetBarang
    }
  }
})
