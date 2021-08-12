import { defineComponent } from 'vue'
import { openURL } from 'quasar'

const sopcompressON = [
  {

    nama: "1. PUTAR KUNCI POWER SUPPLY",
    deskripsi: "Putar kunci power supply pada panel compresser air system."
  },
  {

    nama: "2. PUTAR KUNCI POWER SUPPLY",
    deskripsi: "Tekan tombol RESET untuk mengkondisikan siap dioperasikan."
  },
  {

    nama: "3. POSISIKAN MCB KONDISI ON",
    deskripsi: "Pastikan switch dalam posisi siap dengan memposisikan semua MCB pada posisi ON."
  },
  {

    nama: "4. TEKAN TOMBOL AUX ON",
    deskripsi: "Aktifkan Auxiliary dengan menekan tombol AUX ON."
  },
  {

    nama: "5. TEKAN TOMBOL P.903 ATAU P.904 ON.",
    deskripsi: "Aktifkan pompa dengan menekan tombol ON P.903 atau P.904 pada panel pompa."
  },
  {

    nama: "6. TEKAN TOMBOL RESET",
    deskripsi: "Tekan tombol reset sebelum mengaktifkan compressor."
  },
  {

    nama: "7. TEKAN TOMBOL COMP. ON UNTUK COMP. CENTAC",
    deskripsi: "Aktifkan compressor Centac dengan menekan tombol COMP. ON."
  },
  {

    nama: "8. TUNGGU SEKITAR 2 MENIT, LALU TEKAN TOMBOL LOAD COMP. CENTAC",
    deskripsi: "Pastikan untuk memberi jeda waktu sekitar 2 menit sebelum menekan tombol LOAD pada compressor Centac."
  },
  {

    nama: "9. TEKAN TOMBOL COMP. ON UNTUK COMP. TORAK",
    deskripsi: "Setelah tekanan mencapai 8 bar, tekan tombol COMP. ON untuk compressor Torak."
  },
  {

    nama: "10. TUNGGU LAMPU TIMER MENYALA NORMAL",
    deskripsi: "Sebelum melanjutkan ke langkah berikutnya, tunggu dan pastikan lampu pada timer hingga menyala normal."
  },
  {

    nama: "11. PUTAR SWITCH COMP. TORAK PADA POSISI LOAD",
    deskripsi: "Kondisikan posisi switch dengan memutar switch ke posisi LOAD pada compressor Torak."
  },
  {

    nama: "12. TEKAN TOMBOL 50% LOAD ATAU 100% LOAD",
    deskripsi: "Tekan tombol pada posisi 50% load atau 100% load"
  },
  {

    nama: "13. PERHATIKAN KERJA DRYER",
    deskripsi: "Perhatikan kerja dyrer untuk penggantian dari tabung A ke tabung B sesuai dengan timer setting"
  }
]


export default defineComponent({
  name: 'HalamanSOPCompressorON',

  setup() {
    return {
      sopcompressON,
    }
  }
})