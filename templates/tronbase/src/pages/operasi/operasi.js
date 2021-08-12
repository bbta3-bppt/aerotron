import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HalamanOperasi',

  setup() {
    const standaroperasi = [
      {
        gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2FFan%20Drive_local.jpeg?alt=media&token=761c1d94-26fd-4fa2-8e70-92c8821ecb78",
        nama: "FAN DRIVE SYSTEM (LOCAL)",
        kegiatanON: "/operasi/sopfandrivepowerhouseON",
        kegiatanOFF: "/operasi/sopfandrivepowerhouseOFF"
      },
      {
        gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2Ffandrive%2Ffandrivecontrol.jpeg?alt=media&token=8809b913-7b4d-445f-8cdf-7f06927f5997",
        nama: "FAN DRIVE SYSTEM (REMOTE)",
        kegiatanON: "/operasi/sopfandriveremoteON",
        kegiatanOFF: "/operasi/sopfandriveremoteOFF"
      },
      {
        gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2FCompressed%20Air%20System%20Panel.jpeg?alt=media&token=63f5bb80-247e-4a60-a42c-b3e0055da3ec",
        nama: "COMPRESSED AIR SYSTEM",
        kegiatanON: "/operasi/sopcompressorON",
        kegiatanOFF:"/operasi/sopcompressorOFF"
      },
      {
        gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Operasi%2FCooling%20Tower%20Panel.jpeg?alt=media&token=e042cdf2-aaf1-4fba-b892-f8fb134a70f2",
        nama: "COOLING SYSTEM (LOCAL CONTROL)",
        kegiatanON: "/operasi/sopcoolingON",
        kegiatanOFF:"/operasi/sopcoolingOFF"
      }
    ]

    return {
      standaroperasi,
    }
  }
})
