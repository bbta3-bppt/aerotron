from rest_framework import generics

from stok.models.kategori import Kategori
from stok.serializers.kategori_serializer import KategoriSerializer


class GetKategoriView(generics.ListCreateAPIView):
    serializer_class = KategoriSerializer
    queryset = Kategori.objects.all()
