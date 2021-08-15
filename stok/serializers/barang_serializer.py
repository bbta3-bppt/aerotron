from rest_framework import serializers

from stok.models.barang import Barang
from stok.models.kategori import Kategori


class BarangSerializer(serializers.ModelSerializer):
    nama_kategori = serializers.SerializerMethodField()
    lokasi_lokasi = serializers.SerializerMethodField()

    class Meta:
        model = Barang
        fields = "__all__"

    @staticmethod
    def get_nama_kategori(obj):
        kategori = Kategori.objects.get(pk=obj.kategori.pk)

        return kategori.nama

    @staticmethod
    def get_lokasi_lokasi(obj):
        return obj.lokasi.all().values()
