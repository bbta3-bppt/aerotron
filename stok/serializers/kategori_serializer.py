from rest_framework import serializers

from stok.models.kategori import Kategori


class KategoriSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kategori
        fields = "__all__"
