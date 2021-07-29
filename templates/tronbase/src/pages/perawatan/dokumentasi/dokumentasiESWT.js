import { defineComponent } from 'vue'


const dokumentasiESWT = [
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiESWT%2FPemeriksaan%20Test%20Section_1.jpeg?alt=media&token=c4375749-e4d8-4180-a175-adeaacbcffe1",
    rinciankegiatan: "PEMERIKSAAN TEST SECTION",
    tanggal: "15 Januari 2021 ",
    pelaksana: "Pelaksana: Asep D. H., M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiESWT%2FPemeriksaan%20Motor_1.jpeg?alt=media&token=583b3d6f-6022-4426-8b6a-bb50234e6bb0",
    rinciankegiatan: "PEMERIKSAAN MOTOR",
    tanggal: "15 Januari 2021 ",
    pelaksana: "Pelaksana: Asep D. H, M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  }
]


export default defineComponent({
  name: 'HalamanDokumentasiAREAS',
  setup() {
    return {
      dokumentasiESWT
    }
  }
  
})