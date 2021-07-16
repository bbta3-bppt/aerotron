from django.urls import path

from perawatan.views.fasilitas_view import DaftarFasilitas

urlpatterns = [
    path('api/fasilitas/', DaftarFasilitas.as_view(), name='daftar_fasilitas'),
]
