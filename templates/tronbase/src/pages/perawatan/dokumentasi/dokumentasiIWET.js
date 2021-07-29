import { defineComponent } from 'vue'


const dokumentasiIWET = [
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiIWET%2FPemeriksaan%20Panel%20Listrik_1.jpeg?alt=media&token=f1429673-22db-470c-84ce-a07e5a806dc4",
    rinciankegiatan: "PEMERIKSAAN PANEL LISTRIK",
    tanggal: "23 Februari 2021 ",
    pelaksana: "Pelaksana: Asep D. H., M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiIWET%2FPemeriksaan%20Control%20IWET.jpeg?alt=media&token=4fdfb240-53d5-4d90-9247-4d65b8667f95",
    rinciankegiatan: "PEMERIKSAAN CONTROL ROOM",
    tanggal: "26 April 2021 ",
    pelaksana: "Pelaksana: Asep D. H, M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiIWET%2FWhatsApp%20Image%202021-06-30%20at%203.28.41%20PM%20(2).jpeg?alt=media&token=cc51c64e-f188-4934-bb76-b9c6b66103fa",
    rinciankegiatan: "PEMERIKSAAN BLADE",
    tanggal: "26 April 2021 ",
    pelaksana: "Pelaksana: Asep D. H, M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  }
]


export default defineComponent({
  name: 'HalamanDokumentasiAREAS',
  setup() {
    return {
      dokumentasiIWET
    }
  }
  
})