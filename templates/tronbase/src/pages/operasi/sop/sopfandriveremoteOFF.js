import { defineComponent } from 'vue'
import { openURL } from 'quasar'

const sopfandriveremoteOFF = [
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Ffandrivecontrol.jpeg?alt=media&token=8809b913-7b4d-445f-8cdf-7f06927f5997",
    nama: "1. TEKAN TOMBOL DRIVE OFF",
    deskripsi: "Tekan tombol Main Drive OFF pada control desk (control room)"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fcooling%20fan.jpeg?alt=media&token=652b8315-6f85-4be7-9f30-6b7edd364feb",
    nama: "2. TEKAN TOMBOL COOLING FAN OFF",
    deskripsi: "Tekan tombol AUX OFF pada control desk (control room)"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fswitch%20off.jpg?alt=media&token=7c45f166-63ad-4746-bd9d-666e8938d2bf",
    nama: "3. TEKAN TOMBOL SWITCH OFF",
    deskripsi: "Tekan tombol switch off berwarna merah"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fauto.jpeg?alt=media&token=0caec96e-7bbd-40fd-a18f-0df6e596eda7",
    nama: "4. ACB LCL FILTER & DC DRIVE OFF (OTOMATIS)",
    deskripsi: "ACB LCL Filter dan DC Drive akan mati secara bertahap dengan indikator ACB berwarna merah semua."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fselector%20cw.jpg?alt=media&token=895bc2c3-4e99-4834-b1c5-3142747f4856",
    nama: "5. PUTAR SELEKTOR POSISI REMOTE COUNTERCLOCKWISE",
    deskripsi: "Lampu indikator mati"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fcooling%20off.jpg?alt=media&token=4f04a8e1-3aad-4b29-8497-9db93ce84d20",
    nama: "6. MATIKAN COOLING SYSTEM",
    deskripsi: "Tekan tombol cooling system ON pada desk control (control room)"
  }

]


export default defineComponent({
  name: 'HalamanSOPFanDriveRemoteOFF',

  setup() {
    return {
      sopfandriveremoteOFF,
    }
  }
})