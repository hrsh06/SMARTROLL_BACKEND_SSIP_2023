# Generated by Django 4.2.7 on 2024-11-07 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Manage', '0044_remove_permanentsubject_finalized'),
    ]

    operations = [
        migrations.AlterField(
            model_name='permanentsubject',
            name='practical_exam_duration',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='permanentsubject',
            name='theory_exam_duration',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
