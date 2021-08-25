import {defineComponent, onMounted, ref} from "vue"
import {getAllFasilitas} from "src/services/fasilitas"
import {useStore} from "vuex"
import {useRouter} from "vue-router"


export default defineComponent({
  name: 'HalamanPengujian',
  setup() {
    const store = useStore()
    const router = useRouter()
    const fasilitas = ref({})
    const pg = ref(2)

    onMounted(async () => {
      await getAllFasilitas(store, router, 1)
      fasilitas.value = store.getters["fasilitas/getFasilitasGetter"]
    })

    const onMuatLagi = async () => {
      await getAllFasilitas(store, router, pg.value)
      pg.value += 1
    }

    const onRincianFasilitas = async (id) => {
      await router.push({name: "RincianFasilitasPengujian", params: {id}})
    }

    return {
      fasilitas,
      onMuatLagi,
      onRincianFasilitas
    }
  }
})
