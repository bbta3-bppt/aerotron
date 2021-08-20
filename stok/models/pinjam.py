from django.contrib.auth.models import User
from django.db import models

from stok.models.barang import Barang


class Pinjam(models.Model):
    barang = models.ForeignKey(Barang, on_delete=models.CASCADE)
    jumlah = models.IntegerField()
    dipinjam = models.ForeignKey(User, on_delete=models.CASCADE)
    kapan = models.DateTimeField(auto_now_add=True)
    dikembalikan = models.DateTimeField(blank=True, null=True)

    class Meta:
        verbose_name_plural = "Pinjam"
        ordering = ['-kapan']
        indexes = [
            models.Index(fields=["barang", "dipinjam"])
        ]

    def __str__(self):
        return f"{self.barang.nama} dipinjam oleh {self.dipinjam.username}"
