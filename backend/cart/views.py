from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from rest_framework import status


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


class GetProductsCountInCart(APIView):
    def get(self, request, user_id):
        count = Cart.objects.get_count_products_in_cart(user_id=user_id)
        return Response({'count': count})


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

        # try:
        for i in range(int(count)):
            product_id = request.data.get(f"product_{i}")
            Cart.objects.get(id=product_id, user__username=user).make_product_purchased()

        # except Exception as e:
        #     return Response(f"Unsuccessful purchase attempt, error {e}", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(status=status.HTTP_200_OK)
