# Aerotron BBTA3
Repositori pengembangan riset Aerotron BBTA3 BPPT dengan rumusan ide pembangunan media website sebagai basis penyampaian informasi status dan jadwal pelaksanaan kegiatan perawatan fasilitas pengujian pada lingkungan Balai Besar Teknologi Aerodinamika, Aeroelastika dan Aeroakustika.

Pengembangan riset Aerotron ini bertujuan:
* Informasi jadwal pelaksanaan perawatan fasilitas pengujian dan status pelaksanaan dapat diakses dengan mudah oleh pegawai di Unit Kerja sehingga dapat diketahui kondisi terkini dari fasilitas pengujian.
* Meminimalisir terlewatnya pelaksanaan perawatan fasilitas pengujian
* Tersedianya salah satu acuan informasi apabila terjadi permasalahan pada sistem fasilitas pengujian
* Untuk mendata semua  barang dan peralatan yang  berlabel BMN (Barang Milik  Negara) yang dibawah  tanggung jawab TROP
* Mengelola inventaris TROP  sehingga adanya transparansi  dan terintegrasi dengan baik
* Sebagai dasar untuk pemetaan  persediaan barang/stock  selanjutnya

Aplikasi Aerotron terdiri dari sub aplikasi yaitu:
* Jadwal perawatan
* Stok barang
* Jadwal pengujian

Persiapkan .env di root direkstori aplikasi ini berupa: (menggunakan PostgreSQL database)
```text
DEBUG=dev
SECRET_KEY=SALTKEY
DB_USERNAME=dbuser
DB_PASSWORD=dbpwd
DB_NAME=dbname
DB_HOST=localhost
DB_PORT=5432
```
