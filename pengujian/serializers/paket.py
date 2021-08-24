from rest_framework import serializers

from pengujian.models.paket import PaketPengujian


class PaketSerializers(serializers.ModelSerializer):
    nama_pengujian = serializers.SerializerMethodField()

    class Meta:
        model = PaketPengujian
        fields = "__all__"

    @staticmethod
    def get_nama_pengujian(obj):
        return obj.pengujian.nama
