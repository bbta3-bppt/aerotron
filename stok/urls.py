from django.urls import path

from stok.views.barang_view import BarangView

urlpatterns = [
    path('api/barang/', BarangView.as_view(), name='daftar_barang'),
]
