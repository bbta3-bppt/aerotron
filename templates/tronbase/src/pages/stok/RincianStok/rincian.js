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
    const pg = ref(2)
    const dialogPinjaman = ref(false)
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
      barangTertentu.value = res.data

      await getAllPinjamanTertentu(store, router, 1, paramsId)
      pinjaman.value = store.getters["pinjaman/getAllPinjamanGetter"]
    })

    const onKembali = () => {
      router.go(-1)
    }

    const onPinjaman = () => {
      dialogPinjaman.value = true
    }

    const onMemuatPinajaman = async () => {
      const paramsId = route.params["id"]

      await getAllPinjamanTertentu(store, router, pg.value, paramsId)
      pg.value += 1
    }

    return {
      dialogPinjaman,
      barangTertentu,
      pinjaman,
      moment,
      onKembali,
      onMemuatPinajaman,
      onPinjaman
    }
  }
}
