from django.contrib import admin

from pengujian.models.paket import PaketPengujian
from pengujian.models.pengujian import Pengujian

admin.site.register(Pengujian)
admin.site.register(PaketPengujian)
