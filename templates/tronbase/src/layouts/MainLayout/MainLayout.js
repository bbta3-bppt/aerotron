import {defineComponent, ref} from "vue"
import {useRouter} from "vue-router"
import {Cookies} from "quasar"

import EssentialLink from "components/PilihanAplikasi/PilihanAplikasi.vue"

const linksList = [
  {
    title: 'Perawatan',
    caption: 'Jadwal Perawatan',
    icon: 'bi-calendar-week',
    link: '/'
  },
  {
    title: 'Stok',
    caption: 'Stok Peralatan',
    icon: 'bi-cart4',
    link: '/stok'
  },
  {
    title: 'Pengujian',
    caption: 'Jadwal Pengujian',
    icon: 'bi-cursor',
    link: '/pengujian'
  }
];

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  setup() {
    const essentialLinks = linksList
    const leftDrawerOpen = ref(false)
    const router = useRouter()

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const onLogout = async () => {
      Cookies.remove("_msk")
      Cookies.remove("_mskr")

      await router.push({name: "masuk"})
    }

    return {
      essentialLinks,
      leftDrawerOpen,
      toggleLeftDrawer,
      onLogout
    }
  }
})
