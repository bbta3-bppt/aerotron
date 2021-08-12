import { defineComponent } from 'vue'
import { openURL } from 'quasar'

const sopcoolingON = [
  {

    nama: "1. PERSIAPKAN 4-WAY VALVE 901 & 902",
    deskripsi: "Persiapkan 4 way valve 901 (FW 901) untuk menggunakan pompa P901 atau pompa P902 dan 4 way valve 902 (FW 902) untuk menggunakan cooling tower K901/K902 atau K903/K904."
  },
  {

    nama: "2. SWITCH P901/P902 & COOLING TOWER K901/K902 ATAU K903/K904 POSISI ON",
    deskripsi: "Persiapkan switch (saklar) untuk pompa P901 atau pompa P902 dan cooling tower K901/K902 atau K903/K904 pada posisi ON."
  },
  {

    nama: "3. OPERASIKAN POMPA P901 ATAU P902",
    deskripsi: "Operasikan pompa P901 atau pompa P902 dengan menekan switch sakelar ON, 5 menit sebelum tunnel ON."
  },
  {

    nama: "4. OERASIKAN COOLING TOWER K901/K902 ATAU K903/K904",
    deskripsi: "Operasikan cooling tower K901/K902 atau K903/K904 dengan menekan switch ON setelah pompa beroperasi normal pada tekanan 2,6 - 2,7 bar."
  },
  {

    nama: "5. GUNAKAN FAN COOLING TOWER UNTUK KEBUTUHAN SUHU TUNNEL",
    deskripsi: "Untuk mencapai temperatur tunnel yang dibutuhkan dapat menggunakan fan cooling towe yang tersedia dengan putaran low atau high yang terdapat dipanel ruang pengoperasian dengan menekan switch Low atau High."
  },
]


export default defineComponent({
  name: 'HalamanSOPCoolingON',

  setup() {
    return {
      sopcoolingON,
    }
  }
})