import EssentialLink from 'components/PilihanAplikasi/PilihanAplikasi.vue'
import { defineComponent, ref } from 'vue'

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

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
