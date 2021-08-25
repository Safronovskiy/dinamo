# Generated by Django 3.2.6 on 2021-08-10 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SocialNetworksModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('social_title', models.CharField(max_length=250, verbose_name='')),
                ('social_url', models.URLField(verbose_name='')),
            ],
            options={
                'verbose_name': 'Социальная сеть',
                'verbose_name_plural': 'Социальные сети',
                'ordering': ('social_title',),
            },
        ),
    ]
