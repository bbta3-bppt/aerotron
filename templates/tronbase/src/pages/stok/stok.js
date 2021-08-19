import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {defineComponent, onBeforeMount, ref, computed} from "vue"

import {getBarang} from "src/services/barang"
import DropdownKategori from "components/Stok/Dropdown/DropdownKategori"
import SearchBarang from "components/Stok/SearchBox/SearchBarang"


export default defineComponent({
  name: 'Halaman Stok',
  components: {DropdownKategori, SearchBarang},
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

    const rincianStok = async (id) => {
      await router.push({name: "rincian_stok_page", params: {id}})
    }

    return {
      barang,
      page_size,
      count,
      current,
      onGetBarang,
      rincianStok
    }
  }
})
