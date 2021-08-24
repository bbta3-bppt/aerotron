from django.shortcuts import get_object_or_404
from rest_framework import generics

from pengujian.models.paket import PaketPengujian
from pengujian.models.pengujian import Pengujian
from pengujian.serializers.paket import PaketSerializers


class DaftarPaketPengujian(generics.ListAPIView):
    serializer_class = PaketSerializers
    queryset = PaketPengujian.objects.all()

    def get_queryset(self):
        pengujian = get_object_or_404(Pengujian, pk=self.kwargs.get("pengujian_pk"))

        return PaketPengujian.objects.filter(pengujian=pengujian.pk)
