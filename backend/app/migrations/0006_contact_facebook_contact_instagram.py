# Generated by Django 5.1.4 on 2024-12-24 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_about_contact'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='facebook',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='contact',
            name='instagram',
            field=models.TextField(blank=True, null=True),
        ),
    ]
