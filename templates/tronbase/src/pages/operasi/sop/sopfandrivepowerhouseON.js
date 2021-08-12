import { defineComponent } from 'vue'
import { openURL } from 'quasar'

const sopfandrivephON = [
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fcb%20incoming%20close.jpeg?alt=media&token=80339488-2eb8-414d-b909-1aa7e2bd8aeb",
    nama: "1. PASTIKAN TEGANGAN INPUT (PLN) SIAP",
    deskripsi: "Lihat indikator CB switch berwarna merah (close) atau pembacaan nilai tegangan pada display pengukuran sekitar 20 kV."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2FSG%20Trafo%201%202.jpeg?alt=media&token=61f2d068-8a92-451a-ba7f-33ced24056b4",
    nama: "2. HIDUPKAN OUTGOING TRAFO I & II",
    deskripsi: "Tarik tuas CB ke depan kemudian putar ke kanan pada CB Control Switch panel yang tersedia. Pastikan lampu indikator merah telah menyala (close)."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Facb%20lcl%20slave.jpeg?alt=media&token=97fbdf90-b880-46ef-a246-dc721c07be24",
    nama: "3. HIDUPKAN ACB LCL SLAVE",
    deskripsi: "Tekan tombol Push ON (pastikan lampu indikator berwarna kuning/sudah dipompa)."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Facb%20lcl%20master.jpeg?alt=media&token=dd6f867d-bc10-4e7d-b3c8-257a7fa24ca5",
    nama: "4. HIDUPKAN ACB LCL MASTER",
    deskripsi: "Tekan tombol Push ON (pastikan lampu indikator berwarna kuning/sudah dipompa)."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Facb%20drive%20slave.jpeg?alt=media&token=d8bb651f-9009-4149-881c-cb8fcae39e08",
    nama: "5. HIDUPKAN ACB DRIVE SLAVE",
    deskripsi: "Tekan tombol Push ON (pastikan lampu indikator berwarna kuning/sudah dipompa)."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Facb%20drive%20master.jpeg?alt=media&token=df721167-5dcc-434d-879e-f0ea3ffeef19",
    nama: "6. HIDUPKAN ACB DRIVE MASTER",
    deskripsi: "Tekan tombol Push ON (pastikan lampu indikator berwarna kuning/sudah dipompa)."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fhmi.jpeg?alt=media&token=a085eaab-118e-4069-9066-ed371541c27c",
    nama: "7. TEKAN TOMBOL RESET PADA LAYAR HMI",
    deskripsi: "Tekan tombol reset pada layar HMI sebelum fan drive system mulai beroperasi"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fcooling%20fan.jpeg?alt=media&token=652b8315-6f85-4be7-9f30-6b7edd364feb",
    nama: "8. TEKAN TOMBOL COOLING FAN START (AUX ON)",
    deskripsi: "Tekan tombol AUX ON pada control desk (control room)"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Ffandrivecontrol.jpeg?alt=media&token=8809b913-7b4d-445f-8cdf-7f06927f5997",
    nama: "9. TEKAN TOMBOL DRIVE START",
    deskripsi: "Tekan tombol Main Drive ON pada control desk (control room)"
  }
]


export default defineComponent({
  name: 'HalamanSOPFanDrivePowerHouseON',

  setup() {
    return {
      sopfandrivephON,
    }
  }
})