import { defineComponent } from 'vue'


const dokumentasiAREAS = [
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiAREAS%2FUji%20Performansi%20ARA_1.jpeg?alt=media&token=fa3dc050-9c07-4c45-9cb8-680f168d30fc",
    rinciankegiatan: "UJI PERFORMANSI ARA",
    tanggal: "23 Februari 2021 ",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D., Farhan A.",
    keterangan: "Status: Ditemukan error saat pengoperasian"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiAREAS%2FObservasi%20Cable%20Routing%20ARA.jpeg?alt=media&token=a4b7ca59-aca3-4a21-9d9d-e0a80850d993",
    rinciankegiatan: "OBSERVASI CABLE ROUTING",
    tanggal: "23 Februari 2021 ",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D., Farhan A.",
    keterangan: "Status: Diperlukan perbaikan routing cable"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiAREAS%2FMonitoring%20Panel%20Kelistrikan_AREAS_1.jpeg?alt=media&token=5bade6d0-374d-404c-91e6-34e7fafe12e7",
    rinciankegiatan: "RELOKASI TERMINAL GROUNDING",
    tanggal: "22 April 2021 ",
    pelaksana: "Pelaksana: Asep Dadan H.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiAREAS%2FMonitoring%20Grounding%20System_1.jpeg?alt=media&token=3bc0b788-108f-4aa5-93d0-38463910d0f0",
    rinciankegiatan: "MONITORING INTERNAL GROUNDING",
    tanggal: "26 April 2021 ",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiAREAS%2FMonitoring%20Grounding%20System_2.jpeg?alt=media&token=de6d59fd-3c1d-45d1-b39e-df804df7f74c",
    rinciankegiatan: "MONITORING EXTERNAL GROUNDING",
    tanggal: "26 April 2021 ",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D.",
    keterangan: "Status: Nilai resistansi berada pada margin atas"
  }
]


export default defineComponent({
  name: 'HalamanDokumentasiAREAS',
  setup() {
    return {
      dokumentasiAREAS
    }
  }
  
})