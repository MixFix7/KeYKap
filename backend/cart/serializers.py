from rest_framework import serializers
from .models import *
from core.serializers import InfoProductSerializer


class CartSerializer(serializers.ModelSerializer):
    productsInfo = serializers.SerializerMethodField()

    def get_productsInfo(self, cart):
        product_serializer = InfoProductSerializer(cart.product)
        return product_serializer.data

    class Meta:
        model = Cart
        fields = ['id', 'productsInfo', 'total_price']