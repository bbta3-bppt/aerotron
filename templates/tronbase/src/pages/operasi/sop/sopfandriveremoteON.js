import { defineComponent } from 'vue'
import { openURL } from 'quasar'

const sopfandriveremoteON = [
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fcooling%20off.jpg?alt=media&token=4f04a8e1-3aad-4b29-8497-9db93ce84d20",
    nama: "1. PASTIKAN COOLING SYSTEM READY",
    deskripsi: "Tekan tombol cooling system ON pada desk control (control room)"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fdrive%20on.jpg?alt=media&token=f00afce5-367d-49c1-bc89-d2c1339be620",
    nama: "2. PASTIKAN REMOTE SYSTEM DALAM KONDISI READY",
    deskripsi: "Lampu indikator menyala berwarna hijau"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fselektor.jpg?alt=media&token=9a73c027-a192-4487-9e70-70259c2f2f49",
    nama: "3. PUTAR SELEKTOR POSISI REMOTE CLOCKWISE",
    deskripsi: "Lampu indikator menyala berwarna hijau"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fswitch%20on.jpg?alt=media&token=84df7ffc-07e3-46a1-8056-fbf8b2f004eb",
    nama: "4. TEKAN TOMBOL SWITCH ON",
    deskripsi: "Tekan tombol switch on berwarna hijau"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fauto.jpeg?alt=media&token=0caec96e-7bbd-40fd-a18f-0df6e596eda7",
    nama: "5. ACB LCL FILTER & DC DRIVE ON (OTOMATIS)",
    deskripsi: "ACB LCL Filter dan DC Drive akan menyala secara bertahap dengan indikator ACB berwarna hijau semua."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Ffault%20on.jpg?alt=media&token=63190c50-4f09-4087-97f2-cdd743820c1c",
    nama: "6. (JUST IN CASE) FAULT",
    deskripsi: "Jika ada gangguan (terjadi trip) maka Fault Indicator akan menyala (hijau). Segera laporkan ke Sub. Bidang TROP."
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Fcooling%20fan.jpeg?alt=media&token=652b8315-6f85-4be7-9f30-6b7edd364feb",
    nama: "7. TEKAN TOMBOL COOLING FAN START (AUX ON)",
    deskripsi: "Tekan tombol AUX ON pada control desk (control room)"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Ffandrivecontrol.jpeg?alt=media&token=8809b913-7b4d-445f-8cdf-7f06927f5997",
    nama: "8. TEKAN TOMBOL DRIVE START",
    deskripsi: "Tekan tombol Main Drive ON pada control desk (control room)"
  }
]


export default defineComponent({
  name: 'HalamanSOPFanDriveRemoteON',

  setup() {
    return {
      sopfandriveremoteON,
    }
  }
})