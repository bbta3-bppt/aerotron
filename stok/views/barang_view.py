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

        if nama_kategori:
            seleksi_barang = get_object_or_404(Kategori, nama__iexact=nama_kategori)

            return Barang.objects.filter(kategori=seleksi_barang.pk)

        return Barang.objects.all()
