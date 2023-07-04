from django.db import models
from core.models import *
from django.contrib.auth.models import User


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    purchased = models.BooleanField(default=False)

    def make_product_purchased(self):
        self.purchased = True
        self.save()

    @classmethod
    def get_count_products_in_cart(cls, user_id):
        count = cls.objects.filter(purchased=False, user__id=user_id).count()
        return count

    def __str__(self):
        return f'cart of {self.user.username}'


