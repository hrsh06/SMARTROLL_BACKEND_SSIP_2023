# Generated by Django 4.2.7 on 2023-11-22 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StakeHolders', '0007_student_steps'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='display_picture',
            field=models.URLField(blank=True, null=True),
        ),
    ]
