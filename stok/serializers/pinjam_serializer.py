from django.contrib.auth.models import User
from rest_framework import serializers

from stok.models.barang import Barang
from stok.models.pinjam import Pinjam


class PinjamSerializer(serializers.ModelSerializer):
    nama_barang = serializers.SerializerMethodField()
    nama_peminjam = serializers.SerializerMethodField()

    class Meta:
        model = Pinjam
        fields = "__all__"

    @staticmethod
    def get_nama_barang(obj):
        barang = Barang.objects.get(pk=obj.barang.pk)

        return barang.nama

    @staticmethod
    def get_nama_peminjam(obj):
        user = User.objects.get(pk=obj.dipinjam.pk)

        if user.first_name == "" or user.last_name == "":
            return user.username

        return f"{user.first_name} {user.last_name}"
