# Generated by Django 3.2.5 on 2021-07-13 12:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('perawatan', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='fasilitas',
            name='keahlian',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='perawatan.keahlian'),
            preserve_default=False,
        ),
    ]