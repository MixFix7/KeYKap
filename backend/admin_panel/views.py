from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from core.models import Product, KeyboardSpecs, ProductPhoto, Category, ProductPhoto


class AddProduct(APIView):
    def post(self, request):
        category = request.data.get('category')
        product_name = request.data.get('product_name')
        price = request.data.get('price')
        brand = request.data.get('brand')
        description = request.data.get('description')
        color = request.data.get('color')
        keyboard_type = request.data.get('keyboard_type')
        switches_name = request.data.get('switches_name')
        switches_img = request.FILES.get('switches_img')
        lubricated = request.data.get('lubricated')
        photos = request.FILES.getlist('photos')

        product = Product.objects.create(
            category=Category.objects.get(category=category),
            name=product_name,
            price=price
        )

        keyboard_specs = KeyboardSpecs.objects.create(
            product=product,
            brand=brand,
            description=description,
            color=color,
            keyboard_type=keyboard_type,
            switches_name=switches_name,
            switches_img=switches_img,
            lubricated=bool(lubricated),
        )

        for photo in photos:
            ProductPhoto.objects.create(
                product=product,
                photo=photo
            )

        return Response(status=status.HTTP_201_CREATED)


