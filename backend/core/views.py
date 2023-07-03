from django.shortcuts import render
from rest_framework.utils.serializer_helpers import ReturnDict
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
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
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AllProductsViewSet(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products)
        permission_classes = [IsAuthenticated]
        return Response(serializer.data)


class CartView(APIView):
    def post(self, request):
        user = request.data.get('user')
        cart = Cart.objects.filter(user__username=user, purchased=False)
        cart_serializer = CartSerializer(cart, many=True)
        total_price = 0

        for price in cart:
            total_price += price.product.price

        cart.update(total_price=total_price)

        return Response(cart_serializer.data)


class CartAddProducts(APIView):
    def post(self, request):
        count = request.data.get('count')
        user = request.data.get('user')

        for _ in range(count):
            product_name = request.data.get('product_name')
            product = Product.objects.get(name=product_name)
            user = User.objects.get(username=user)
            cart = Cart.objects.create(product=product, user=user)

        return Response(status=status.HTTP_201_CREATED)


class DeleteCart(APIView):
    def delete(self, request, cart_id):
        try:
            Cart.objects.get(id=cart_id).delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Cart.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class BuyProductsFromCart(APIView):
    def post(self, request):
        count = request.data.get('count')
        user = request.data.get('user')

        try:
            for i in range(count):
                product_id = request.data.get(f"product_{i}")
                Cart.objects.get(id=product_id, user__username=user).update(purchased=True)

        except Exception as e:
            return Response(f"Unsuccessful purchase attempt, error {e}", status=status.HTTP_500_BAD_REQUEST)

        return Response(status=status.HTTP_200_OK)








