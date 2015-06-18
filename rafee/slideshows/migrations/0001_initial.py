# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Slideshow',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50)),
                ('templates', models.CharField(max_length=1000)),
                ('transition_interval', models.PositiveIntegerField(default=15)),
                ('caching_interval', models.PositiveIntegerField(default=120)),
                ('team', models.ForeignKey(to='teams.Team')),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='slideshow',
            unique_together=set([('name', 'team')]),
        ),
    ]
