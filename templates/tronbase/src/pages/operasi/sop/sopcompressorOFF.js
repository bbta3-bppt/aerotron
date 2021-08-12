import { defineComponent } from 'vue'
import { openURL } from 'quasar'

const sopcompressOFF = [
  {

    nama: "1. PUTAR SWITCH PADA COMP. TORAK KE POSISI UNLOAD",
    deskripsi: "Posisikan switch pada compressor Torak dengan memutarnya ke posisi unload."
  },
  {

    nama: "2. TEKAN TOMBOL COMP. OFF UNTUK COMP. TORAK",
    deskripsi: "Nonaktifkan compressor Torak dengan menekan tombol comp. off untuk comp. Torak."
  },
  {

    nama: "3. TEKAN TOMBOL UNLOAD UNTUK COMP. CENTAC",
    deskripsi: "Tekan tombol unload untuk compressor Centac sebelum menonaktifkan compressor Centac."
  },
  {

    nama: "4. TEKAN TOMBOL COMP. OFF UNTUK COMP. CENTAC",
    deskripsi: "Nonaktifkan compressor Centac dengan menekan tombol comp. off untuk comp. Centac."
  },
  {

    nama: "5. TUNGGU SEKITAR 20 MENIT HINGGA POWER COMP. CENTAC OFF",
    deskripsi: "Pastikan tunggu sekitar 20 menit untuk power compressore Centac nonaktif"
  },
  {

    nama: "6. TEKAN TOMBOL OFF P.903 ATAU P.904",
    deskripsi: "Nonaktifkan pompa dengan menekan tombol off pompa P.903 atau P.904."
  },
  {

    nama: "7. TEKAN TOMBOL ACCEPT JIKA TERDENGAR SIRINE",
    deskripsi: "Apabila sirine terdengar berbunyi maka tekan tombol ACCEPT."
  },
  {

    nama: "8. TEKAN TOMBOL AUX OFF",
    deskripsi: "Nonaktifkan Auxiliary dengan menekan tombol AUX off."
  },
  {

    nama: "9. POSISIKAN MCB DRYER OFF",
    deskripsi: "Kondisikan posisi MCB untuk Dryer ke posisi off."
  },
  {

    nama: "10. PUTAR KUNCI POWER SUPPLY KE POSISI OFF",
    deskripsi: "Nonaktifkan koneksi power supply dengan memutar kunci power supply ke posisi off."
  },
]


export default defineComponent({
  name: 'HalamanSOPCompressorOFF',

  setup() {
    return {
      sopcompressOFF,
    }
  }
})