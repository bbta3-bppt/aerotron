from django.db import models

from stok.models.kategori import Kategori
from stok.models.lokasi import Lokasi


class Barang(models.Model):
    foto = models.ImageField(upload_to="barang", blank=True)
    nama = models.CharField(max_length=255)
    keterangan = models.TextField(blank=True)
    spek = models.TextField(verbose_name="spesifikasi", blank=True)
    jumlah = models.IntegerField()
    lokasi = models.ManyToManyField(Lokasi)
    kategori = models.ForeignKey(Kategori, on_delete=models.CASCADE)
    dibuat = models.DateTimeField(auto_now_add=True)
    diubah = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Barang"
        indexes = [
            models.Index(fields=["nama", "kategori"])
        ]

    def __str__(self):
        return f"{self.nama} ({self.jumlah})"
