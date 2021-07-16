from rest_framework import generics

from perawatan.models.fasilitas import Fasilitas
from perawatan.serializers.fasilitas_serializer import FasilitasSerializer


class DaftarFasilitas(generics.ListCreateAPIView):
    serializer_class = FasilitasSerializer
    queryset = Fasilitas.objects.all()
