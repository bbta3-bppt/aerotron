from rest_framework import generics

from pengujian.models.pengujian import Pengujian
from pengujian.serializers.pengujian import PengujianSerializers


class DaftarPengujian(generics.ListAPIView):
    serializer_class = PengujianSerializers
    queryset = Pengujian.objects.all()
