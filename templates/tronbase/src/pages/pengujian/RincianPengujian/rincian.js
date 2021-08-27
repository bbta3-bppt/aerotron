import {onMounted, ref} from "vue"
import {useStore} from "vuex"
import {useRouter, useRoute} from "vue-router"
import {getAllPengujian} from "src/services/pengujian"
import {getAllPinjamanTertentu} from "src/services/pinjaman"

export default {
  name: 'RincianPengujianPage',
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const pengujian = ref("")
    const selectedPengujian = ref(false)
    const pg = ref(2)

    onMounted(async () => {
      await getAllPengujian(store, router, 1, route.params["id"])
      pengujian.value = store.getters["pengujian/pengujianGetter"]
    })

    const onMemuatPengujian = async () => {
      await getAllPengujian(store, router, pg.value, route.params["id"])
      pg.value += 1
    }

    return {
      pengujian,
      selectedPengujian,
      onMemuatPengujian
    }
  }
}
