from rest_framework import serializers

from pengujian.models.pengujian import Pengujian


class PengujianSerializers(serializers.ModelSerializer):
    nama_fasilitas = serializers.SerializerMethodField()
    nama_pemilik = serializers.SerializerMethodField()

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
