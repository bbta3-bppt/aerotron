import EssentialLink from 'components/EssentialLink.vue'
import { defineComponent, ref } from 'vue'

const linksList = [
  {
    title: 'Perawatan',
    caption: 'Jadwal Peralatan',
    icon: 'eva-briefcase-outline',
    link: ''
  },
  {
    title: 'Stok',
    caption: 'Stok Peralatan',
    icon: 'eva-archive-outline',
    link: ''
  },
  {
    title: 'Pengujian',
    caption: 'Jadwal Pengujian',
    icon: 'eva-navigation-2-outline',
    link: ''
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
