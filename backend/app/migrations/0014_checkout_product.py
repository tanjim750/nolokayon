# Generated by Django 5.1.4 on 2024-12-26 19:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_remove_checkout_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='checkout',
            name='product',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='app.product'),
        ),
    ]
