from django.db import models

from pengujian.models.pengujian import Pengujian


class PaketPengujian(models.Model):
    nama = models.CharField(max_length=500)
    persentase = models.FloatField()
    pengujian = models.ForeignKey(Pengujian, on_delete=models.CASCADE)
    dibuat = models.DateTimeField(auto_now_add=True)
    diubah = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Paket Pengujian"
        ordering = ["-dibuat"]
        indexes = [
            models.Index(fields=["nama"])
        ]

    def __str__(self):
        return f"Paket Pengujian: {self.nama}"
