from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

from perawatan.models.fasilitas import Fasilitas


class Pengujian(models.Model):
    nama = models.CharField(max_length=500)
    deskripsi = models.TextField(blank=True)
    fasilitas = models.ForeignKey(Fasilitas, on_delete=models.CASCADE)
    pemilik = models.ForeignKey(User, on_delete=models.CASCADE)
    berakhir = models.DateTimeField(default=timezone.now() + timezone.timedelta(days=180))
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
