from django.urls import path

from pengujian.views.paket import DaftarPaketPengujian
from pengujian.views.pengujian import DaftarPengujian

urlpatterns = [
    path('api/daftar/', DaftarPengujian.as_view(), name='daftar_pengujian'),
    path('api/daftar/<int:pengujian_pk>', DaftarPaketPengujian.as_view(), name='paket_pengujian'),
]
