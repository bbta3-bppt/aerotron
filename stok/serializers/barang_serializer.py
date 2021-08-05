from rest_framework import serializers

from stok.models.barang import Barang


class BarangSerializer(serializers.ModelSerializer):
    class Meta:
        model = Barang
        fields = "__all__"
