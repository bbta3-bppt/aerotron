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
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiVIENTA%2FPerbaikan%20Silicon%20Sheet.jpeg?alt=media&token=4671a9ca-1c89-45f5-b912-d0e5082acb11",
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
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiVIENTA%2FPerbaikan%20Shaker_04082021.jpeg?alt=media&token=fa48baac-5867-4768-8ebd-ec54390f8a2f",
    rinciankegiatan: "PERBAIKAN SHAKER",
    tanggal: "4 Agustus 2021 ",
    pelaksana: "Pelaksana: Dimas S., Farhan Ali M., Sahran, R. Wibawa P.",
    keterangan: "Status: Selesai pada 5 Agustus"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiVIENTA%2FPengecekan%20board%20blower%20inverter.jpeg?alt=media&token=2ae3881c-d09c-4632-9f78-b3b98a8fed51",
    rinciankegiatan: "PENGECEKAN INVERTER CIRCUIT BOARD",
    tanggal: "10 Agustus 2021 ",
    pelaksana: "Pelaksana: M. Very N., Farhan Ali M., Angga.",
    keterangan: "Status: Ditemukan kerusakan komponen"
  },

]


export default defineComponent({
  name: 'HalamanDokumentasiVIENTA',
  setup() {
    return {
      dokumentasiVIENTA
    }
  }
  
})