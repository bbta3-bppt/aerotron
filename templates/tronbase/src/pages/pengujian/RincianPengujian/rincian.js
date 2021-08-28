import moment from "moment"
import {onMounted, ref} from "vue"
import {useStore} from "vuex"
import {useRouter, useRoute} from "vue-router"
import {getAllPaketPengujian, getAllPengujian} from "src/services/pengujian"

export default {
  name: 'RincianPengujianPage',
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const pengujian = ref("")
    const paket = ref("")
    const selectedPengujian = ref(false)
    const selectedRincianPengujian = ref(null)
    const idSelectedPengujian = ref(0)
    const pg = ref(2)
    const pgPaket = ref(2)

    onMounted(async () => {
      moment.locale("id")
      await getAllPengujian(store, router, 1, route.params["id"])
      pengujian.value = store.getters["pengujian/pengujianGetter"]
    })

    const onMemuatPengujian = async () => {
      await getAllPengujian(store, router, pg.value, route.params["id"])
      pg.value += 1
    }

    const onRincianPengujian = async (id) => {
      await getAllPaketPengujian(store, router, 1, id)
      paket.value = store.getters["pengujian/paketPengujianGetter"]
      selectedPengujian.value = true
      idSelectedPengujian.value = id

      const selected_pengujian = store.getters["pengujian/pengujianGetter"]
        .results
        .filter(uji => uji.id === id)
      store.commit("pengujian/setPengujianTertentuMutation", selected_pengujian[0])

      selectedRincianPengujian.value = store.getters["pengujian/pengujianTertentuGetter"]
    }

    return {
      moment,
      pengujian,
      selectedPengujian,
      selectedRincianPengujian,
      idSelectedPengujian,
      paket,
      pgPaket,
      onMemuatPengujian,
      onRincianPengujian
    }
  }
}
