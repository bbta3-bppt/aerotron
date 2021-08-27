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
    const idSelectedPengujian = ref(0)
    const pg = ref(2)
    const pgPaket = ref(2)

    onMounted(async () => {
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
    }

    return {
      pengujian,
      selectedPengujian,
      idSelectedPengujian,
      paket,
      pgPaket,
      onMemuatPengujian,
      onRincianPengujian
    }
  }
}
