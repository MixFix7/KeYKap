from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from core.models import Product, KeyboardSpecs, ProductPhoto, Category


class AddProduct(APIView):
    def post(self, request):
        category = request.data.get('category')
        product_name = request.data.get('product_name')
        price = request.data.get('price')
        print(category, product_name, price)
        # product = request.data.get('product')
        # brand = request.data.get('brand')
        # description = request.data.get('description')
        # color = request.data.get('color')
        # keyboard_type = request.data.get('keyboard_type')
        # switches_name = request.data.get('switches_name')
        # switches_img = request.data.get('switches_img')
        # lubricated = request.data.get('lubricated')
        # photos = request.FILES.get('photos')

        category_queryset = Category.objects.get(category=category)
        Product.objects.create(category=category_queryset, name=product_name, price=price)

        return Response(status=status.HTTP_201_CREATED)


