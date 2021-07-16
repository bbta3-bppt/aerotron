from rest_framework import serializers

from perawatan.models.keahlian import Keahlian


class KeahlianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keahlian
        fields = '__all__'
