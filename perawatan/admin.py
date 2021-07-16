from django.contrib import admin

from perawatan.models.fasilitas import Fasilitas
from perawatan.models.keahlian import Keahlian

admin.site.register(Fasilitas)
admin.site.register(Keahlian)
