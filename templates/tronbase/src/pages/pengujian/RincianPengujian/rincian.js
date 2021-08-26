import {onMounted, ref} from "vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {getAllPengujian} from "src/services/pengujian"
import {getAllPinjamanTertentu} from "src/services/pinjaman";

export default {
  name: 'RincianPengujianPage',
  setup() {
    const store = useStore()
    const router = useRouter()
    const pengujian = ref("")
    const selectedPengujian = ref(false)
    const pg = ref(2)

    onMounted(async () => {
      await getAllPengujian(store, router, 1)
      pengujian.value = store.getters["pengujian/pengujianGetter"]
    })

    const onMemuatPengujian = async () => {
      await getAllPengujian(store, router, pg.value)
      pg.value += 1
    }

    return {
      pengujian,
      selectedPengujian,
      onMemuatPengujian
    }
  }
}
