# Generated by Django 4.2.7 on 2024-10-30 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Manage', '0034_alter_term_college'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='classroom',
            name='branch',
        ),
        migrations.AddField(
            model_name='classroom',
            name='branch',
            field=models.ManyToManyField(blank=True, null=True, to='Manage.branch'),
        ),
    ]
