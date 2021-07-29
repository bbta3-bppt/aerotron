import { defineComponent } from 'vue'


const dokumentasiVIENTA = [
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiVIENTA%2FPerawatan%20Cooling%20Tower_1.jpeg?alt=media&token=9c4deb4d-0bf7-4bb6-8a1e-d4bfa51ed8e0",
    rinciankegiatan: "PERAWATAN COOLING TOWER",
    tanggal: "18 Januari 2021 ",
    pelaksana: "Pelaksana: Arsal",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiVIENTA%2FMonitoring%20Shaker_1.jpeg?alt=media&token=dbdfcd55-8d2c-4744-9861-424bc5681c2b",
    rinciankegiatan: "WARMING UP SHAKER ENGINE",
    tanggal: "14 April 2021 ",
    pelaksana: "Pelaksana: Dimas S., Farhan A.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiVIENTA%2FPerbaikan%20Pencahayaan_1.jpeg?alt=media&token=45c9b600-b054-466a-b4cb-84149874224d",
    rinciankegiatan: "MONITORING PENCAHAYAAN",
    tanggal: "16 April 2021",
    pelaksana: "Pelaksana: Farhan A.",
    keterangan: "Status: Perlu pengecekan kelistrikan"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiAREAS%2FObservasi%20Cable%20Routing%20ARA.jpeg?alt=media&token=a4b7ca59-aca3-4a21-9d9d-e0a80850d993",
    rinciankegiatan: "PENGGANTIAN SILICON SHEET CHAMBER",
    tanggal: "27 April 2021 ",
    pelaksana: "Pelaksana: Dimas S., Farhan A.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiVIENTA%2FMonitoring%20Climate%20Chamber_1.jpeg?alt=media&token=b6510014-64b0-4a8e-9d1b-7cc049336739",
    rinciankegiatan: "LOW TEMPERATURE TEST",
    tanggal: "25 Juni 2021 ",
    pelaksana: "Pelaksana: Dimas S.",
    keterangan: "Status: OK"
  }
]


export default defineComponent({
  name: 'HalamanDokumentasiVIENTA',
  setup() {
    return {
      dokumentasiVIENTA
    }
  }
  
})