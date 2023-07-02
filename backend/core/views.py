from django.shortcuts import render
from rest_framework.utils.serializer_helpers import ReturnDict
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializers import *


class AllProducts(APIView):
    def get(self, request):
        products = Product.objects.all()
        products_serialize = InfoProductSerializer(products, many=True)
        return Response(products_serialize.data)


class AllCategories(APIView):
    def get(self, request):
        categories = Category.objects.all()
        categories_serialize = CategorySerializer(categories, many=True)
        return Response(categories_serialize.data)


class AllProductsByCategories(APIView):
    def get(self, request):
        output = []
        categories = Category.objects.all()
        for category in categories:
            category_serializer = CategoryProductsSerializer(category)
            output.append(category_serializer.data)

        return Response(output)


class AllProductsInCategory(APIView):
    def get(self, request, category_name):
        products = Product.objects.filter(category=category_name)
        products_serializer = InfoProductSerializer(products, many=True)
        return Response(products_serializer.data)


class OneProduct(APIView):
    def get(self, request, name):
        product = Product.objects.get(name=name)
        product_serialize = InfoProductSerializer(product)
        return Response(product_serialize.data)


class AddProduct(APIView):
    def post(self, request):
        serializer = InfoProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class AllProductsViewSet(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products)
        permission_classes = [IsAuthenticated]
        return Response(serializer.data)


class CartView(APIView):
    def get(self, request, user):
        cart = Cart.objects.filter(user__username=user)
        cart_serializer = CartSerializer(cart, many=True)
        return Response(cart_serializer.data)

    def post(self, request, user):

        product_name = request.data.get('product_name')
        product = Product.objects.get(name=product_name)
        user = User.objects.get(username=user)
        cart = Cart.objects.create(product=product, user=user)

        return Response(status=201)




