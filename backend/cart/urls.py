from django.urls import path
from .views import *

urlpatterns = [
    path("allCart/", CartView.as_view()),
    path("add/", CartAddProducts.as_view()),
    path("remove/<int:cart_id>/", DeleteCart.as_view()),
    path('buy/', BuyProductsFromCart.as_view())
]