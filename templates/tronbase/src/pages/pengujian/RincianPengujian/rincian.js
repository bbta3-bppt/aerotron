import {onMounted, ref} from "vue"
import {useRoute} from "vue-router"

export default {
  name: 'RincianPengujianPage',
  setup() {
    const route = useRoute()
    const title = ref("")

    onMounted(() => {
      const paramsId = route.params["id"]

      title.value = `Halaman Rincian Pengujian ${paramsId}`
    })

    return {
      title
    }
  }
}
