# Generated by Django 4.2.2 on 2023-06-28 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0002_category_product_productspecs_delete_name_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Photo",
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
                (
                    "image",
                    models.ImageField(
                        blank=True, null=True, upload_to="image_products"
                    ),
                ),
            ],
        ),
        migrations.RemoveField(
            model_name="productspecs",
            name="image",
        ),
        migrations.AddField(
            model_name="productspecs",
            name="images",
            field=models.ManyToManyField(to="core.photo"),
        ),
    ]
