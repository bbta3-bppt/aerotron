from rest_framework import serializers

from perawatan.models.fasilitas import Fasilitas


class FasilitasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fasilitas
        fields = '__all__'
