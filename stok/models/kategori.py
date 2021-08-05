from django.db import models


class Kategori(models.Model):
    nama = models.CharField(max_length=180)
    dibuat = models.DateTimeField(auto_now_add=True)
    diubah = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Kategori"
        indexes = [
            models.Index(fields=["nama"])
        ]

    def __str__(self):
        return self.nama
