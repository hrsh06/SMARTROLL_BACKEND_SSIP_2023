# Generated by Django 4.2.7 on 2023-11-17 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Manage', '0010_subject_slug_timetable_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subject',
            name='credit',
            field=models.IntegerField(unique=True),
        ),
    ]
