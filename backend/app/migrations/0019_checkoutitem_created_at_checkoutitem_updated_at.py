# Generated by Django 5.1.4 on 2024-12-27 03:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0018_alter_product_delivery_cost'),
    ]

    operations = [
        migrations.AddField(
            model_name='checkoutitem',
            name='created_at',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='checkoutitem',
            name='updated_at',
            field=models.DateField(auto_now=True, null=True),
        ),
    ]
