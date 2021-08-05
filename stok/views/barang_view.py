from rest_framework import generics

from stok.models.barang import Barang
from stok.serializers.barang_serializer import BarangSerializer


class BarangView(generics.ListCreateAPIView):
    serializer_class = BarangSerializer
    queryset = Barang.objects.all()
