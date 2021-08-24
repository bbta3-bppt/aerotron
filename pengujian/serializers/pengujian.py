from rest_framework import serializers

from pengujian.models.pengujian import Pengujian


class PengujianSerializers(serializers.ModelSerializer):
    nama_fasilitas = serializers.SerializerMethodField()

    class Meta:
        model = Pengujian
        fields = "__all__"

    @staticmethod
    def get_nama_fasilitas(obj):
        return obj.fasilitas.nama
