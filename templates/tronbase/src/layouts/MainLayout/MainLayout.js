import {defineComponent, ref, computed} from "vue"
import {useRouter} from "vue-router"
import {useStore} from "vuex"
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
    title: 'Operasi',
    caption: 'Standar Peengoperasian Alat',
    icon: 'precision_manufacturing',
    link: '/operasi'
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
    const store = useStore()
    const essentialLinks = linksList
    const leftDrawerOpen = ref(false)
    const router = useRouter()

    const isLoggedIn = computed(() => {
      return store.getters["otentikasi/getLoggedInStatusGetter"]
    })

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const onLogout = async () => {
      Cookies.remove("_msk")
      Cookies.remove("_mskr")

      store.commit("otentikasi/setLoginStatusMutation", {loggedIn: false})
      await router.push({name: "masuk"})
    }

    return {
      isLoggedIn,
      essentialLinks,
      leftDrawerOpen,
      toggleLeftDrawer,
      onLogout
    }
  }
})
