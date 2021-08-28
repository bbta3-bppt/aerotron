from django.utils import timezone
from rest_framework import serializers

from pengujian.models.pengujian import Pengujian


class PengujianSerializers(serializers.ModelSerializer):
    nama_fasilitas = serializers.SerializerMethodField()
    nama_pemilik = serializers.SerializerMethodField()
    persentase_durasi = serializers.SerializerMethodField()

    class Meta:
        model = Pengujian
        fields = "__all__"

    @staticmethod
    def get_nama_fasilitas(obj):
        return obj.fasilitas.nama

    @staticmethod
    def get_nama_pemilik(obj):
        if obj.pemilik.first_name or obj.pemilik.last_name:
            return f"{obj.pemilik.first_name} {obj.pemilik.last_name}"

        return obj.pemilik.username

    @staticmethod
    def get_persentase_durasi(obj):
        curr = timezone.now()
        berakhir = obj.berakhir

        if curr < berakhir:
            return 100 * (1 - (berakhir - curr) / (berakhir - obj.dibuat))

        else:
            return 100
