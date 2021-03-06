# Generated by Django 3.2.5 on 2021-08-05 10:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('stok', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pinjam',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('jumlah', models.IntegerField()),
                ('kapan', models.DateTimeField(auto_now_add=True)),
                ('dikembalikan', models.DateTimeField(blank=True)),
                ('barang', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stok.barang')),
                ('peminjam', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Pinjam',
            },
        ),
        migrations.AddIndex(
            model_name='pinjam',
            index=models.Index(fields=['barang', 'peminjam'], name='stok_pinjam_barang__ad1560_idx'),
        ),
    ]
