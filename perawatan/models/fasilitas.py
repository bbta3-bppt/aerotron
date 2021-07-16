from django.db import models

from perawatan.models.keahlian import Keahlian


class Fasilitas(models.Model):
    nama = models.CharField(max_length=500)
    singkatan = models.CharField(max_length=25, blank=True)
    gambar = models.URLField(default='https://i.pinimg.com/originals/e2/88/98/e288983fd08b90db2cba8fe050424482.png')
    deskripsi = models.TextField(blank=True)
    keahlian = models.ForeignKey(Keahlian, on_delete=models.CASCADE)
    dibuat = models.DateTimeField(auto_now_add=True)
    diubah = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nama

    class Meta:
        verbose_name_plural = 'Fasilitas'
        ordering = ['nama', 'keahlian']
