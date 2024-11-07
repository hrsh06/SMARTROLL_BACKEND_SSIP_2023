# Generated by Django 4.2.7 on 2024-11-01 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Manage', '0038_stream_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='stream',
            name='title',
            field=models.CharField(choices=[('BE', "Bachelor's"), ('ME', "Master's")], default='blank_title', max_length=20),
            preserve_default=False,
        ),
    ]
