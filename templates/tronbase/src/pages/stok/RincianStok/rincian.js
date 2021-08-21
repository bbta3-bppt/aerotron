import moment from "moment"
import {computed, ref, onMounted} from "vue"
import {getBarangTertentu} from "src/services/barang"
import {useRouter, useRoute} from "vue-router"
import {useStore} from "vuex"
import {getAllPinjamanTertentu} from "src/services/pinjaman"

export default {
  name: 'RincianBarangPage',
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const pinjaman = ref([])
    const barang = ref({})
    const barangTertentu = computed({
      get() {
        return barang.value
      },
      set(val) {
        barang.value = val
      }
    })

    onMounted(async () => {
      moment.locale("id")

      const paramsId = route.params["id"]
      const res = await getBarangTertentu(store, router, paramsId)
      const resPinjaman = await getAllPinjamanTertentu(store, router, 1, paramsId)

      barangTertentu.value = res.data
      pinjaman.value = resPinjaman
    })

    const onKembali = () => {
      router.go(-1)
    }

    return {
      barangTertentu,
      pinjaman,
      moment,
      onKembali
    }
  }
}
