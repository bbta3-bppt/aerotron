from django.db import models

from perawatan.models.fasilitas import Fasilitas


class Pengujian(models.Model):
    nama = models.CharField(max_length=500)
    fasilitas = models.ForeignKey(Fasilitas, on_delete=models.CASCADE)
    deskripsi = models.TextField(blank=True)
    dibuat = models.DateTimeField(auto_now_add=True)
    diubah = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Pengujian"
        ordering = ["-dibuat"]
        indexes = [
            models.Index(fields=["nama"])
        ]

    def __str__(self):
        return f"Pengujian: {self.nama}"
