# Generated by Django 4.2.2 on 2023-07-02 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0007_cart"),
    ]

    operations = [
        migrations.AddField(
            model_name="cart",
            name="total_price",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
    ]
