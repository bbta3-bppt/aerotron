from rest_framework import generics

from stok.models.pinjam import Pinjam
from stok.serializers.pinjam_serializer import PinjamSerializer


class AmbilPinjamView(generics.ListCreateAPIView):
    serializer_class = PinjamSerializer
    queryset = Pinjam.objects.all()

    def get_queryset(self):
        pk_barang = self.kwargs.get("pk_barang")

        return Pinjam.objects.filter(barang=pk_barang)
