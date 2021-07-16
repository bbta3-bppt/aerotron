from django.db import models


class Keahlian(models.Model):
    nama = models.CharField(max_length=25)
    dibuat = models.DateTimeField(auto_now_add=True)
    diubah = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nama

    class Meta:
        verbose_name_plural = 'Keahlian'
        ordering = ['nama']
