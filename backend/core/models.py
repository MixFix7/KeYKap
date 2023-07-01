from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    category = models.CharField(max_length=40)

    def __str__(self):
        return self.category


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


class ProductSpecs(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    brand = models.CharField(max_length=30)
    description = models.TextField()
    color = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return f"{self.product} specs"


class ProductPhoto(models.Model):
    product = models.ForeignKey(Product, default=None, on_delete=models.CASCADE)
    photo = models.FileField(upload_to='image_products/')

    def __str__(self):
        return f"{self.product} photo {self.photo.path}"


class KeyboardSpecs(ProductSpecs):
    keyboard_type = models.CharField(max_length=15)
    switches_name = models.CharField(max_length=30, null=True, blank=True)
    switches_img = models.ImageField(null=True, blank=True, upload_to="switches_img")
    lubricated = models.BooleanField()

    def __str__(self):
        return f"{self.product} specs"


class SwitchesSpecs(ProductSpecs):
    switches_type = models.CharField(max_length=20)
    switches_name = models.CharField(max_length=30, null=True, blank=True)
    switches_img = models.ImageField(null=True, blank=True, upload_to="switches_img")
    lubricated = models.BooleanField()

    def __str__(self):
        return f"{self.product} specs"


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

