# Generated by Django 3.2.5 on 2021-07-13 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('perawatan', '0004_fasilitas_singkatan'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='fasilitas',
            options={'ordering': ['nama', 'keahlian'], 'verbose_name_plural': 'Fasilitas'},
        ),
        migrations.AddField(
            model_name='fasilitas',
            name='deskripsi',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='fasilitas',
            name='gambar',
            field=models.URLField(default='https://i.pinimg.com/originals/e2/88/98/e288983fd08b90db2cba8fe050424482.png'),
        ),
    ]