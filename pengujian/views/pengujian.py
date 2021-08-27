from django.shortcuts import get_object_or_404
from rest_framework import generics

from pengujian.models.pengujian import Pengujian
from pengujian.serializers.pengujian import PengujianSerializers
from perawatan.models.fasilitas import Fasilitas


class DaftarPengujian(generics.ListAPIView):
    serializer_class = PengujianSerializers
    queryset = Pengujian.objects.all()

    def get_queryset(self):
        fasilitas_pk = self.kwargs.get("fasilitas_pk")
        fasilitas_tertentu = get_object_or_404(Fasilitas, pk=fasilitas_pk)

        return Pengujian.objects.filter(fasilitas=fasilitas_tertentu)
