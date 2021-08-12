import { defineComponent } from 'vue'
import { openURL } from 'quasar'

const sopcoolingOFF = [
  {

    nama: "1. NONAKTIFKAN COOLING TOWER K901/K902 ATAU K903/K904",
    deskripsi: "Nonaktifkan cooling tower K901/K902 atau K903/K904 dengan menekan switch OFF."
  },
  {  

  nama: "2. NONAKTIFKAN POMPA P901 ATAU P902",
  deskripsi: "Nonaktifkan pompa P901 ATAU P902 dengan menekan switch OFF."
  },
  {  

  nama: "3. PASTIKAN SWITCH DALAM POSISI OFF",
  deskripsi: "Untuk kemanan pastikan switch dalam posisi off."
  }

]


export default defineComponent({
  name: 'HalamanSOPCoolingOFF',

  setup() {
    return {
      sopcoolingOFF,
    }
  }
})