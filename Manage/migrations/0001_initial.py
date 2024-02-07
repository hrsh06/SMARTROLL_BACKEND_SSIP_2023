# Generated by Django 4.2.7 on 2024-02-07 17:15

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('StakeHolders', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Batch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('batch_name', models.CharField(max_length=10)),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Branch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('branch_name', models.CharField(max_length=255)),
                ('branch_code', models.IntegerField(unique=True)),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
                ('admins', models.ManyToManyField(to='StakeHolders.admin')),
            ],
        ),
        migrations.CreateModel(
            name='Classroom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('class_name', models.CharField(max_length=20)),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='College',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('college_name', models.CharField(max_length=255)),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Division',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('division_name', models.CharField(max_length=2)),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Router',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('network_add', models.GenericIPAddressField()),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject_name', models.CharField(max_length=255)),
                ('code', models.IntegerField(unique=True)),
                ('credit', models.IntegerField()),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='TimeTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
                ('division', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Manage.division')),
            ],
        ),
        migrations.CreateModel(
            name='Semester',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('no', models.IntegerField()),
                ('status', models.BooleanField(default=True)),
                ('start_year', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1900), django.core.validators.MaxValueValidator(2100)])),
                ('end_year', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1900), django.core.validators.MaxValueValidator(2100)])),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Manage.branch')),
            ],
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.CharField(blank=True, max_length=10, null=True)),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
                ('timetable', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Manage.timetable')),
            ],
        ),
        migrations.CreateModel(
            name='Lecture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('type', models.CharField(choices=[('lab', 'Lab'), ('theory', 'Theory')], max_length=6)),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
                ('batches', models.ManyToManyField(to='Manage.batch')),
                ('classroom', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Manage.classroom')),
                ('schedule', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='Manage.schedule')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Manage.subject')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='StakeHolders.teacher')),
            ],
        ),
        migrations.AddField(
            model_name='division',
            name='semester',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Manage.semester'),
        ),
        migrations.AddField(
            model_name='classroom',
            name='routers',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='Manage.router'),
        ),
        migrations.AddField(
            model_name='branch',
            name='college',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Manage.college'),
        ),
        migrations.AddField(
            model_name='batch',
            name='division',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Manage.division'),
        ),
        migrations.AddField(
            model_name='batch',
            name='students',
            field=models.ManyToManyField(to='StakeHolders.student'),
        ),
    ]
