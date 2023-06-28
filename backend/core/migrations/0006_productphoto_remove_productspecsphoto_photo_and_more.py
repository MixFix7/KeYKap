# Generated by Django 4.2.2 on 2023-06-28 11:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0005_remove_photo_product_productspecsphoto"),
    ]

    operations = [
        migrations.CreateModel(
            name="ProductPhoto",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("photo", models.FileField(upload_to="image_products/")),
                (
                    "product",
                    models.ForeignKey(
                        default=None,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="core.product",
                    ),
                ),
            ],
        ),
        migrations.RemoveField(
            model_name="productspecsphoto",
            name="photo",
        ),
        migrations.RemoveField(
            model_name="productspecsphoto",
            name="productspecs",
        ),
        migrations.RemoveField(
            model_name="productspecs",
            name="images",
        ),
        migrations.DeleteModel(
            name="Photo",
        ),
        migrations.DeleteModel(
            name="ProductSpecsPhoto",
        ),
    ]
