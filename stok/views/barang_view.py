from django.shortcuts import get_object_or_404
from rest_framework import generics

from stok.models.barang import Barang
from stok.models.kategori import Kategori
from stok.serializers.barang_serializer import BarangSerializer


class BarangView(generics.ListCreateAPIView):
    serializer_class = BarangSerializer
    queryset = Barang.objects.all()

    def get_queryset(self):
        nama_kategori = self.request.query_params.get("kategori", None)
        cari_barang = self.request.query_params.get("cari", None)

        if nama_kategori:
            seleksi_barang = get_object_or_404(Kategori, nama__contains=nama_kategori)
            barang = Barang.objects.filter(kategori=seleksi_barang.pk)

        elif cari_barang:
            barang = Barang.objects.filter(nama__search=cari_barang)

        elif nama_kategori and cari_barang:
            barang = Barang.objects\
                .filter(kategori__barang__nama__search=nama_kategori)\
                .filter(nama__search=cari_barang)

        else:
            barang = Barang.objects.all()

        return barang
