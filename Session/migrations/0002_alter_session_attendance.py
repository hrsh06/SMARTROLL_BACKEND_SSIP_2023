# Generated by Django 4.2.7 on 2024-01-24 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Session', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='attendance',
            field=models.ManyToManyField(to='Session.attendance'),
        ),
    ]
