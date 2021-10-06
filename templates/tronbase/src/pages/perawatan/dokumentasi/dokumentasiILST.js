import { defineComponent } from 'vue'


const dokumentasiILST = [
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
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2Ffan%20drive_982021.jpeg?alt=media&token=58f074c2-5007-4aae-b213-84b69e0b5971",
    rinciankegiatan: "MONITORING FAN DRIVE SYSTEM",
    tanggal: "9 Agustus 2021",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D. ",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2Fmonitoringpower_982021.jpeg?alt=media&token=61e3b2ca-09ec-42f9-874a-afb75560be03",
    rinciankegiatan: "MONITORING POWER SYSTEM",
    tanggal: "9 Agustus 2021",
    pelaksana: "Pelaksana: M. Very N., Dwie V. D.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F1%20sept%202021.jpeg?alt=media&token=f2465083-61f3-4c3d-95c2-224fcc4af862",
    rinciankegiatan: "DISMANTLING EXISTING AIR COOLER (CENTRIFUGAL COMPRESSOR)",
    tanggal: "1 & 3 September 2021",
    pelaksana: "Pelaksana: PT. Semaju, Tabrani, M. Very N.",
    keterangan: "Status: Air Cooler lama telah terlepas, ditemukan housing dari air cooler kotor"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2FCleaning%20Air%20Cooler%20Door_4%20sept%202021.jpeg?alt=media&token=83e1d452-0a95-486e-8836-40ac8caaeca1",
    rinciankegiatan: "PEMBERSIHAN AIR COOLER DOOR (CENTRIFUGAL COMPRESSOR)",
    tanggal: "4 September 2021",
    pelaksana: "Pelaksana: PT. Semaju, Asep D. H., Tabrani, M. Very N.",
    keterangan: "Status: Telah dibersihkan"
  },

  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2Fcleaning%20moisture%20separator.jpg?alt=media&token=b5b47c5b-2d99-4798-9a46-ce8d61822240",
    rinciankegiatan: "PEMBERSIHAN MOISTURE SEPARATOR (CENTRIFUGAL COMPRESSOR)",
    tanggal: "4 September 2021",
    pelaksana: "Pelaksana: PT. Semaju, Asep D. H., Tabrani, M. Very N.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F8%20Sept%202021_Diffuser%20Cleaning.JPG?alt=media&token=c31f487c-7826-4c96-9880-153066976257",
    rinciankegiatan: "PEMBERSIHAN DIFUSSER STAGE 4",
    tanggal: "",
    pelaksana: "Pelaksana: PT. Semaju, Asep D. H., Tabrani, M. Very N.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F9%20Sept%202021_Diffuser%20dismantling.JPG?alt=media&token=7d1e830b-e906-4664-bb4e-56a4a1144af1",
    rinciankegiatan: "DISMANTLING DIFFUSER",
    tanggal: "9 September 2021",
    pelaksana: "Pelaksana: PT. Semaju, Asep D. H., Tabrani, Dwie V. D.",
    keterangan: "Status: Diffuser stage 2 & 3 scratch"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F15%20Sept%202021_Impeller%20pinion%20stage%201%20dan%202.jpg?alt=media&token=1c0e719a-45f0-474c-bda6-86baf1bf0090",
    rinciankegiatan: "DISMANTLING IMPELLER STAGE 1,2",
    tanggal: "14-15 September 2021",
    pelaksana: "Pelaksana: PT. Semaju, Asep D. H., Tabrani, Dwie V. D.",
    keterangan: "Status: Impeller stage 2 crashed"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F22%20Sept%202021_pinion%20stage%203.jpg?alt=media&token=a675e8bf-8292-41d1-b8a1-a999452e0728",
    rinciankegiatan: "DISMANTLING IMPELLER 3",
    tanggal: "16-22 September 2021",
    pelaksana: "Pelaksana: PT. Semaju, Asep D. H., Tabrani, Dwie V. D.",
    keterangan: "Status: Impeller stage 3 heavy crashed"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F14%20Sept%202021_Empty%20Box_aerotron.jpeg?alt=media&token=15d27f34-cf21-4e36-84ea-89c2db2b0da5",
    rinciankegiatan: "Pengecekan Program Panel Empty Box",
    tanggal: "14 September 2021",
    pelaksana: "Pelaksana: Dwie V. D.",
    keterangan: "Status: Ditemukan banyak kabel hilang/dipotong"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F16%20sept_DARS.jpeg?alt=media&token=d864cd9e-4b1d-4be3-9c1a-822968d99ac8",
    rinciankegiatan: "Pengecekan PLC Central",
    tanggal: "16 September 2021",
    pelaksana: "Pelaksana: Fitra H.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F16%20sept_DA.jpeg?alt=media&token=6a2a731c-aa2b-4bad-a608-464eaa64caa7",
    rinciankegiatan: "Pengecekan DARS",
    tanggal: "16 September 2021",
    pelaksana: "Pelaksana: Fitra H.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F16%20sept_Industrial.jpeg?alt=media&token=f616b46f-ac10-47dc-aa9d-6f2a977470d4",
    rinciankegiatan: "Pengecekan Panel Industrial TS",
    tanggal: "16 September 2021",
    pelaksana: "Pelaksana: Fitra H.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F16%20sept_exbal.jpeg?alt=media&token=c34fabb3-f720-466c-92a9-9d21c48ec97e",
    rinciankegiatan: "Pengecekan Panel External Balance TS",
    tanggal: "16 September 2021",
    pelaksana: "Pelaksana: Fitra H.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F16%20sept_transversing.jpeg.jpg?alt=media&token=7812891c-22c2-492a-932b-0463d4e5ef16",
    rinciankegiatan: "Pengecekan Panel Transversing",
    tanggal: "16 September 2021",
    pelaksana: "Pelaksana: Fitra H.",
    keterangan: "Status: OK"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F16%20Sept_sting.jpeg?alt=media&token=dfc44860-4f87-4b69-856b-635a004ac9a5",
    rinciankegiatan: "Pengecekan Panel Sting Support",
    tanggal: "1 Oktober 2021",
    pelaksana: "Pelaksana: Fitra H. dan rekan-rekan",
    keterangan: "Status: Ditemukan banyak kabel hilang/dipotong"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Dokumentasi%2FdokumentasiILST%2F5%20Okt_compressor.jpeg?alt=media&token=419973c5-a430-4887-ad71-ee342c4e25c5",
    rinciankegiatan: "Pengecekan Panel Air Compressed System",
    tanggal: "5 Oktober 2021",
    pelaksana: "Pelaksana: Very dan Dwie",
    keterangan: "Status: Belum beroperasi"
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
