import {useStore} from "vuex"
import {openURL} from "quasar"
import {useRouter} from "vue-router"
import {defineComponent, onMounted, ref} from "vue"
import {getAllFasilitas} from "src/services/fasilitas"


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

    const goToExternal = (url) => {
      openURL(url, null, { noopener: true, noreferrer: true })
    }

    return {
      fasilitas,
      onMuatLagi,
      goToExternal,
      onRincianFasilitas
    }
  }
})
