# Generated by Django 4.2.7 on 2023-11-22 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StakeHolders', '0008_alter_student_display_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='steps',
            field=models.IntegerField(blank=True, default=1, null=True),
        ),
    ]
