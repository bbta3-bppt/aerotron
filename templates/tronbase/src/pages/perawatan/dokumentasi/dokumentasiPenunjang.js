import { defineComponent } from 'vue'


const dokumentasiPenunjang = [
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FPerawatan%20Dry%20Trafo%20-%2011%20Januari%202021_1.jpeg?alt=media&token=52a4634a-a741-472e-a3b9-a6c56caf046a",
    rinciankegiatan: "PERAWATAN DRY TRANSFORMER",
    tanggal: "11 Januari 2021 ",
    pelaksana: "Pelaksana: Asep Dadan H., M. Very Nugroho dan Dwie Vania D.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FCommissioning%20Remote%20Drive.jpeg?alt=media&token=93c01cb5-94e3-430f-9a88-e0e346b8a6b3",
    rinciankegiatan: "COMMISSIONING REMOTE DRIVE",
    tanggal: "11 Januari 2021 ",
    pelaksana: "Pelaksana: Asep D. H., Arsal, M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FCommissioning%20Capacitor%20Bank.jpg?alt=media&token=62803f42-fd93-43a6-b5ad-c7d349165262",
    rinciankegiatan: "COMMISSIONING CAPACITOR BANK",
    tanggal: "11 Januari 2021 ",
    pelaksana: "Pelaksana: Asep D. H., Arsal, M. Very N., Dwie V. D.",
    keterangan: "Status: Perlu penyesuaian target PF"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FMonitoring%20Power%20Quality_25%20Januari%202021.jpeg?alt=media&token=0c87c247-e58d-4c1d-8456-095ff4666a51",
    rinciankegiatan: "MONITORING POWER QUALITY",
    tanggal: "25 Januari 2021 ",
    pelaksana: "M. Very N. Dwie V. D.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiPenunjang%2FPemeliharaan%20penerangan%20gedung.jpeg?alt=media&token=7dc50112-6f16-44ce-99f3-8df0a5943b03",
    rinciankegiatan: "PERBAIKAN PENCAHAYAAN GEDUNG 240",
    tanggal: "2 FEBRUARI 2021 ",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiPenunjang%2FPencahayaan%20Luar%20Gedung_2%20Feb%202021.jpg?alt=media&token=b58c9eb3-e837-4493-8b22-93555228096f",
    rinciankegiatan: "PERBAIKAN PENCAHAYAAN LUAR GEDUNG",
    tanggal: "2 FEBRUARI 2021 ",
    pelaksana: "Pelaksana: Asep D.H., M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiPenunjang%2FPenerangan%20Gedung_030321.jpeg?alt=media&token=baafecc2-0dd4-46b5-a3cc-b9133ad2b5b7",
    rinciankegiatan: "PERBAIKAN PENCAHAYAAN G. FEROSTAL",
    tanggal: "3 MARET 2021 ",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiPenunjang%2FPenerangan%20Gedung_190321.jpeg?alt=media&token=c4e13a86-c924-4cff-94ed-3562df4d5690",
    rinciankegiatan: "PERBAIKAN PENCAHAYAAN R. RAPAT",
    tanggal: "19 MARET 2021 ",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FPerawatan%20Pencahayaan%20DADP_5%20April%202021.jpg?alt=media&token=3bddd887-bf27-4ce3-b395-1b1699c3e029",
    rinciankegiatan: "PERBAIKAN PENCAHAYAAN R. DA/DP",
    tanggal: "5 April 2021 ",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiPenunjang%2FPemeliharaan%20penerangan%20gedung%20ferostal.jpeg?alt=media&token=b09ccccf-0f14-46c1-8931-f46ba5c00fe9",
    rinciankegiatan: "PERBAIKAN PENCAHAYAAN G. FEROSTAL",
    tanggal: "2 Juni 2021 ",
    pelaksana: "Pelaksana: M. Very N.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiPenunjang%2FPerbaikan%20Instalasi%20Listrik%20Bangunan_1.jpeg?alt=media&token=afcdce64-1924-4d21-ae53-738056fe44f8",
    rinciankegiatan: "PERBAIKAN STOP KONTAK R. SERVER",
    tanggal: "15 Juni 2021 ",
    pelaksana: "Pelaksana: M. Very N.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FMonitoring%20Power%20Quality_19%20Juni%202021.jpeg?alt=media&token=36b73102-9591-4b77-bd3b-eef8fff89604",
    rinciankegiatan: "MONITORING POWER QUALITY",
    tanggal: "19 JUNI 2021 ",
    pelaksana: "Pelaksana: Arsal, Asep D.H., M. Very N.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiPenunjang%2FPenerangan%20Seksi%20Uji%20AREAS_27072021.jpeg?alt=media&token=af64e9d4-8e06-4d89-b861-bfa98d5cf6c1",
    rinciankegiatan: "PENERANGAN SEKSI UJI AREAS",
    tanggal: "27 JULI 2021 ",
    pelaksana: "Pelaksana: Arsal",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiPenunjang%2FPerbaikan%20pencahayaan%20tempat%20wudhu_03082021.jpeg?alt=media&token=3ab28455-6830-4f70-abb7-be485396ff7e",
    rinciankegiatan: "PERBAIKAN PENCAHAYAAN TEMPAT WUDHU",
    tanggal: "3 AGUSTUS 2021 ",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiPenunjang%2FPenggantian%20pencahayaan%20R.%20TROP_03082021.jpeg?alt=media&token=d562b6bd-9d81-44f2-be85-f47fa165f689",
    rinciankegiatan: "PERBAIKAN PENCAHAYAAN R. TROP",
    tanggal: "3 AGUSTUS 2021 ",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiPenunjang%2FPerbaikan%20saklar%20pencahayaan%20Ruang%20Ka.%20Balai.jpeg?alt=media&token=72978659-37ba-4151-8969-10d2ca3c0e23",
    rinciankegiatan: "PERBAIKAN SWITCH PENCAHAYAAN R. KEPALA BALAI",
    tanggal: "9 AGUSTUS 2021 ",
    pelaksana: "Pelaksana: Franky S. P., M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  }

]


export default defineComponent({
  name: 'HalamanDokumentasiPenunjang',
  setup() {
    return {
      dokumentasiPenunjang
    }
  }
  
})