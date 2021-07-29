import { defineComponent } from 'vue'


const dokumentasiILST = [
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
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FPerawatan%20Air%20Storage_11%20Januari%202021.jpeg?alt=media&token=05528237-c69b-4534-9ffa-89bcea038ab1",
    rinciankegiatan: "PERAWATAN AIR STORAGE",
    tanggal: "13 Januari 2021 ",
    pelaksana: "Pelaksana: PPNPN",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FPerawatan%20Screen_1.jpg?alt=media&token=190df3e4-28aa-49e7-a0b1-0898d5bdb8bb",
    rinciankegiatan: "PERAWATAN SCREEN TUNNEL",
    tanggal: "13 Januari 2021 ",
    pelaksana: "Pelaksana: Arsal, Tabrani, PPNPN",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FPerawatan%20External%20Balance.jpg?alt=media&token=892dda9f-3481-4412-9a01-36009d238f9d",
    rinciankegiatan: "PERSIAPAN EXTERNAL BALANCE",
    tanggal: "13 Januari 2021 ",
    pelaksana: "Pelaksana: Arsal, Tabrani",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FPerawatan%20Filter%20dan%20Drive_13%20Januari%202021.jpeg?alt=media&token=73c4f39f-b97e-497d-ab4c-7e7bf1ab88f9",
    rinciankegiatan: "PERAWATAN FILTER & DRIVE",
    tanggal: "13 Januari 2021 ",
    pelaksana: "Pelaksana: Asep D. H., Susanto",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FPengurasan%20Kolam%20Cooling%20Tower.jpeg?alt=media&token=faede612-9f2b-424f-9fe0-14c3e7117817",
    rinciankegiatan: "PERAWATAN KOLAM & BASIN",
    tanggal: "14 Januari 2021 ",
    pelaksana: "Pelaksana: Arsal, Tabrani, M. Very N., PPNPN",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FPerawatan%20Fan%20House.jpeg?alt=media&token=281386a3-f020-4cb0-b5da-02f63d1de560",
    rinciankegiatan: "PERAWATAN FAN HOUSE",
    tanggal: "14 Januari 2021 ",
    pelaksana: "Pelaksana: Arsal dan PPNPN",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FMonitoring%20Power%20Quality_25%20Januari%202021.jpeg?alt=media&token=0c87c247-e58d-4c1d-8456-095ff4666a51",
    rinciankegiatan: "MONITORING POWER QUALITY",
    tanggal: "25 Januari 2021 ",
    pelaksana: "M. Very N. Dwie V. D.",
    keterangan: "Status: OK"
  },
  {
  gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FPerawatan%20External%20Balance_1.jpeg?alt=media&token=44e38ecf-9e87-4614-bb0a-4d6fe8235959",
    rinciankegiatan: "PERAWATAN EXTERNAL BALANCE",
    tanggal: "1 Februari 2021 ",
    pelaksana: "Pelaksana: Arsal, Tabrani",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FUji%20Capacitor%20Bank_19%20Februari%202021.jpeg?alt=media&token=0df20e82-d95b-4950-89d0-61a6061d99ed",
    rinciankegiatan: "UJI CAPACITOR BANK",
    tanggal: "19 Februari 2021 ",
    pelaksana: "Pelaksana: Arsal, Asep D. H., M. Very N., Dwie V.D.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FTroubleshooting%20compressor_1.jpg?alt=media&token=3a8d0ed2-ccf8-4d5c-a708-c1e0935ba445",
    rinciankegiatan: "TROUBLESHOOTING COMPRESSOR",
    tanggal: "24 Februari 2021 ",
    pelaksana: "Pelaksana: Arsal, Asep D. H., Tabrani, M. Very N.",
    keterangan: "Status: Perlu tindak lanjut"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FPemasangan%20tambahan%20CT_1%20Maret%202021.jpeg?alt=media&token=22f16110-5f24-400b-9e5d-857355396b40",
    rinciankegiatan: "PEMASANGAN CT FASA S-T",
    tanggal: "1 Maret 2021 ",
    pelaksana: "Pelaksana: Asep D.H.",
    keterangan: "Status: Perlu setting pembacaan pada Capacitor Bank"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FPerawatan%20Pencahayaan%20DADP_5%20April%202021.jpg?alt=media&token=3bddd887-bf27-4ce3-b395-1b1699c3e029",
    rinciankegiatan: "PERBAIKAN PENCAHAYAAN R. DA/DP",
    tanggal: "5 April 2021 ",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FSetting%20Pembacaan%20CT_19%20April%202021.jpeg?alt=media&token=76e274b5-2738-4647-b73e-221ab7c34466",
    rinciankegiatan: "SETTING PEMBACAAN CT",
    tanggal: "19 April 2021 ",
    pelaksana: "Pelaksana: Asep D.H., M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  { 
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FMonitoring%20Power%20Quality_19%20Juni%202021.jpeg?alt=media&token=36b73102-9591-4b77-bd3b-eef8fff89604",
    rinciankegiatan: "MONITORING POWER QUALITY",
    tanggal: "19 JUNI 2021 ",
    pelaksana: "Pelaksana: Arsal, Asep D.H., M. Very N.",
    keterangan: "Status: OK"
  }

]


export default defineComponent({
  name: 'HalamanDokumentasiILST',
  setup() {
    return {
      dokumentasiILST
    }
  }
  
})