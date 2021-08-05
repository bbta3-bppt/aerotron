from django.contrib import admin

from stok.models.barang import Barang
from stok.models.kategori import Kategori
from stok.models.lokasi import Lokasi
from stok.models.pinjam import Pinjam

admin.site.register(Barang)
admin.site.register(Kategori)
admin.site.register(Lokasi)
admin.site.register(Pinjam)
