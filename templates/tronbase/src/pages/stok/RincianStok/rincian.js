import {computed, ref, onBeforeMount} from "vue"
import {getBarangTertentu} from "src/services/barang"
import {useRouter, useRoute} from "vue-router"
import {useStore} from "vuex"

export default {
  name: 'RincianBarangPage',
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const barang = ref({})
    const barangTertentu = computed({
      get() {
        return barang.value
      },
      set(val) {
        barang.value = val
      }
    })

    onBeforeMount(async () => {
      const paramsId = route.params["id"]
      const res = await getBarangTertentu(store, router, paramsId)
      barangTertentu.value = res.data
    })

    const onKembali = () => {
      router.go(-1)
    }

    return {
      barangTertentu,
      onKembali
    }
  }
}
