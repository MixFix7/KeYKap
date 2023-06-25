from rest_framework import serializers
from .models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class SpecsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSpecs
        fields = '__all__'


class KeyboardSpecsSerializer(SpecsSerializer):
    class Meta:
        model = KeyboardSpecs
        fields = '__all__'


class InfoProductSerializer(serializers.ModelSerializer):
    specs = serializers.SerializerMethodField()

    def get_specs(self, product):
        specs = KeyboardSpecs.objects.get(product=product)
        serializer = KeyboardSpecsSerializer(specs)
        return serializer.data

    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'price', 'specs']


class CategoryProductsSerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField()

    def get_products(self, category):
        products = category.product_set.all()
        product_serializer = ProductSerializer(products, many=True)
        return product_serializer.data

    class Meta:
        model = Category
        fields = ['id', 'category', 'products']