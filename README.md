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
DEBUG=dev                    #rest-api
SECRET_KEY=SALTKEY           #rest-api
DB_USERNAME=dbuser           #rest-api
DB_PASSWORD=dbpwd            #rest-api
DB_NAME=dbname               #rest-api
DB_HOST=localhost            #rest-api
DB_PORT=5432                 #rest-api
PAGE_SIZE=10                 #rest-api;ui
REST_HOST=localhost          #ui
```

Pengembangan aplikasi ini menggunakan database PostgreSQL sehingga membutuhkan _driver_ yang sesuai.
Cara cepat yang digunakan adalah dengan memasang _python package_ melalui instruksi
```pip install psycopg2-binary```. _Package_ ini memiliki kompatibilitas dengan Windows, Linux dan MacOS.
