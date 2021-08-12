import { defineComponent } from 'vue'
import { openURL } from 'quasar'

const sopfandrivephOFF = [
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fdrive%20switch.jpeg?alt=media&token=969a5253-bbeb-4f31-8305-9adcf99e1254",
    nama: "1. TEKAN TOMBOL DRIVE OFF",
    deskripsi: "Tekan tombol Main Drive OFF pada control desk (control room)"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fcooling%20fan.jpeg?alt=media&token=652b8315-6f85-4be7-9f30-6b7edd364feb",
    nama: "2. TEKAN TOMBOL COOLING OFF",
    deskripsi: "Tekan tombol AUX OFF pada control desk (control room)"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Facb%20drive%20master.jpeg?alt=media&token=df721167-5dcc-434d-879e-f0ea3ffeef19",
    nama: "3. MATIKAN ACB DRIVE MASTER",
    deskripsi: "Tekan tombol Push OFF (pastikan label indikator berwarna putih/sudah dipompa)."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Facb%20drive%20slave.jpeg?alt=media&token=d8bb651f-9009-4149-881c-cb8fcae39e08",
    nama: "4. MATIKAN ACB DRIVE SLAVE",
    deskripsi: "Tekan tombol Push OFF (pastikan label indikator berwarna putih/sudah dipompa)."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Facb%20lcl%20master.jpeg?alt=media&token=dd6f867d-bc10-4e7d-b3c8-257a7fa24ca5",
    nama: "5. MATIKAN ACB LCL MASTER",
    deskripsi: "Tekan tombol Push OFF (pastikan label indikator berwarna putih/sudah dipompa)."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Facb%20lcl%20slave.jpeg?alt=media&token=97fbdf90-b880-46ef-a246-dc721c07be24",
    nama: "6. MATIKAN ACB LCL SLAVE",
    deskripsi: "Tekan tombol Push OFF (pastikan label indikator berwarna putih/sudah dipompa)."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2FSG%20Trafo%201%202.jpeg?alt=media&token=61f2d068-8a92-451a-ba7f-33ced24056b4",
    nama: "7. MATIKAN OUTGOING TRAFO I & II",
    deskripsi: "Tarik tuas CB ke depan kemudian putar ke kIRI pada CB Control Switch panel yang tersedia. Pastikan lampu indikator hijau telah menyala (open)."
  },


]


export default defineComponent({
  name: 'HalamanSOPFanDrivePowerHouseOFF',

  setup() {
    return {
      sopfandrivephOFF,
    }
  }
})